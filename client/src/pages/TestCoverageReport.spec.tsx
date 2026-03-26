import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { testCoverageReport } from "@/generated/testCoverageReport";
import TestCoverageReport from "./TestCoverageReport";

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

describe("TestCoverageReport page", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLocation.mockReturnValue("/test-coverage");
    Object.defineProperty(window, "scrollTo", {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  it("renders the synced coverage summary and metadata", () => {
    render(<TestCoverageReport />);

    expect(screen.getByRole("heading", { name: "Test Coverage Report" })).toBeInTheDocument();
    expect(screen.getByText(testCoverageReport.artifactPath)).toBeInTheDocument();
    expect(screen.getByText(testCoverageReport.refreshCommand)).toBeInTheDocument();
    expect(
      screen.getByText(`${testCoverageReport.totals.testedFileCount}`)
    ).toBeInTheDocument();
    expect(screen.getAllByText(testCoverageReport.files[0].path).length).toBeGreaterThan(0);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
