import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useIsMobile } from "./useMobile";

describe("useIsMobile", () => {
  const originalInnerWidth = window.innerWidth;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    let changeListener: ((event: MediaQueryListEvent) => void) | undefined;

    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn((event: string, listener: (event: MediaQueryListEvent) => void) => {
          if (event === "change") {
            changeListener = listener;
          }
        }),
        removeEventListener: vi.fn(),
        dispatchChange() {
          changeListener?.({ matches: window.innerWidth < 768 } as MediaQueryListEvent);
        },
      })),
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: originalInnerWidth,
    });

    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      writable: true,
      value: originalMatchMedia,
    });
  });

  it("returns the current mobile state and updates when the media query changes", () => {
    Object.defineProperty(window, "innerWidth", {
      configurable: true,
      writable: true,
      value: 1024,
    });

    const { result } = renderHook(() => useIsMobile());
    const mediaQuery = window.matchMedia("(max-width: 767px)") as MediaQueryList & {
      dispatchChange: () => void;
    };

    expect(result.current).toBe(false);

    act(() => {
      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        writable: true,
        value: 640,
      });
      mediaQuery.dispatchChange();
    });

    expect(result.current).toBe(true);
  });
});
