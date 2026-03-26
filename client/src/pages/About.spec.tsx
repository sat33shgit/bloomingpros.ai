import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import About from "./About";

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

describe("About page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/about");
  });

  it("renders the page content and scrolls to top on mount", () => {
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });

    render(<About />);

    expect(screen.getByRole("heading", { name: "About BloomingPros.ai" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our Story" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Our Team" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Amit Ravankar" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Mugdha Gadre" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute("href", "/contact");
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  });

  it("falls back to the legacy scroll API when smooth scrolling throws", () => {
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn((value?: unknown) => {
        if (typeof value === "object") {
          throw new Error("unsupported");
        }
      }),
    });

    render(<About />);

    expect(window.scrollTo).toHaveBeenNthCalledWith(1, { top: 0, behavior: "smooth" });
    expect(window.scrollTo).toHaveBeenNthCalledWith(2, 0, 0);
  });
});
