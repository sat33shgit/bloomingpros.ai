import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card wrappers", () => {
  it("renders card layout helpers and their slots", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>Revenue overview</CardTitle>
          <CardDescription>Updated for March</CardDescription>
          <CardAction>
            <button type="button">Refresh</button>
          </CardAction>
        </CardHeader>
        <CardContent>Chart content</CardContent>
        <CardFooter>
          <span>Footer actions</span>
        </CardFooter>
      </Card>
    );

    expect(container.querySelector("[data-slot='card']")).toBeInTheDocument();
    expect(screen.getByText("Revenue overview").parentElement).toHaveAttribute(
      "data-slot",
      "card-header"
    );
    expect(screen.getByText("Revenue overview")).toHaveAttribute(
      "data-slot",
      "card-title"
    );
    expect(screen.getByText("Updated for March")).toHaveAttribute(
      "data-slot",
      "card-description"
    );
    expect(screen.getByRole("button", { name: "Refresh" }).parentElement).toHaveAttribute(
      "data-slot",
      "card-action"
    );
    expect(screen.getByText("Chart content")).toHaveAttribute(
      "data-slot",
      "card-content"
    );
    expect(screen.getByText("Footer actions").parentElement).toHaveAttribute(
      "data-slot",
      "card-footer"
    );
  });
});
