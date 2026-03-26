import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

describe("Input group helpers", () => {
  it("focuses the input when a non-button addon is clicked", () => {
    render(
      <InputGroup data-testid="input-group">
        <InputGroupAddon data-testid="addon">
          <InputGroupText>@bloomingpros.ai</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" />
      </InputGroup>
    );

    const input = screen.getByPlaceholderText("Username");
    fireEvent.click(screen.getByText("@bloomingpros.ai"));

    expect(screen.getByTestId("input-group")).toHaveAttribute(
      "data-slot",
      "input-group"
    );
    expect(screen.getByTestId("input-group")).toHaveAttribute("role", "group");
    expect(screen.getByTestId("addon")).toHaveAttribute(
      "data-slot",
      "input-group-addon"
    );
    expect(screen.getByTestId("addon")).toHaveAttribute(
      "data-align",
      "inline-start"
    );
    expect(input).toHaveAttribute("data-slot", "input-group-control");
    expect(input).toHaveFocus();
  });

  it("does not force focus when an addon button is clicked and renders textarea controls", () => {
    render(
      <>
        <InputGroup>
          <InputGroupAddon data-testid="button-addon" align="inline-end">
            <InputGroupButton aria-label="Clear value" size="icon-sm">
              x
            </InputGroupButton>
          </InputGroupAddon>
          <InputGroupInput placeholder="Email" />
        </InputGroup>

        <InputGroup>
          <InputGroupTextarea placeholder="Tell us more" />
          <InputGroupAddon data-testid="textarea-addon" align="block-end">
            <InputGroupText>Markdown supported</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </>
    );

    const input = screen.getByPlaceholderText("Email");
    const clearButton = screen.getByRole("button", { name: "Clear value" });
    const textarea = screen.getByPlaceholderText("Tell us more");

    fireEvent.click(clearButton);

    expect(input).not.toHaveFocus();
    expect(clearButton).toHaveAttribute("type", "button");
    expect(clearButton).toHaveAttribute("data-size", "icon-sm");
    expect(screen.getByTestId("button-addon")).toHaveAttribute(
      "data-align",
      "inline-end"
    );
    expect(textarea).toHaveAttribute("data-slot", "input-group-control");
    expect(screen.getByTestId("textarea-addon")).toHaveAttribute(
      "data-align",
      "block-end"
    );
    expect(screen.getByText("Markdown supported")).toBeInTheDocument();
  });
});
