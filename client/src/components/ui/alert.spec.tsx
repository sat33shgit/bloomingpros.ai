import { render, screen } from "@testing-library/react";
import { AlertCircle } from "lucide-react";
import { describe, expect, it } from "vitest";

import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert helpers", () => {
  it("renders alert slots and destructive styling", () => {
    const { rerender } = render(
      <Alert>
        <AlertCircle aria-label="alert icon" />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>
          <p>Everything looks healthy.</p>
        </AlertDescription>
      </Alert>
    );

    expect(screen.getByRole("alert")).toHaveAttribute("data-slot", "alert");
    expect(screen.getByRole("alert")).toHaveClass("bg-card");
    expect(screen.getByText("Heads up")).toHaveAttribute(
      "data-slot",
      "alert-title"
    );
    expect(
      screen
        .getByText("Everything looks healthy.")
        .closest("[data-slot='alert-description']")
    ).toBeInTheDocument();

    rerender(
      <Alert variant="destructive">
        <AlertTitle>Something failed</AlertTitle>
        <AlertDescription>Retry the request.</AlertDescription>
      </Alert>
    );

    expect(screen.getByRole("alert")).toHaveClass("text-destructive");
    expect(screen.getByText("Retry the request.")).toHaveAttribute(
      "data-slot",
      "alert-description"
    );
  });
});
