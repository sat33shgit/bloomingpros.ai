import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ManusDialog } from "./ManusDialog";

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
      open,
      onOpenChange,
    }: {
      children: React.ReactNode;
      open?: boolean;
      onOpenChange?: (open: boolean) => void;
    }) => (
      <div data-slot="dialog" data-open={String(open)}>
        <button type="button" onClick={() => onOpenChange?.(true)}>
          Mock open
        </button>
        <button type="button" onClick={() => onOpenChange?.(false)}>
          Mock close
        </button>
        {children}
      </div>
    ),
    DialogContent: primitive("div"),
    DialogDescription: primitive("div"),
    DialogFooter: primitive("div"),
    DialogTitle: primitive("div"),
  };
});

describe("ManusDialog", () => {
  it("renders the uncontrolled dialog content and closes through internal state", () => {
    const onLogin = vi.fn();
    const onClose = vi.fn();

    const { container } = render(
      <ManusDialog
        open
        title="Continue with Manus"
        logo="/manus.png"
        onLogin={onLogin}
        onClose={onClose}
      />
    );

    expect(container.querySelector("[data-slot='dialog']")).toHaveAttribute(
      "data-open",
      "true"
    );
    expect(screen.getByAltText("Dialog graphic")).toHaveAttribute(
      "src",
      "/manus.png"
    );
    expect(screen.getByText("Continue with Manus")).toBeInTheDocument();
    expect(
      screen.getByText("Please login with Manus to continue")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Login with Manus" }));
    expect(onLogin).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: "Mock close" }));

    expect(container.querySelector("[data-slot='dialog']")).toHaveAttribute(
      "data-open",
      "false"
    );
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("uses controlled open state and only calls onClose when closing", () => {
    const onLogin = vi.fn();
    const onOpenChange = vi.fn();
    const onClose = vi.fn();

    const { container } = render(
      <ManusDialog
        open={false}
        onLogin={onLogin}
        onOpenChange={onOpenChange}
        onClose={onClose}
      />
    );

    expect(screen.queryByAltText("Dialog graphic")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: /continue with manus/i })
    ).not.toBeInTheDocument();
    expect(container.querySelector("[data-slot='dialog']")).toHaveAttribute(
      "data-open",
      "false"
    );

    fireEvent.click(screen.getByRole("button", { name: "Mock open" }));
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(onClose).not.toHaveBeenCalled();

    fireEvent.click(screen.getByRole("button", { name: "Mock close" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
