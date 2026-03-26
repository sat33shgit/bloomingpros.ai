import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("./components/ErrorBoundary", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-slot="error-boundary">{children}</div>
  ),
}));

vi.mock("./contexts/ThemeContext", () => ({
  ThemeProvider: ({
    children,
    defaultTheme,
  }: {
    children: React.ReactNode;
    defaultTheme: string;
  }) => (
    <div data-slot="theme-provider" data-default-theme={defaultTheme}>
      {children}
    </div>
  ),
}));

vi.mock("./components/ui/tooltip", () => ({
  TooltipProvider: ({ children }: { children: React.ReactNode }) => (
    <div data-slot="tooltip-provider">{children}</div>
  ),
}));

vi.mock("./components/ui/sonner", () => ({
  Toaster: () => <div data-slot="toaster">Toaster</div>,
}));

vi.mock("./pages/Home", () => ({ default: () => <div>Home page</div> }));
vi.mock("./pages/Students", () => ({ default: () => <div>Students page</div> }));
vi.mock("./pages/Colleges", () => ({ default: () => <div>Colleges page</div> }));
vi.mock("./pages/Companies", () => ({
  default: () => <div>Companies page</div>,
}));
vi.mock("./pages/About", () => ({ default: () => <div>About page</div> }));
vi.mock("./pages/Contact", () => ({ default: () => <div>Contact page</div> }));
vi.mock("./pages/Privacy", () => ({ default: () => <div>Privacy page</div> }));
vi.mock("./pages/Terms", () => ({ default: () => <div>Terms page</div> }));
vi.mock("./pages/Login", () => ({ default: () => <div>Login page</div> }));
vi.mock("./pages/Blog", () => ({ default: () => <div>Blog page</div> }));
vi.mock("./pages/Signup", () => ({ default: () => <div>Signup page</div> }));
vi.mock("./pages/FAQ", () => ({ default: () => <div>FAQ page</div> }));
vi.mock("./pages/TestCoverageReport", () => ({
  default: () => <div>Coverage page</div>,
}));
vi.mock("./pages/NotFound", () => ({
  default: () => <div>Not found page</div>,
}));

import App from "./App";

describe("App routing shell", () => {
  beforeEach(() => {
    window.history.replaceState({}, "", "/");
  });

  it("renders the routed page inside the app providers", () => {
    window.history.replaceState({}, "", "/test-coverage");

    const { container } = render(<App />);

    expect(screen.getByText("Coverage page")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='error-boundary']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='theme-provider']")).toHaveAttribute(
      "data-default-theme",
      "light"
    );
    expect(container.querySelector("[data-slot='tooltip-provider']")).toBeInTheDocument();
    expect(screen.getByText("Toaster")).toBeInTheDocument();
  });

  it("falls back to the not found page for unknown routes", () => {
    window.history.replaceState({}, "", "/missing");

    render(<App />);

    expect(screen.getByText("Not found page")).toBeInTheDocument();
  });
});
