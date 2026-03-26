import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Home from "./Home";

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

describe("Home page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/");
  });

  it("renders the ecosystem overview, stakeholder pathways, and CTAs", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: "A Unified Employability Ecosystem",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Why BloomingPros.ai is Different",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Designed for Everyone" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Ready to Reimagine Employability?",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Skill-First Approach")).toBeInTheDocument();
    expect(screen.getByText("Start Early, Build Strong")).toBeInTheDocument();
    expect(screen.getByText("Talent Everywhere")).toBeInTheDocument();
    expect(screen.getByText("Verified Credentials")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "For Students" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "For Colleges" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "For Companies" })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /^Get Started$/ })).toHaveAttribute(
      "href",
      "/contact"
    );
    expect(
      screen.getByRole("link", { name: /Get Started Today/i })
    ).toHaveAttribute("href", "/contact");

    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "/about"
    );
    const allLinks = screen.getAllByRole("link");
    expect(allLinks.some(link => link.getAttribute("href") === "/students")).toBe(
      true
    );
    expect(allLinks.some(link => link.getAttribute("href") === "/colleges")).toBe(
      true
    );
    expect(
      allLinks.some(link => link.getAttribute("href") === "/companies")
    ).toBe(true);
  });
});
