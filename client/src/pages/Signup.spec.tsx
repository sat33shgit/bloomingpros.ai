import { fireEvent, render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Signup from "./Signup";

const { mockLocation, mockToastSuccess } = vi.hoisted(() => ({
  mockLocation: vi.fn(),
  mockToastSuccess: vi.fn(),
}));

vi.mock("wouter", () => ({
  Link: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  } & React.ComponentProps<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  useLocation: () => [mockLocation(), vi.fn()],
}));

vi.mock("sonner", () => ({
  toast: {
    success: mockToastSuccess,
  },
}));

describe("Signup page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/app/signup");
  });

  it("renders the signup benefits, updates the form, and submits the PoC request", () => {
    render(<Signup />);

    expect(
      screen.getByRole("heading", {
        name: "Join Our Free 6-Month PoC Program",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Completely free until June 2026")
    ).toBeInTheDocument();
    expect(screen.getByText("No credit card required")).toBeInTheDocument();
    expect(
      screen.getByText("Shape the product with your feedback")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Lifetime benefits as a founding user")
    ).toBeInTheDocument();

    const formContainer = screen
      .getByRole("heading", { name: "Sign Up" })
      .parentElement as HTMLDivElement;
    const form = formContainer.querySelector("form") as HTMLFormElement;
    const formScope = within(form);

    fireEvent.change(formScope.getByRole("combobox"), {
      target: { value: "student" },
    });
    fireEvent.change(formScope.getByPlaceholderText("First name *"), {
      target: { value: "Ada" },
    });
    fireEvent.change(formScope.getByPlaceholderText("Last name *"), {
      target: { value: "Lovelace" },
    });
    fireEvent.change(formScope.getByPlaceholderText("Official Email Id *"), {
      target: { value: "ada@bloomingpros.ai" },
    });
    fireEvent.change(formScope.getByPlaceholderText("Contact Number *"), {
      target: { value: "5551234567" },
    });

    expect(formScope.getByRole("combobox")).toHaveValue("student");
    expect(formScope.getByPlaceholderText("First name *")).toHaveValue("Ada");
    expect(formScope.getByPlaceholderText("Last name *")).toHaveValue("Lovelace");
    expect(formScope.getByPlaceholderText("Official Email Id *")).toHaveValue(
      "ada@bloomingpros.ai"
    );
    expect(formScope.getByPlaceholderText("Contact Number *")).toHaveValue(
      "5551234567"
    );

    fireEvent.submit(form);

    expect(mockToastSuccess).toHaveBeenCalledWith(
      "Thanks - we'll reach out about the PoC."
    );
    expect(formScope.getByRole("link", { name: "Login" })).toHaveAttribute(
      "href",
      "/login"
    );
    expect(formScope.getByRole("link", { name: "Login" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(formScope.getByRole("link", { name: "Terms and Conditions" })).toHaveAttribute(
      "href",
      "/terms"
    );
    expect(formScope.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute(
      "href",
      "/privacy"
    );
  });
});
