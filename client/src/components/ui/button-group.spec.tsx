import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
} from "./button-group";

describe("Button group helpers", () => {
  it("renders horizontal and vertical button groups with text and separators", () => {
    const { container } = render(
      <>
        <ButtonGroup orientation="horizontal">
          <ButtonGroupText>Filters</ButtonGroupText>
          <ButtonGroupSeparator />
          <button type="button">Apply</button>
        </ButtonGroup>

        <ButtonGroup orientation="vertical">
          <ButtonGroupText asChild>
            <span data-testid="vertical-text">Stacked</span>
          </ButtonGroupText>
          <ButtonGroupSeparator orientation="horizontal" />
          <button type="button">Clear</button>
        </ButtonGroup>
      </>
    );

    const groups = container.querySelectorAll("[data-slot='button-group']");
    const separators = container.querySelectorAll(
      "[data-slot='button-group-separator']"
    );

    expect(groups).toHaveLength(2);
    expect(groups[0]).toHaveAttribute("role", "group");
    expect(groups[0]).toHaveAttribute("data-orientation", "horizontal");
    expect(groups[1]).toHaveAttribute("data-orientation", "vertical");
    expect(screen.getByText("Filters")).toBeInTheDocument();
    expect(screen.getByTestId("vertical-text")).toBeInTheDocument();
    expect(separators).toHaveLength(2);
    expect(separators[0]).toHaveAttribute("data-orientation", "vertical");
    expect(separators[1]).toHaveAttribute("data-orientation", "horizontal");
    expect(buttonGroupVariants()).toContain("rounded-l-none");
    expect(buttonGroupVariants({ orientation: "vertical" })).toContain("flex-col");
  });
});
