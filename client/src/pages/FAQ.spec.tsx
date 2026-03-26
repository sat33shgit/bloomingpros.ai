import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import FAQ from "./FAQ";

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

describe("FAQ page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/faq");
  });

  it("renders the FAQ sections, toggles answers, and exposes support links", () => {
    render(<FAQ />);

    expect(
      screen.getByRole("heading", { name: "Frequently Asked Questions" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Getting Started" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "About the PoC Program" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Support & Contact" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Still Have Questions?" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Ready to Get Started?" })
    ).toBeInTheDocument();

    const firstQuestion = screen.getByRole("button", {
      name: "What is BloomingPros.ai",
    });

    fireEvent.click(firstQuestion);
    expect(
      screen.getByRole("link", { name: "content.bloomingpros.ai/faq" })
    ).toHaveAttribute("href", "https://content.bloomingpros.ai/faq");

    fireEvent.click(firstQuestion);
    expect(
      screen.queryByRole("link", { name: "content.bloomingpros.ai/faq" })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "contact@bloomingpros.ai" })
    ).toHaveAttribute("href", "mailto:contact@bloomingpros.ai");
    expect(
      screen.getByRole("link", { name: "partnerships@bloomingpros.ai" })
    ).toHaveAttribute("href", "mailto:partnerships@bloomingpros.ai");
    expect(
      screen.getByRole("link", { name: "content.bloomingpros.ai/contact" })
    ).toHaveAttribute("href", "https://content.bloomingpros.ai/contact");
    expect(
      screen.getByRole("link", { name: "linkedin.com/company/bloomingpros-ai" })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/company/bloomingpros-ai"
    );
    expect(
      screen.getByRole("link", { name: /Sign Up Now/i })
    ).toHaveAttribute("href", "/app/signup");
    expect(
      screen.getByRole("link", { name: /Contact Us/i })
    ).toHaveAttribute("href", "/contact");
  });
});
