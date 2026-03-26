import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  ChartContainer,
  ChartLegendContent,
  ChartStyle,
  ChartTooltipContent,
} from "./chart";

vi.mock("recharts", async () => {
  const React = await import("react");

  return {
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="responsive-container">{children}</div>
    ),
    Tooltip: ({ children }: { children?: React.ReactNode }) => (
      <div data-testid="chart-tooltip">{children}</div>
    ),
    Legend: ({ children }: { children?: React.ReactNode }) => (
      <div data-testid="chart-legend">{children}</div>
    ),
  };
});

function MetricIcon() {
  return <svg aria-label="metric icon" />;
}

const chartConfig = {
  sales: {
    label: "Sales",
    color: "#22c55e",
    icon: MetricIcon,
  },
  visitors: {
    label: "Visitors",
    theme: {
      light: "#1f2937",
      dark: "#14b8a6",
    },
  },
} as const;

describe("Chart helpers", () => {
  it("renders a chart container with generated theme variables", () => {
    const { container } = render(
      <ChartContainer id="overview" config={chartConfig}>
        <div>Chart body</div>
      </ChartContainer>
    );

    expect(container.querySelector("[data-slot='chart']")).toHaveAttribute(
      "data-chart",
      "chart-overview"
    );
    expect(screen.getByTestId("responsive-container")).toHaveTextContent("Chart body");

    const style = container.querySelector("style");
    expect(style?.innerHTML).toContain("[data-chart=chart-overview]");
    expect(style?.innerHTML).toContain("--color-sales: #22c55e;");
    expect(style?.innerHTML).toContain("--color-visitors: #1f2937;");
    expect(style?.innerHTML).toContain("--color-visitors: #14b8a6;");
  });

  it("returns no style block when the config has no color or theme entries", () => {
    const { container } = render(
      <ChartStyle
        id="empty"
        config={{
          empty: {
            label: "Empty",
          },
        }}
      />
    );

    expect(container).toBeEmptyDOMElement();
  });

  it("renders tooltip content with config labels and values", () => {
    render(
      <ChartContainer config={chartConfig}>
        <ChartTooltipContent
          active
          indicator="line"
          label="sales"
          payload={[
            {
              name: "sales",
              dataKey: "sales",
              value: 1200,
              color: "#22c55e",
              payload: { fill: "#22c55e" },
            },
          ]}
        />
      </ChartContainer>
    );

    expect(screen.getAllByText("Sales")).toHaveLength(2);
    expect(screen.getByText("1,200")).toBeInTheDocument();
  });

  it("renders legend content with configured icons and labels", () => {
    render(
      <ChartContainer config={chartConfig}>
        <ChartLegendContent
          payload={[
            {
              dataKey: "sales",
              color: "#22c55e",
              value: "sales",
            },
            {
              dataKey: "visitors",
              color: "#14b8a6",
              value: "visitors",
            },
          ]}
        />
      </ChartContainer>
    );

    expect(screen.getByText("Sales")).toBeInTheDocument();
    expect(screen.getByText("Visitors")).toBeInTheDocument();
    expect(screen.getByLabelText("metric icon")).toBeInTheDocument();
  });

  it("throws when tooltip content is rendered outside the chart context", () => {
    expect(() =>
      render(
        <ChartTooltipContent
          active
          payload={[
            {
              name: "sales",
              dataKey: "sales",
              value: 10,
              payload: { fill: "#22c55e" },
            },
          ]}
        />
      )
    ).toThrow("useChart must be used within a <ChartContainer />");
  });
});
