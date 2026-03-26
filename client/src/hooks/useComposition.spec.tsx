import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useComposition } from "./useComposition";

describe("useComposition", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("tracks composition state and blocks enter while composing", () => {
    const onCompositionStart = vi.fn();
    const onCompositionEnd = vi.fn();
    const onKeyDown = vi.fn();

    const { result } = renderHook(() =>
      useComposition<HTMLInputElement>({
        onCompositionStart,
        onCompositionEnd,
        onKeyDown,
      })
    );

    const startEvent = { data: "a" } as React.CompositionEvent<HTMLInputElement>;
    const endEvent = { data: "a" } as React.CompositionEvent<HTMLInputElement>;
    const blockedKeyEvent = {
      key: "Enter",
      shiftKey: false,
      stopPropagation: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLInputElement>;
    const allowedKeyEvent = {
      key: "a",
      shiftKey: false,
      stopPropagation: vi.fn(),
    } as unknown as React.KeyboardEvent<HTMLInputElement>;

    act(() => {
      result.current.onCompositionStart(startEvent);
    });

    expect(onCompositionStart).toHaveBeenCalledWith(startEvent);
    expect(result.current.isComposing()).toBe(true);

    act(() => {
      result.current.onKeyDown(blockedKeyEvent);
      result.current.onKeyDown(allowedKeyEvent);
    });

    expect(blockedKeyEvent.stopPropagation).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalledTimes(1);
    expect(onKeyDown).toHaveBeenCalledWith(allowedKeyEvent);

    act(() => {
      result.current.onCompositionEnd(endEvent);
    });

    expect(onCompositionEnd).toHaveBeenCalledWith(endEvent);
    expect(result.current.isComposing()).toBe(true);

    act(() => {
      vi.runAllTimers();
    });

    expect(result.current.isComposing()).toBe(false);
  });
});
