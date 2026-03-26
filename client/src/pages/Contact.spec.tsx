import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Contact from "./Contact";

const { mockLocation, toastError, toastSuccess } = vi.hoisted(() => ({
  mockLocation: vi.fn(),
  toastError: vi.fn(),
  toastSuccess: vi.fn(),
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
    error: toastError,
    success: toastSuccess,
  },
}));

describe("Contact page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/contact");
    window.history.replaceState({}, "", "/contact?source=companies");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  it("hydrates the source from the URL and scrolls to the top", async () => {
    render(<Contact />);

    await waitFor(() => {
      expect(screen.getByLabelText("I am interested in *")).toHaveValue("companies");
    });

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
    expect(screen.getByRole("heading", { name: "Contact Us" })).toBeInTheDocument();
  });

  it("blocks submit without consent", () => {
    render(<Contact />);

    const form = screen.getByRole("button", { name: /send message/i }).closest("form");
    expect(form).not.toBeNull();

    fireEvent.submit(form!);

    expect(toastError).toHaveBeenCalledWith(
      "Please agree to the communication consent to continue."
    );
    expect(toastSuccess).not.toHaveBeenCalled();
  });

  it("submits the form successfully and resets the entered fields", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Full Name *"), {
      target: { value: "Jane Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email Address *"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone Number *"), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByLabelText("Message *"), {
      target: { value: "Interested in a pilot program." },
    });
    fireEvent.click(screen.getByRole("checkbox"));

    fireEvent.submit(screen.getByRole("button", { name: /send message/i }).closest("form")!);

    expect(toastSuccess).toHaveBeenCalledWith(
      expect.stringContaining("get back to you soon")
    );

    await waitFor(() => {
      expect(screen.getByLabelText("Full Name *")).toHaveValue("");
    });

    expect(screen.getByLabelText("Email Address *")).toHaveValue("");
    expect(screen.getByLabelText("Phone Number *")).toHaveValue("");
    expect(screen.getByLabelText("Message *")).toHaveValue("");
    expect(screen.getByLabelText("I am interested in *")).toHaveValue("companies");
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
});
