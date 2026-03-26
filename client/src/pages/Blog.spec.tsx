import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Blog from "./Blog";

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

describe("Blog page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/blog");
  });

  it("renders the blog index and filters to a single article by search", () => {
    render(<Blog />);

    expect(screen.getByRole("heading", { name: "Blog & Insights" })).toBeInTheDocument();
    expect(screen.getByText("Showing 6 articles")).toBeInTheDocument();
    expect(
      screen.getByText("How AI Can Revolutionize Campus Placements and Internships")
    ).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Search articles..."), {
      target: { value: "authentic portfolios" },
    });

    expect(screen.getByText("Showing 1 article")).toBeInTheDocument();
    expect(
      screen.getByText("Building Authentic Portfolios: Beyond CGPA and Credentials")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("How AI Can Revolutionize Campus Placements and Internships")
    ).not.toBeInTheDocument();
  });

  it("filters by category, shows the empty state, and clears filters", () => {
    render(<Blog />);

    fireEvent.click(screen.getByRole("button", { name: "Industry Insights" }));

    expect(screen.getByText("Showing 2 articles")).toBeInTheDocument();
    expect(
      screen.getByText("How College-Company Collaboration Shapes the Future")
    ).toBeInTheDocument();
    expect(screen.getByText("Bridging the Skills Gap: A Practical Approach")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText("Search articles..."), {
      target: { value: "no-match" },
    });

    expect(screen.getByText("No articles found matching your search.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Clear Filters" }));

    expect(screen.getByText("Showing 6 articles")).toBeInTheDocument();
    expect(screen.queryByText("No articles found matching your search.")).not.toBeInTheDocument();
  });
});
