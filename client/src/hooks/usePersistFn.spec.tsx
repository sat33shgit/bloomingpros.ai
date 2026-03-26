import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { usePersistFn } from "./usePersistFn";

describe("usePersistFn", () => {
  it("keeps a stable function reference while calling the latest implementation", () => {
    const { result, rerender } = renderHook(
      ({ multiplier }: { multiplier: number }) =>
        usePersistFn(function (this: { offset: number }, value: number) {
          return value * multiplier + this.offset;
        }),
      {
        initialProps: { multiplier: 2 },
      }
    );

    const firstReference = result.current;

    expect(firstReference.call({ offset: 1 }, 3)).toBe(7);

    rerender({ multiplier: 4 });

    expect(result.current).toBe(firstReference);
    expect(firstReference.call({ offset: 1 }, 3)).toBe(13);
  });
});
