import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Colleges from "./Colleges";

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

describe("Colleges page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/colleges");
  });

  it("renders the college partnership benefits, platform features, and CTAs", () => {
    render(<Colleges />);

    expect(
      screen.getByRole("heading", { name: "Elevate Your Institution" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Why Partner With Us" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Platform Features" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Ready to Transform Your Institution?",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Improve Student Outcomes")).toBeInTheDocument();
    expect(
      screen.getByText("Strengthen Industry Partnerships")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Enhance Institutional Credibility")
    ).toBeInTheDocument();
    expect(screen.getByText("Track & Measure Impact")).toBeInTheDocument();

    expect(screen.getByText("For Your Institution")).toBeInTheDocument();
    expect(screen.getByText("For Your Students")).toBeInTheDocument();
    expect(
      screen.getByText("Centralized student portfolio management")
    ).toBeInTheDocument();
    expect(screen.getByText("Direct visibility to companies")).toBeInTheDocument();

    const demoLinks = screen
      .getAllByRole("link")
      .filter(link => link.getAttribute("href") === "/contact?source=colleges");
    expect(demoLinks).toHaveLength(2);
  });
});
