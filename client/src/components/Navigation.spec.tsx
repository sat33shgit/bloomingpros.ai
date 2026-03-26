import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Footer, Navigation } from "./Navigation";

const { mockLocation } = vi.hoisted(() => ({
  mockLocation: vi.fn(),
}));

vi.mock("wouter", () => ({
  Link: ({
    children,
    href,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  } & React.ComponentProps<"a">) => (
    <a
      href={href}
      onClick={(event) => {
        onClick?.(event);
        event.preventDefault();
      }}
      {...props}
    >
      {children}
    </a>
  ),
  useLocation: () => [mockLocation(), vi.fn()],
}));

describe("Navigation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/about");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("scrolls immediately when the active route is clicked again", () => {
    mockLocation.mockReturnValue("/faq");

    render(<Navigation />);

    fireEvent.click(screen.getAllByRole("link", { name: "FAQ" })[0]);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });

  it("opens the mobile menu and closes it after a mobile navigation click", () => {
    render(<Navigation />);

    expect(screen.getAllByText("For Students")).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Toggle menu" }));

    expect(screen.getAllByText("For Students")).toHaveLength(2);

    fireEvent.click(screen.getAllByRole("link", { name: "For Students" })[1]);

    expect(screen.getAllByText("For Students")).toHaveLength(1);
  });

  it("schedules a scroll-to-top after navigating to a different top-level route", () => {
    mockLocation.mockReturnValue("/about");

    render(<Navigation />);

    fireEvent.click(screen.getAllByRole("link", { name: "FAQ" })[0]);

    expect(window.scrollTo).not.toHaveBeenCalled();

    vi.runAllTimers();

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  });
});

describe("Footer", () => {
  it("renders the current year and primary footer sections", () => {
    render(<Footer />);

    expect(screen.getByText(`Copyright ${new Date().getFullYear()} BloomingPros.ai. All rights reserved.`)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Product" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Company" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Legal" })).toBeInTheDocument();
  });
});
