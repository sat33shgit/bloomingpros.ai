import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

vi.mock("@radix-ui/react-select", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) => React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Root: primitive("div"),
    Group: primitive("div"),
    Value: primitive("span"),
    Trigger: primitive("button"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Content: React.forwardRef<
      HTMLDivElement,
      React.HTMLAttributes<HTMLDivElement> & {
        position?: string;
        align?: string;
      }
    >(({ children, position, align, ...props }, ref) => (
      <div
        ref={ref}
        data-position={position}
        data-align={align}
        {...props}
      >
        {children}
      </div>
    )),
    Viewport: ({
      children,
      ...props
    }: React.ComponentProps<"div">) => (
      <div data-slot="select-viewport" {...props}>
        {children}
      </div>
    ),
    Label: primitive("div"),
    Item: primitive("button"),
    ItemIndicator: primitive("span"),
    ItemText: primitive("span"),
    Separator: primitive("div"),
    ScrollUpButton: primitive("div"),
    ScrollDownButton: primitive("div"),
    Icon: ({
      children,
      asChild,
    }: {
      children: React.ReactNode;
      asChild?: boolean;
    }) =>
      asChild ? <>{children}</> : <span>{children}</span>,
  };
});

describe("Select wrappers", () => {
  it("renders the select primitives with default trigger sizing and popper content", () => {
    const { container } = render(
      <Select value="engineering">
        <SelectTrigger>
          <SelectValue>Engineering</SelectValue>
        </SelectTrigger>
        <SelectContent data-testid="select-content">
          <SelectGroup>
            <SelectLabel>Tracks</SelectLabel>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectSeparator />
            <SelectItem value="design">Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const trigger = container.querySelector(
      "[data-slot='select-trigger']"
    ) as HTMLButtonElement;
    const value = trigger.querySelector(
      "[data-slot='select-value']"
    ) as HTMLSpanElement;

    expect(trigger).toHaveAttribute(
      "data-slot",
      "select-trigger"
    );
    expect(trigger).toHaveAttribute(
      "data-size",
      "default"
    );
    expect(trigger).toHaveTextContent("Engineering");
    expect(value).toHaveAttribute(
      "data-slot",
      "select-value"
    );

    expect(screen.getByTestId("select-content")).toHaveAttribute(
      "data-slot",
      "select-content"
    );
    expect(screen.getByTestId("select-content")).toHaveAttribute(
      "data-position",
      "popper"
    );
    expect(screen.getByTestId("select-content")).toHaveAttribute(
      "data-align",
      "center"
    );
    expect(screen.getByTestId("select-content").className).toContain(
      "translate-y-1"
    );
    expect(screen.getByText("Tracks")).toHaveAttribute(
      "data-slot",
      "select-label"
    );
    expect(screen.getByRole("button", { name: "Design" })).toHaveAttribute(
      "data-slot",
      "select-item"
    );
    expect(
      document.querySelector("[data-slot='select-separator']")
    ).toBeInTheDocument();
    expect(
      document.querySelector("[data-slot='select-scroll-up-button']")
    ).toBeInTheDocument();
    expect(
      document.querySelector("[data-slot='select-scroll-down-button']")
    ).toBeInTheDocument();
    expect(
      document.querySelector("[data-slot='select-viewport']")
    )?.toHaveClass("h-[var(--radix-select-trigger-height)]");
  });

  it("supports small triggers and non-popper content positioning", () => {
    const { container } = render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue>Compact</SelectValue>
        </SelectTrigger>
        <SelectContent data-testid="select-content" position="item-aligned" align="start">
          <SelectGroup>
            <SelectItem value="compact">Compact</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );

    const trigger = container.querySelector(
      "[data-slot='select-trigger']"
    ) as HTMLButtonElement;

    expect(trigger).toHaveAttribute(
      "data-size",
      "sm"
    );
    expect(trigger).toHaveTextContent("Compact");
    expect(screen.getByTestId("select-content")).toHaveAttribute(
      "data-position",
      "item-aligned"
    );
    expect(screen.getByTestId("select-content")).toHaveAttribute(
      "data-align",
      "start"
    );
    expect(screen.getByTestId("select-content").className).not.toContain(
      "translate-y-1"
    );
    expect(
      document.querySelector("[data-slot='select-viewport']")
    )?.not.toHaveClass("h-[var(--radix-select-trigger-height)]");
  });
});
