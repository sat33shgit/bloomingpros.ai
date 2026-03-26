import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./command";

vi.mock("cmdk", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  const input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
  >((props, ref) => <input ref={ref} {...props} />);

  const Command = primitive("div") as React.ForwardRefExoticComponent<
    React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
  > & {
    Input: typeof input;
    List: ReturnType<typeof primitive>;
    Empty: ReturnType<typeof primitive>;
    Group: ReturnType<typeof primitive>;
    Separator: ReturnType<typeof primitive>;
    Item: ReturnType<typeof primitive>;
  };

  Command.Input = input;
  Command.List = primitive("div");
  Command.Empty = primitive("div");
  Command.Group = primitive("div");
  Command.Separator = primitive("div");
  Command.Item = primitive("div");

  return { Command };
});

vi.mock("@/components/ui/dialog", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Dialog: ({
      children,
      open: _open,
      onOpenChange: _onOpenChange,
      ...props
    }: React.ComponentProps<"div"> & {
      open?: boolean;
      onOpenChange?: (open: boolean) => void;
    }) => <div {...props}>{children}</div>,
    DialogContent: ({
      children,
      showCloseButton,
      ...props
    }: React.ComponentProps<"div"> & { showCloseButton?: boolean }) => (
      <div
        data-slot="dialog-content"
        data-show-close-button={String(showCloseButton)}
        {...props}
      >
        {children}
      </div>
    ),
    DialogHeader: primitive("div"),
    DialogTitle: primitive("div"),
    DialogDescription: primitive("div"),
  };
});

describe("Command wrappers", () => {
  it("renders the command dialog with default title, description, and command slots", () => {
    const { container } = render(
      <CommandDialog open>
        <CommandInput placeholder="Type a command" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <div>Pages</div>
            <CommandItem>
              Dashboard
              <CommandShortcut>Cmd+K</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    );

    expect(screen.getByText("Command Palette")).toBeInTheDocument();
    expect(
      screen.getByText("Search for a command to run...")
    ).toBeInTheDocument();
    expect(container.querySelector("[data-slot='dialog-content']")).toHaveAttribute(
      "data-show-close-button",
      "true"
    );
    expect(container.querySelector("[data-slot='command']")).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='command-input-wrapper']")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type a command")).toHaveAttribute(
      "data-slot",
      "command-input"
    );
    expect(container.querySelector("[data-slot='command-list']")).toBeInTheDocument();
    expect(screen.getByText("No results found.")).toHaveAttribute(
      "data-slot",
      "command-empty"
    );
    expect(screen.getByText("Pages").parentElement).toHaveAttribute(
      "data-slot",
      "command-group"
    );
    expect(
      screen.getByText("Dashboard").closest("[data-slot='command-item']")
    ).toBeInTheDocument();
    expect(screen.getByText("Cmd+K")).toHaveAttribute(
      "data-slot",
      "command-shortcut"
    );
    expect(
      container.querySelector("[data-slot='command-separator']")
    ).toBeInTheDocument();
  });

  it("supports custom dialog metadata and close-button visibility", () => {
    const { container } = render(
      <CommandDialog
        open
        title="Quick switcher"
        description="Jump to a workspace"
        className="custom-command-dialog"
        showCloseButton={false}
      >
        <CommandList />
      </CommandDialog>
    );

    expect(screen.getByText("Quick switcher")).toBeInTheDocument();
    expect(screen.getByText("Jump to a workspace")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='dialog-content']")).toHaveAttribute(
      "data-show-close-button",
      "false"
    );
    expect(container.querySelector("[data-slot='dialog-content']")).toHaveClass(
      "custom-command-dialog"
    );
  });
});
