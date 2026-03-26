import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Privacy from "./Privacy";

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

describe("Privacy page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the privacy policy content and scrolls to the top on mount", () => {
    mockLocation.mockReturnValue("/privacy");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });

    render(<Privacy />);

    expect(screen.getByRole("heading", { name: "Privacy Policy" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Summary of Key Commitments" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "1. Legal Basis for Processing Data" })
    ).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "7. Modifications to This Privacy Policy" })).toBeInTheDocument();
    expect(screen.getByText("Last updated: January 2026")).toBeInTheDocument();
    expect(screen.getByText("dpo@bloomingpros.ai")).toBeInTheDocument();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("falls back to the legacy scroll signature when smooth scrolling is unavailable", () => {
    mockLocation.mockReturnValue("/privacy");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn((value?: unknown) => {
        if (typeof value === "object") {
          throw new Error("unsupported");
        }
      }),
    });

    render(<Privacy />);

    expect(window.scrollTo).toHaveBeenNthCalledWith(1, { top: 0, behavior: "smooth" });
    expect(window.scrollTo).toHaveBeenNthCalledWith(2, 0, 0);
  });

  it("does not scroll when the current route is not the privacy page", () => {
    mockLocation.mockReturnValue("/contact");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });

    render(<Privacy />);

    expect(window.scrollTo).not.toHaveBeenCalled();
  });
});
