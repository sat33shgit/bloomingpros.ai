import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("input-otp", async () => {
  const React = await import("react");

  const OTPInputContext = React.createContext<{
    slots: Array<{
      char?: string;
      hasFakeCaret?: boolean;
      isActive?: boolean;
    }>;
  } | null>(null);

  const OTPInput = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & {
      containerClassName?: string;
    }
  >(({ containerClassName, className, ...props }, ref) => (
    <div data-testid="otp-container" className={containerClassName}>
      <input ref={ref} className={className} {...props} />
    </div>
  ));

  return { OTPInput, OTPInputContext };
});

import { OTPInputContext } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./input-otp";

describe("Input OTP helpers", () => {
  it("renders the otp input, slots, separator, and caret state", () => {
    const { container } = render(
      <>
        <InputOTP
          maxLength={6}
          className="otp-input"
          containerClassName="otp-container"
        />
        <InputOTPGroup data-testid="otp-group" className="otp-group">
          <OTPInputContext.Provider
            value={{
              slots: [{ char: "7", hasFakeCaret: true, isActive: true }],
            }}
          >
            <InputOTPSlot index={0} />
            <InputOTPSlot index={3} data-testid="empty-slot" />
          </OTPInputContext.Provider>
          <InputOTPSeparator />
        </InputOTPGroup>
      </>
    );

    expect(container.querySelector("[data-slot='input-otp']")).toHaveAttribute(
      "maxLength",
      "6"
    );
    expect(container.querySelector("[data-slot='input-otp']")).toHaveClass(
      "disabled:cursor-not-allowed",
      "otp-input"
    );
    expect(screen.getByTestId("otp-container")).toHaveClass(
      "flex",
      "items-center",
      "gap-2",
      "otp-container"
    );
    expect(screen.getByTestId("otp-group")).toHaveAttribute(
      "data-slot",
      "input-otp-group"
    );
    expect(screen.getByText("7").closest("[data-slot='input-otp-slot']")).toHaveAttribute(
      "data-active",
      "true"
    );
    expect(
      screen
        .getByText("7")
        .closest("[data-slot='input-otp-slot']")
        ?.querySelector(".animate-caret-blink")
    ).toBeInTheDocument();
    expect(screen.getByTestId("empty-slot")).not.toHaveTextContent(/\S/);
    expect(screen.getByRole("separator")).toHaveAttribute(
      "data-slot",
      "input-otp-separator"
    );
  });
});
