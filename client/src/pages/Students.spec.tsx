import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import Students from "./Students";

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

describe("Students page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/students");
  });

  it("renders the student journey, differentiators, and access CTAs", () => {
    render(<Students />);

    expect(
      screen.getByRole("heading", {
        name: "AI-Powered Employability for Students",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "How It Works" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Why BloomingPros.ai is Different",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Who is this for?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Ready to Build Your Portfolio?",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Your college gets you in")).toBeInTheDocument();
    expect(screen.getByText("Build your portfolio")).toBeInTheDocument();
    expect(screen.getByText("Get discovered on merit")).toBeInTheDocument();

    expect(screen.getByText("Skill-first, not resume-first")).toBeInTheDocument();
    expect(
      screen.getByText("Start in earlier Year, not just final year")
    ).toBeInTheDocument();
    expect(screen.getByText("Not just Tier-1 colleges")).toBeInTheDocument();
    expect(screen.getByText("Verified by your institution")).toBeInTheDocument();

    expect(screen.getByText("What you need to get started:")).toBeInTheDocument();
    expect(screen.getByText("Enrollment at a partner college")).toBeInTheDocument();
    expect(
      screen.getByText("Engineering or technology background (for PoC)")
    ).toBeInTheDocument();

    const accessLinks = screen.getAllByRole("link").filter(link =>
      link.getAttribute("href") === "/contact?source=students"
    );
    expect(accessLinks).toHaveLength(3);
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
