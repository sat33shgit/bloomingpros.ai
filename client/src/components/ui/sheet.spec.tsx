import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

vi.mock("@radix-ui/react-dialog", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Root: primitive("div"),
    Trigger: primitive("button"),
    Close: primitive("button"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Overlay: primitive("div"),
    Content: primitive("div"),
    Title: primitive("div"),
    Description: primitive("div"),
  };
});

describe("Sheet wrappers", () => {
  it("renders the exported sheet helpers with the default right-side content", () => {
    const { container } = render(
      <Sheet open>
        <SheetTrigger>Open sheet</SheetTrigger>
        <SheetContent data-testid="sheet-content">
          <SheetHeader>
            <SheetTitle>Preferences</SheetTitle>
            <SheetDescription>Update your settings.</SheetDescription>
          </SheetHeader>
          <div>Sheet body</div>
          <SheetFooter>
            <SheetClose data-testid="sheet-close">Dismiss</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByRole("button", { name: "Open sheet" })).toHaveAttribute(
      "data-slot",
      "sheet-trigger"
    );
    expect(screen.getByTestId("sheet-content")).toHaveAttribute(
      "data-slot",
      "sheet-content"
    );
    expect(screen.getByTestId("sheet-content").className).toContain("right-0");
    expect(container.querySelector("[data-slot='sheet-overlay']")).toBeInTheDocument();
    expect(screen.getByText("Preferences").parentElement).toHaveAttribute(
      "data-slot",
      "sheet-header"
    );
    expect(screen.getByText("Preferences")).toHaveAttribute(
      "data-slot",
      "sheet-title"
    );
    expect(screen.getByText("Update your settings.")).toHaveAttribute(
      "data-slot",
      "sheet-description"
    );
    expect(screen.getByText("Dismiss").parentElement).toHaveAttribute(
      "data-slot",
      "sheet-footer"
    );
    expect(screen.getByTestId("sheet-close")).toHaveAttribute(
      "data-slot",
      "sheet-close"
    );
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });

  it("supports left, top, and bottom sheet positions", () => {
    const cases = [
      { side: "left" as const, expectedClass: "left-0" },
      { side: "top" as const, expectedClass: "top-0" },
      { side: "bottom" as const, expectedClass: "bottom-0" },
    ];

    for (const testCase of cases) {
      const { getByTestId, unmount } = render(
        <Sheet open>
          <SheetContent data-testid="sheet-content" side={testCase.side}>
            {testCase.side}
          </SheetContent>
        </Sheet>
      );

      expect(getByTestId("sheet-content").className).toContain(
        testCase.expectedClass
      );

      unmount();
    }
  });
});
