import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Terms from "./Terms";

const { mockLocation } = vi.hoisted(() => ({
  mockLocation: vi.fn(),
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

describe("Terms page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/terms");
  });

  it("renders the terms sections and scrolls to the top on mount", () => {
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });

    render(<Terms />);

    expect(screen.getByRole("heading", { name: "Terms of Service" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "1. Eligibility & Account Responsibilities" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "11. Contact Us" })).toBeInTheDocument();
    expect(screen.getByText("Last updated: January 2026")).toBeInTheDocument();
    expect(screen.getByText("dpo@bloomingpros.ai")).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("falls back to the legacy scroll signature when smooth scrolling is unavailable", () => {
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn((value?: unknown) => {
        if (typeof value === "object") {
          throw new Error("unsupported");
        }
      }),
    });

    render(<Terms />);

    expect(window.scrollTo).toHaveBeenNthCalledWith(1, { top: 0, behavior: "smooth" });
    expect(window.scrollTo).toHaveBeenNthCalledWith(2, 0, 0);
  });
});
