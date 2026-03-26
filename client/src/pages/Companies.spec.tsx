import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Companies from "./Companies";

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

describe("Companies page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/companies");
  });

  it("renders the companies value proposition and recruitment flow", () => {
    render(<Companies />);

    expect(screen.getByRole("heading", { name: "Hire Confident Talent" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Why Partner With BloomingPros.ai" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How It Works" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Platform Features" })).toBeInTheDocument();

    expect(screen.getByText("Hire with Confidence")).toBeInTheDocument();
    expect(screen.getByText("Diverse Talent Pool")).toBeInTheDocument();
    expect(screen.getByText("Faster Hiring Process")).toBeInTheDocument();
    expect(screen.getByText("Build Long-term Partnerships")).toBeInTheDocument();

    expect(screen.getByText("Define Your Talent Needs")).toBeInTheDocument();
    expect(screen.getByText("Access Verified Talent")).toBeInTheDocument();
    expect(screen.getByText("Connect & Hire")).toBeInTheDocument();
    expect(screen.getByText("Build Partnerships")).toBeInTheDocument();

    const ctaLinks = screen.getAllByRole("link", { name: /get started/i });
    expect(ctaLinks).toHaveLength(2);
    for (const link of ctaLinks) {
      expect(link).toHaveAttribute("href", "/contact?source=companies");
    }
  });
});
