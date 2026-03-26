import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "./item";

describe("Item helpers", () => {
  it("renders item layout primitives with their slots and variants", () => {
    const { container } = render(
      <ItemGroup data-testid="item-group">
        <Item data-testid="item-default">
          <ItemMedia data-testid="item-media-default">D</ItemMedia>
          <ItemContent>
            <ItemHeader>
              <ItemTitle>Default item</ItemTitle>
              <ItemActions>
                <button type="button">Edit</button>
              </ItemActions>
            </ItemHeader>
            <ItemDescription>
              Review the default item layout.
            </ItemDescription>
            <ItemFooter>
              <span>Footer content</span>
            </ItemFooter>
          </ItemContent>
        </Item>
        <ItemSeparator />
        <Item asChild variant="outline" size="sm">
          <a href="/docs" data-testid="item-link">
            <ItemMedia data-testid="item-media-icon" variant="icon">
              <svg aria-label="icon media" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>Linked item</ItemTitle>
              <ItemDescription>Learn more</ItemDescription>
            </ItemContent>
            <ItemMedia data-testid="item-media-image" variant="image">
              <img alt="preview" src="https://example.com/image.png" />
            </ItemMedia>
          </a>
        </Item>
      </ItemGroup>
    );

    expect(screen.getByTestId("item-group")).toHaveAttribute(
      "data-slot",
      "item-group"
    );
    expect(screen.getByTestId("item-group")).toHaveAttribute("role", "list");

    expect(screen.getByTestId("item-default")).toHaveAttribute("data-slot", "item");
    expect(screen.getByTestId("item-default")).toHaveAttribute(
      "data-variant",
      "default"
    );
    expect(screen.getByTestId("item-default")).toHaveAttribute(
      "data-size",
      "default"
    );

    expect(screen.getByTestId("item-link")).toHaveAttribute("data-slot", "item");
    expect(screen.getByTestId("item-link")).toHaveAttribute(
      "data-variant",
      "outline"
    );
    expect(screen.getByTestId("item-link")).toHaveAttribute("data-size", "sm");
    expect(screen.getByTestId("item-link")).toHaveAttribute("href", "/docs");

    expect(screen.getByTestId("item-media-default")).toHaveAttribute(
      "data-variant",
      "default"
    );
    expect(screen.getByTestId("item-media-icon")).toHaveAttribute(
      "data-variant",
      "icon"
    );
    expect(screen.getByTestId("item-media-image")).toHaveAttribute(
      "data-variant",
      "image"
    );

    expect(screen.getByText("Default item")).toHaveAttribute(
      "data-slot",
      "item-title"
    );
    expect(screen.getByText("Review the default item layout.")).toHaveAttribute(
      "data-slot",
      "item-description"
    );
    expect(screen.getByText("Footer content")).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='item-separator']")
    ).toBeInTheDocument();
  });
});
