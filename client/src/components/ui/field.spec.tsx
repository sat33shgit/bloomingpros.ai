import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "./field";

describe("Field helpers", () => {
  it("renders field structure helpers and orientation variants", () => {
    const { container } = render(
      <>
        <FieldSet data-testid="field-set">
          <FieldLegend variant="label">Profile details</FieldLegend>
          <FieldGroup data-testid="field-group" data-variant="outline">
            <Field data-testid="field-default">
              <FieldLabel htmlFor="name">Name</FieldLabel>
              <FieldContent>
                <input id="name" />
                <FieldDescription>Add the full legal name.</FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal" data-testid="field-horizontal">
              <FieldTitle>Role</FieldTitle>
            </Field>
            <Field orientation="responsive" data-testid="field-responsive">
              <FieldTitle>Department</FieldTitle>
            </Field>
            <FieldSeparator>Or continue with email</FieldSeparator>
          </FieldGroup>
        </FieldSet>
      </>
    );

    expect(screen.getByTestId("field-set")).toHaveAttribute("data-slot", "field-set");
    expect(screen.getByText("Profile details")).toHaveAttribute(
      "data-variant",
      "label"
    );
    expect(screen.getByTestId("field-group")).toHaveAttribute(
      "data-slot",
      "field-group"
    );
    expect(screen.getByTestId("field-default")).toHaveAttribute(
      "data-orientation",
      "vertical"
    );
    expect(screen.getByTestId("field-horizontal")).toHaveAttribute(
      "data-orientation",
      "horizontal"
    );
    expect(screen.getByTestId("field-responsive")).toHaveAttribute(
      "data-orientation",
      "responsive"
    );
    expect(screen.getByText("Add the full legal name.")).toHaveAttribute(
      "data-slot",
      "field-description"
    );
    expect(screen.getByText("Or continue with email")).toHaveAttribute(
      "data-slot",
      "field-separator-content"
    );
    expect(
      container.querySelector("[data-slot='separator']")
    ).toBeInTheDocument();
  });

  it("prefers explicit children when rendering field errors", () => {
    render(
      <FieldError errors={[{ message: "Email is required" }]}>
        Custom error content
      </FieldError>
    );

    expect(screen.getByRole("alert")).toHaveTextContent("Custom error content");
    expect(screen.queryByText("Email is required")).not.toBeInTheDocument();
  });

  it("renders a single validation error message directly", () => {
    render(<FieldError errors={[{ message: "Email is required" }]} />);

    expect(screen.getByRole("alert")).toHaveTextContent("Email is required");
  });

  it("renders multiple validation errors as a list and skips empty entries", () => {
    render(
      <FieldError
        errors={[
          { message: "Email is required" },
          undefined,
          { message: "Password must be at least 8 characters" },
        ]}
      />
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(
      screen.getByText("Password must be at least 8 characters")
    ).toBeInTheDocument();
  });

  it("renders nothing when there are no errors or custom children", () => {
    const { container } = render(<FieldError />);

    expect(container).toBeEmptyDOMElement();
  });
});
