import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

vi.mock("@radix-ui/react-dropdown-menu", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => {
        const { sideOffset, ...rest } = props as React.HTMLAttributes<HTMLElement> & {
          sideOffset?: number;
        };

        return React.createElement(
          tag,
          {
            ref,
            ...(sideOffset !== undefined
              ? { "data-side-offset": String(sideOffset) }
              : null),
            ...rest,
          },
          children
        );
      }
    );

  return {
    Root: primitive("div"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Trigger: primitive("button"),
    Content: primitive("div"),
    Group: primitive("div"),
    Item: primitive("button"),
    CheckboxItem: primitive("button"),
    RadioGroup: primitive("div"),
    RadioItem: primitive("button"),
    Label: primitive("div"),
    Separator: primitive("div"),
    Sub: primitive("div"),
    SubTrigger: primitive("button"),
    SubContent: primitive("div"),
    ItemIndicator: primitive("span"),
  };
});

describe("Dropdown menu wrappers", () => {
  it("renders the exported dropdown menu components with the expected data attributes", () => {
    const { container } = render(
      <DropdownMenu data-testid="dropdown-root">
        <DropdownMenuTrigger>Open menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuGroup>
            <DropdownMenuLabel inset>Actions</DropdownMenuLabel>
            <DropdownMenuItem>View</DropdownMenuItem>
            <DropdownMenuItem inset variant="destructive">
              Delete
            </DropdownMenuItem>
            <DropdownMenuCheckboxItem checked>
              Show archived
            </DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="grid">Grid</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger inset>Share</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>Invite team</DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuShortcut>Cmd+Shift+P</DropdownMenuShortcut>
          </DropdownMenuGroup>
        </DropdownMenuContent>
        <DropdownMenuPortal>
          <div>Standalone dropdown portal child</div>
        </DropdownMenuPortal>
      </DropdownMenu>
    );

    expect(screen.getByTestId("dropdown-root")).toHaveAttribute(
      "data-slot",
      "dropdown-menu"
    );
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "data-slot",
      "dropdown-menu-trigger"
    );
    expect(screen.getByTestId("dropdown-content")).toHaveAttribute(
      "data-slot",
      "dropdown-menu-content"
    );
    expect(screen.getByTestId("dropdown-content")).toHaveAttribute(
      "data-side-offset",
      "4"
    );
    expect(screen.getByText("Actions")).toHaveAttribute("data-inset", "true");
    expect(screen.getByRole("button", { name: "Delete" })).toHaveAttribute(
      "data-variant",
      "destructive"
    );
    expect(
      screen.getByRole("button", { name: "Show archived" })
    ).toHaveAttribute("data-slot", "dropdown-menu-checkbox-item");
    expect(screen.getByRole("button", { name: "Grid" })).toHaveAttribute(
      "data-slot",
      "dropdown-menu-radio-item"
    );
    expect(screen.getByRole("button", { name: "Share" })).toHaveAttribute(
      "data-slot",
      "dropdown-menu-sub-trigger"
    );
    expect(screen.getByText("Cmd+Shift+P")).toHaveAttribute(
      "data-slot",
      "dropdown-menu-shortcut"
    );
    expect(
      screen.getByText("Standalone dropdown portal child")
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='dropdown-menu-separator']")
    ).toBeInTheDocument();
  });
});
