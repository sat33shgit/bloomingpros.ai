import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar";

vi.mock("@radix-ui/react-menubar", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => {
        const {
          alignOffset: _alignOffset,
          sideOffset: _sideOffset,
          ...rest
        } = props as React.HTMLAttributes<HTMLElement> & {
          alignOffset?: number;
          sideOffset?: number;
        };

        return React.createElement(tag, { ref, ...rest }, children);
      }
    );

  return {
    Root: primitive("div"),
    Menu: primitive("div"),
    Group: primitive("div"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    RadioGroup: primitive("div"),
    Trigger: primitive("button"),
    Content: primitive("div"),
    Item: primitive("button"),
    CheckboxItem: primitive("button"),
    RadioItem: primitive("button"),
    Label: primitive("div"),
    Separator: primitive("div"),
    Sub: primitive("div"),
    SubTrigger: primitive("button"),
    SubContent: primitive("div"),
    ItemIndicator: primitive("span"),
  };
});

describe("Menubar wrappers", () => {
  it("renders the exported menubar components with the expected data attributes", () => {
    const { container } = render(
      <Menubar data-testid="menubar-root">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent data-testid="menubar-content">
            <MenubarGroup>
              <MenubarLabel inset>Actions</MenubarLabel>
              <MenubarItem>Open</MenubarItem>
              <MenubarItem inset variant="destructive">
                Delete
              </MenubarItem>
              <MenubarCheckboxItem checked>Show Hidden</MenubarCheckboxItem>
              <MenubarRadioGroup>
                <MenubarRadioItem value="list">List</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger inset>Share</MenubarSubTrigger>
                <MenubarSubContent>Invite Team</MenubarSubContent>
              </MenubarSub>
              <MenubarShortcut>Cmd+K</MenubarShortcut>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarPortal>
          <div>Standalone portal child</div>
        </MenubarPortal>
      </Menubar>
    );

    expect(screen.getByTestId("menubar-root")).toHaveAttribute("data-slot", "menubar");
    expect(screen.getByRole("button", { name: "File" })).toHaveAttribute(
      "data-slot",
      "menubar-trigger"
    );
    expect(screen.getByTestId("menubar-content")).toHaveAttribute("data-slot", "menubar-content");
    expect(screen.getByText("Actions")).toHaveAttribute("data-inset", "true");
    expect(screen.getByRole("button", { name: "Delete" })).toHaveAttribute(
      "data-variant",
      "destructive"
    );
    expect(screen.getByRole("button", { name: "Show Hidden" })).toHaveAttribute(
      "data-slot",
      "menubar-checkbox-item"
    );
    expect(screen.getByRole("button", { name: "List" })).toHaveAttribute(
      "data-slot",
      "menubar-radio-item"
    );
    expect(screen.getByRole("button", { name: "Share" })).toHaveAttribute(
      "data-slot",
      "menubar-sub-trigger"
    );
    expect(screen.getByText("Cmd+K")).toHaveAttribute("data-slot", "menubar-shortcut");
    expect(screen.getByText("Standalone portal child")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='menubar-separator']")).toBeInTheDocument();
  });
});
