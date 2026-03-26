import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";

vi.mock("@radix-ui/react-alert-dialog", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Root: primitive("div"),
    Trigger: primitive("button"),
    Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Overlay: primitive("div"),
    Content: primitive("div"),
    Title: primitive("div"),
    Description: primitive("div"),
    Action: primitive("button"),
    Cancel: primitive("button"),
  };
});

describe("Alert dialog wrappers", () => {
  it("renders the alert dialog slots, overlay, and action buttons", () => {
    const { container } = render(
      <AlertDialog open>
        <AlertDialogTrigger>Delete account</AlertDialogTrigger>
        <AlertDialogContent data-testid="alert-content">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm deletion</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(screen.getByRole("button", { name: "Delete account" })).toHaveAttribute(
      "data-slot",
      "alert-dialog-trigger"
    );
    expect(screen.getByTestId("alert-content")).toHaveAttribute(
      "data-slot",
      "alert-dialog-content"
    );
    expect(
      container.querySelector("[data-slot='alert-dialog-overlay']")
    ).toBeInTheDocument();
    expect(screen.getByText("Confirm deletion").parentElement).toHaveAttribute(
      "data-slot",
      "alert-dialog-header"
    );
    expect(screen.getByText("Confirm deletion")).toHaveAttribute(
      "data-slot",
      "alert-dialog-title"
    );
    expect(screen.getByText("This action cannot be undone.")).toHaveAttribute(
      "data-slot",
      "alert-dialog-description"
    );
    expect(screen.getByText("Cancel").parentElement).toHaveAttribute(
      "data-slot",
      "alert-dialog-footer"
    );
    expect(screen.getByRole("button", { name: "Cancel" }).className).toContain(
      "border"
    );
    expect(screen.getByRole("button", { name: "Continue" }).className).toContain(
      "bg-primary"
    );
  });
});
