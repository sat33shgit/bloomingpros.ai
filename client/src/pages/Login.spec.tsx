import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Login from "./Login";

const { toastError, toastInfo, toastSuccess } = vi.hoisted(() => ({
  toastError: vi.fn(),
  toastInfo: vi.fn(),
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
}));

vi.mock("sonner", () => ({
  toast: {
    error: toastError,
    info: toastInfo,
    success: toastSuccess,
  },
}));

describe("Login page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows validation errors for empty, invalid, and short-password submissions", () => {
    render(<Login />);
    const form = screen.getByRole("button", { name: /sign in/i }).closest("form");

    expect(form).not.toBeNull();

    fireEvent.submit(form!);
    expect(toastError).toHaveBeenCalledWith("Please fill in all fields");

    fireEvent.change(screen.getByLabelText("Email Address"), {
      target: { value: "invalid-email" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });
    fireEvent.submit(form!);
    expect(toastError).toHaveBeenCalledWith("Please enter a valid email address");

    fireEvent.change(screen.getByLabelText("Email Address"), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123" },
    });
    fireEvent.submit(form!);
    expect(toastError).toHaveBeenCalledWith("Password must be at least 6 characters");
  });

  it("toggles password visibility and completes the success flow", () => {
    vi.useFakeTimers();

    render(<Login />);

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(screen.getByRole("button", { name: "Toggle password visibility" }));
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.change(screen.getByLabelText("Email Address"), {
      target: { value: "user@example.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByText("Signing in...")).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(toastSuccess).toHaveBeenCalledWith("Login successful! Redirecting...");
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });

  it("shows the social login placeholders", () => {
    render(<Login />);

    fireEvent.click(screen.getByRole("button", { name: /google/i }));
    fireEvent.click(screen.getByRole("button", { name: /github/i }));
    fireEvent.click(screen.getByRole("button", { name: /linkedin/i }));

    expect(toastInfo).toHaveBeenCalledWith("Google login coming soon!");
    expect(toastInfo).toHaveBeenCalledWith("GitHub login coming soon!");
    expect(toastInfo).toHaveBeenCalledWith("LinkedIn login coming soon!");
  });
});
