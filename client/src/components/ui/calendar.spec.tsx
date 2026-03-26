import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Calendar, CalendarDayButton } from "./calendar";

const { dayPickerSpy } = vi.hoisted(() => ({
  dayPickerSpy: vi.fn(),
}));

vi.mock("react-day-picker", async () => {
  const React = await import("react");

  const defaultClassNames = {
    root: "rdp-root",
    months: "rdp-months",
    month: "rdp-month",
    nav: "rdp-nav",
    button_previous: "rdp-button-previous",
    button_next: "rdp-button-next",
    month_caption: "rdp-month-caption",
    dropdowns: "rdp-dropdowns",
    dropdown_root: "rdp-dropdown-root",
    dropdown: "rdp-dropdown",
    caption_label: "rdp-caption-label",
    weekdays: "rdp-weekdays",
    weekday: "rdp-weekday",
    week: "rdp-week",
    week_number_header: "rdp-week-number-header",
    week_number: "rdp-week-number",
    day: "rdp-day",
    range_start: "rdp-range-start",
    range_middle: "rdp-range-middle",
    range_end: "rdp-range-end",
    today: "rdp-today",
    outside: "rdp-outside",
    disabled: "rdp-disabled",
    hidden: "rdp-hidden",
  };

  return {
    getDefaultClassNames: () => defaultClassNames,
    DayPicker: (props: Record<string, any>) => {
      dayPickerSpy(props);

      const Root = props.components?.Root ?? ((rootProps: React.ComponentProps<"div">) => <div {...rootProps} />);
      const Chevron = props.components?.Chevron;
      const WeekNumber = props.components?.WeekNumber;

      return (
        <Root
          data-testid="mock-day-picker"
          className={props.className}
          rootRef={undefined}
        >
          <div data-testid="caption-label-class">{props.classNames.caption_label}</div>
          <div data-testid="nav-class">{props.classNames.nav}</div>
          <div data-testid="previous-button-class">{props.classNames.button_previous}</div>
          <div data-testid="formatter-result">
            {props.formatters.formatMonthDropdown(new Date("2026-03-26T00:00:00Z"))}
          </div>
          {Chevron ? (
            <>
              <Chevron orientation="left" data-testid="chevron-left" />
              <Chevron orientation="right" data-testid="chevron-right" />
              <Chevron orientation="down" data-testid="chevron-down" />
            </>
          ) : null}
          {WeekNumber ? (
            <table>
              <tbody>
                <tr>
                  <WeekNumber data-testid="week-number">12</WeekNumber>
                </tr>
              </tbody>
            </table>
          ) : null}
        </Root>
      );
    },
    DayButton: React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
      ({ children, ...props }, ref) => (
        <button ref={ref} {...props}>
          {children}
        </button>
      )
    ),
  };
});

describe("Calendar helpers", () => {
  it("renders the day picker with default formatting, classes, and custom slots", () => {
    render(<Calendar />);

    expect(screen.getByTestId("mock-day-picker")).toHaveAttribute(
      "data-slot",
      "calendar"
    );
    expect(screen.getByTestId("mock-day-picker")).toHaveClass("bg-background");
    expect(screen.getByTestId("formatter-result")).toHaveTextContent("Mar");
    expect(screen.getByTestId("caption-label-class")).toHaveTextContent("text-sm");
    expect(screen.getByTestId("previous-button-class")).toHaveTextContent(
      "hover:bg-accent"
    );
    expect(screen.getByTestId("week-number")).toHaveTextContent("12");
    expect(screen.getByTestId("chevron-left")).toBeInTheDocument();
    expect(screen.getByTestId("chevron-right")).toBeInTheDocument();
    expect(screen.getByTestId("chevron-down")).toBeInTheDocument();
    expect(dayPickerSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        captionLayout: "label",
        showOutsideDays: true,
      })
    );
  });

  it("supports dropdown captions, custom formatters, and alternate button variants", () => {
    render(
      <Calendar
        showOutsideDays={false}
        captionLayout="dropdown"
        buttonVariant="outline"
        classNames={{ nav: "custom-nav" }}
        formatters={{ formatMonthDropdown: () => "Custom month" }}
      />
    );

    expect(screen.getByTestId("formatter-result")).toHaveTextContent("Custom month");
    expect(screen.getByTestId("caption-label-class")).toHaveTextContent(
      "flex items-center"
    );
    expect(screen.getByTestId("nav-class")).toHaveTextContent("custom-nav");
    expect(screen.getByTestId("previous-button-class")).toHaveTextContent("border");
    expect(dayPickerSpy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        captionLayout: "dropdown",
        showOutsideDays: false,
      })
    );
  });

  it("focuses the active day button and marks single-day selection state", () => {
    render(
      <CalendarDayButton
        day={{ date: new Date("2026-03-26T00:00:00Z") }}
        modifiers={{
          focused: true,
          selected: true,
          range_start: false,
          range_end: false,
          range_middle: false,
        }}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveFocus();
    expect(button).toHaveAttribute(
      "data-day",
      new Date("2026-03-26T00:00:00Z").toLocaleDateString()
    );
    expect(button).toHaveAttribute("data-selected-single", "true");
  });

  it("marks range boundaries on range selections", () => {
    render(
      <CalendarDayButton
        day={{ date: new Date("2026-03-27T00:00:00Z") }}
        modifiers={{
          focused: false,
          selected: true,
          range_start: true,
          range_end: false,
          range_middle: false,
        }}
      />
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-selected-single", "false");
    expect(button).toHaveAttribute("data-range-start", "true");
    expect(button).toHaveAttribute("data-range-end", "false");
    expect(button).toHaveAttribute("data-range-middle", "false");
  });
});
