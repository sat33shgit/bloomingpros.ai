import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ToggleGroup, ToggleGroupItem } from "./toggle-group";

vi.mock("@radix-ui/react-toggle-group", async () => {
  const React = await import("react");

  const Root = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  );

  const Item = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
  >(({ children, ...props }, ref) => (
    <button ref={ref} type="button" {...props}>
      {children}
    </button>
  ));

  return { Root, Item };
});

describe("Toggle group wrappers", () => {
  it("propagates group variants and falls back to item-specific variants", () => {
    render(
      <>
        <ToggleGroup
          data-testid="formatted-group"
          type="single"
          variant="outline"
          size="sm"
          className="format-group"
        >
          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup data-testid="sizing-group" type="multiple">
          <ToggleGroupItem value="grid" variant="default" size="lg">
            Grid
          </ToggleGroupItem>
        </ToggleGroup>
      </>
    );

    expect(screen.getByTestId("formatted-group")).toHaveAttribute(
      "data-slot",
      "toggle-group"
    );
    expect(screen.getByTestId("formatted-group")).toHaveAttribute(
      "data-variant",
      "outline"
    );
    expect(screen.getByTestId("formatted-group")).toHaveAttribute(
      "data-size",
      "sm"
    );
    expect(screen.getByTestId("formatted-group")).toHaveClass("format-group");
    expect(screen.getByRole("button", { name: "Bold" })).toHaveAttribute(
      "data-variant",
      "outline"
    );
    expect(screen.getByRole("button", { name: "Bold" })).toHaveAttribute(
      "data-size",
      "sm"
    );
    expect(screen.getByRole("button", { name: "Bold" })).toHaveClass(
      "min-w-0",
      "rounded-none"
    );
    expect(screen.getByRole("button", { name: "Grid" })).toHaveAttribute(
      "data-variant",
      "default"
    );
    expect(screen.getByRole("button", { name: "Grid" })).toHaveAttribute(
      "data-size",
      "lg"
    );
  });
});
