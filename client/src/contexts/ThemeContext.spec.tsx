import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

function ThemeReader() {
  const { theme, toggleTheme, switchable } = useTheme();

  return (
    <div>
      <span>{theme}</span>
      <span>{switchable ? "switchable" : "fixed"}</span>
      <button onClick={() => toggleTheme?.()} type="button">
        Toggle theme
      </button>
    </div>
  );
}

describe("ThemeProvider", () => {
  it("applies the default theme without persisting when switching is disabled", () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeReader />
      </ThemeProvider>
    );

    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(screen.getByText("fixed")).toBeInTheDocument();
    expect(document.documentElement).toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBeNull();
  });

  it("hydrates from storage and persists theme changes when switching is enabled", () => {
    localStorage.setItem("theme", "dark");

    render(
      <ThemeProvider defaultTheme="light" switchable>
        <ThemeReader />
      </ThemeProvider>
    );

    expect(screen.getByText("dark")).toBeInTheDocument();
    expect(screen.getByText("switchable")).toBeInTheDocument();
    expect(document.documentElement).toHaveClass("dark");

    fireEvent.click(screen.getByRole("button", { name: "Toggle theme" }));

    expect(screen.getByText("light")).toBeInTheDocument();
    expect(document.documentElement).not.toHaveClass("dark");
    expect(localStorage.getItem("theme")).toBe("light");
  });
});
