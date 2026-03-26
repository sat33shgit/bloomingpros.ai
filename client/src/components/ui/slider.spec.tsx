import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Slider } from "./slider";

vi.mock("@radix-ui/react-slider", async () => {
  const React = await import("react");

  const Root = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
      orientation?: string;
    }
  >(({ children, orientation, ...props }, ref) => (
    <div ref={ref} data-orientation={orientation} {...props}>
      {children}
    </div>
  ));

  const Track = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, ...props }, ref) => (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  );

  const Range = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => <div ref={ref} {...props} />
  );

  const Thumb = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    (props, ref) => <div ref={ref} {...props} />
  );

  return { Root, Track, Range, Thumb };
});

describe("Slider wrapper", () => {
  it("renders thumbs from controlled, default, and fallback value sources", () => {
    render(
      <>
        <Slider
          data-testid="controlled-slider"
          value={[25]}
          min={0}
          max={50}
          className="custom-slider"
        />
        <Slider data-testid="default-slider" defaultValue={[10, 40]} />
        <Slider data-testid="fallback-slider" min={10} max={90} orientation="vertical" />
      </>
    );

    expect(screen.getByTestId("controlled-slider")).toHaveAttribute(
      "data-slot",
      "slider"
    );
    expect(screen.getByTestId("controlled-slider")).toHaveClass("custom-slider");
    expect(
      screen
        .getByTestId("controlled-slider")
        .querySelectorAll("[data-slot='slider-thumb']")
    ).toHaveLength(1);
    expect(
      screen
        .getByTestId("controlled-slider")
        .querySelector("[data-slot='slider-track']")
    ).toBeInTheDocument();
    expect(
      screen
        .getByTestId("controlled-slider")
        .querySelector("[data-slot='slider-range']")
    ).toBeInTheDocument();
    expect(
      screen
        .getByTestId("default-slider")
        .querySelectorAll("[data-slot='slider-thumb']")
    ).toHaveLength(2);
    expect(
      screen
        .getByTestId("fallback-slider")
        .querySelectorAll("[data-slot='slider-thumb']")
    ).toHaveLength(2);
    expect(screen.getByTestId("fallback-slider")).toHaveAttribute(
      "data-orientation",
      "vertical"
    );
  });
});
