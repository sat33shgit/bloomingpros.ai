import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./form";

type TestValues = {
  email: string;
  nickname: string;
};

function FieldInspector() {
  const field = useFormField();

  return (
    <div
      data-testid={`meta-${field.name}`}
      data-id={field.id}
      data-item-id={field.formItemId}
      data-description-id={field.formDescriptionId}
      data-message-id={field.formMessageId}
      data-invalid={String(!!field.error)}
    />
  );
}

function FormHarness({
  onSubmit,
}: {
  onSubmit: (values: TestValues) => void;
}) {
  const form = useForm<TestValues>({
    defaultValues: {
      email: "",
      nickname: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FieldInspector />
              <FormControl>
                <input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>Use your work email</FormDescription>
              <FormMessage>Helper text</FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <input placeholder="Nickname" {...field} />
              </FormControl>
              <FormMessage data-testid="nickname-message" />
            </FormItem>
          )}
        />

        <button type="submit">Submit</button>
      </form>
    </Form>
  );
}

describe("Form helpers", () => {
  it("renders form metadata, helper messages, and submits valid values", async () => {
    const onSubmit = vi.fn();
    render(<FormHarness onSubmit={onSubmit} />);

    const emailInput = screen.getByPlaceholderText("Email");
    const nicknameInput = screen.getByPlaceholderText("Nickname");
    const emailMeta = screen.getByTestId("meta-email");
    const emailLabel = screen.getByText("Email");

    fireEvent.change(emailInput, {
      target: { value: "ada@bloomingpros.ai" },
    });
    fireEvent.change(nicknameInput, {
      target: { value: "Ada" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    expect(onSubmit.mock.calls[0]?.[0]).toEqual({
      email: "ada@bloomingpros.ai",
      nickname: "Ada",
    });
    expect(emailLabel).toHaveAttribute("data-slot", "form-label");
    expect(emailLabel).toHaveAttribute("data-error", "false");
    expect(emailLabel).toHaveAttribute(
      "for",
      emailMeta.getAttribute("data-item-id")
    );
    expect(emailInput).toHaveAttribute(
      "id",
      emailMeta.getAttribute("data-item-id")
    );
    expect(emailInput).toHaveAttribute(
      "aria-describedby",
      emailMeta.getAttribute("data-description-id")
    );
    expect(emailInput).toHaveAttribute("aria-invalid", "false");
    expect(screen.getByText("Use your work email")).toHaveAttribute(
      "id",
      emailMeta.getAttribute("data-description-id")
    );
    expect(screen.getByText("Helper text")).toHaveAttribute(
      "data-slot",
      "form-message"
    );
    expect(screen.queryByTestId("nickname-message")).not.toBeInTheDocument();
  });

  it("shows validation errors and updates accessibility metadata when invalid", async () => {
    const onSubmit = vi.fn();
    render(<FormHarness onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    const errorMessage = await screen.findByText("Email is required");
    const emailInput = screen.getByPlaceholderText("Email");
    const emailMeta = screen.getByTestId("meta-email");

    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByText("Email")).toHaveAttribute("data-error", "true");
    expect(emailMeta).toHaveAttribute("data-invalid", "true");
    expect(emailInput).toHaveAttribute("aria-invalid", "true");
    expect(emailInput).toHaveAttribute(
      "aria-describedby",
      `${emailMeta.getAttribute("data-description-id")} ${emailMeta.getAttribute(
        "data-message-id"
      )}`
    );
    expect(errorMessage).toHaveAttribute(
      "id",
      emailMeta.getAttribute("data-message-id")
    );
  });
});
