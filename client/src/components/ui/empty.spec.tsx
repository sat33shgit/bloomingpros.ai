import { render, screen } from "@testing-library/react";
import { SearchIcon } from "lucide-react";
import { describe, expect, it } from "vitest";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./empty";

describe("Empty state helpers", () => {
  it("renders empty state slots and both default and icon media variants", () => {
    render(
      <Empty>
        <EmptyHeader>
          <EmptyMedia data-testid="default-media">Default media</EmptyMedia>
          <EmptyMedia data-testid="icon-media" variant="icon">
            <SearchIcon aria-label="search icon" />
          </EmptyMedia>
          <EmptyTitle>No results found</EmptyTitle>
          <EmptyDescription>
            Adjust your filters or <a href="/contact">contact support</a>.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <button type="button">Clear filters</button>
        </EmptyContent>
      </Empty>
    );

    expect(screen.getByText("No results found").closest("[data-slot='empty']")).toBeInTheDocument();
    expect(screen.getByText("No results found").parentElement).toHaveAttribute(
      "data-slot",
      "empty-header"
    );
    expect(screen.getByTestId("default-media")).toHaveAttribute(
      "data-variant",
      "default"
    );
    expect(screen.getByTestId("icon-media")).toHaveAttribute(
      "data-variant",
      "icon"
    );
    expect(screen.getByText("No results found")).toHaveAttribute(
      "data-slot",
      "empty-title"
    );
    const supportLink = screen.getByRole("link", { name: "contact support" });
    expect(supportLink.closest("[data-slot='empty-description']")).toBeInTheDocument();
    expect(supportLink).toHaveAttribute("href", "/contact");
    expect(screen.getByRole("button", { name: "Clear filters" }).parentElement).toHaveAttribute(
      "data-slot",
      "empty-content"
    );
  });
});
