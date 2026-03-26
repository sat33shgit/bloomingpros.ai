import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";

vi.mock("@radix-ui/react-context-menu", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Root: primitive("div"),
    Trigger: primitive("button"),
    Group: primitive("div"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Sub: primitive("div"),
    RadioGroup: primitive("div"),
    SubTrigger: primitive("button"),
    SubContent: primitive("div"),
    Content: primitive("div"),
    Item: primitive("button"),
    CheckboxItem: primitive("button"),
    RadioItem: primitive("button"),
    Label: primitive("div"),
    Separator: primitive("div"),
    ItemIndicator: primitive("span"),
  };
});

describe("Context menu wrappers", () => {
  it("renders the exported context menu components with the expected data attributes", () => {
    const { container } = render(
      <ContextMenu data-testid="context-root">
        <ContextMenuTrigger>Open context menu</ContextMenuTrigger>
        <ContextMenuContent data-testid="context-content">
          <ContextMenuGroup>
            <ContextMenuLabel inset>Actions</ContextMenuLabel>
            <ContextMenuItem>Rename</ContextMenuItem>
            <ContextMenuItem inset variant="destructive">
              Remove
            </ContextMenuItem>
            <ContextMenuCheckboxItem checked>Pin item</ContextMenuCheckboxItem>
            <ContextMenuRadioGroup>
              <ContextMenuRadioItem value="compact">Compact</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>Export</ContextMenuSubTrigger>
              <ContextMenuSubContent>Download CSV</ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuShortcut>Ctrl+E</ContextMenuShortcut>
          </ContextMenuGroup>
        </ContextMenuContent>
        <ContextMenuPortal>
          <div>Standalone context portal child</div>
        </ContextMenuPortal>
      </ContextMenu>
    );

    expect(screen.getByTestId("context-root")).toHaveAttribute(
      "data-slot",
      "context-menu"
    );
    expect(screen.getByRole("button", { name: "Open context menu" })).toHaveAttribute(
      "data-slot",
      "context-menu-trigger"
    );
    expect(screen.getByTestId("context-content")).toHaveAttribute(
      "data-slot",
      "context-menu-content"
    );
    expect(screen.getByText("Actions")).toHaveAttribute("data-inset", "true");
    expect(screen.getByRole("button", { name: "Remove" })).toHaveAttribute(
      "data-variant",
      "destructive"
    );
    expect(screen.getByRole("button", { name: "Pin item" })).toHaveAttribute(
      "data-slot",
      "context-menu-checkbox-item"
    );
    expect(screen.getByRole("button", { name: "Compact" })).toHaveAttribute(
      "data-slot",
      "context-menu-radio-item"
    );
    expect(screen.getByRole("button", { name: "Export" })).toHaveAttribute(
      "data-slot",
      "context-menu-sub-trigger"
    );
    expect(screen.getByText("Ctrl+E")).toHaveAttribute(
      "data-slot",
      "context-menu-shortcut"
    );
    expect(screen.getByText("Standalone context portal child")).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='context-menu-separator']")
    ).toBeInTheDocument();
  });
});
