import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

const { emblaApi, emblaHandlers, emblaRef, emblaState, mockUseEmblaCarousel } =
  vi.hoisted(() => {
    const emblaHandlers: Record<string, Array<(api?: unknown) => void>> = {
      select: [],
      reInit: [],
    };

    const emblaState = {
      api: null as
        | {
            canScrollPrev: () => boolean;
            canScrollNext: () => boolean;
            scrollPrev: () => void;
            scrollNext: () => void;
            on: (event: string, callback: (api?: unknown) => void) => void;
            off: (event: string, callback: (api?: unknown) => void) => void;
          }
        | null,
      canScrollPrev: false,
      canScrollNext: true,
    };

    const emblaApi = {
      canScrollPrev: vi.fn(() => emblaState.canScrollPrev),
      canScrollNext: vi.fn(() => emblaState.canScrollNext),
      scrollPrev: vi.fn(),
      scrollNext: vi.fn(),
      on: vi.fn((event: string, callback: (api?: unknown) => void) => {
        emblaHandlers[event].push(callback);
      }),
      off: vi.fn((event: string, callback: (api?: unknown) => void) => {
        emblaHandlers[event] = emblaHandlers[event].filter(
          handler => handler !== callback
        );
      }),
    };

    const emblaRef = vi.fn();
    const mockUseEmblaCarousel = vi.fn(() => [emblaRef, emblaState.api]);

    emblaState.api = emblaApi;

    return {
      emblaApi,
      emblaHandlers,
      emblaRef,
      emblaState,
      mockUseEmblaCarousel,
    };
  });

vi.mock("embla-carousel-react", () => ({
  default: mockUseEmblaCarousel,
}));

describe("Carousel helpers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    emblaState.api = emblaApi;
    emblaState.canScrollPrev = false;
    emblaState.canScrollNext = true;
    emblaHandlers.select = [];
    emblaHandlers.reInit = [];
  });

  it("renders a horizontal carousel, exposes embla state, and cleans up listeners", () => {
    const setApi = vi.fn();
    const { container, unmount } = render(
      <Carousel setApi={setApi}>
        <CarouselContent data-testid="carousel-track">
          <CarouselItem data-testid="carousel-item">Slide one</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    const region = screen.getByRole("region", { name: "" });
    const previous = screen.getByRole("button", { name: "Previous slide" });
    const next = screen.getByRole("button", { name: "Next slide" });

    expect(region).toHaveAttribute("data-slot", "carousel");
    expect(mockUseEmblaCarousel).toHaveBeenCalledWith(
      expect.objectContaining({ axis: "x" }),
      undefined
    );
    expect(setApi).toHaveBeenCalledWith(emblaApi);
    expect(emblaRef).toHaveBeenCalled();
    expect(screen.getByTestId("carousel-track").className).toContain("-ml-4");
    expect(screen.getByTestId("carousel-item").className).toContain("pl-4");
    expect(previous).toBeDisabled();
    expect(next).toBeEnabled();

    const selectHandler = emblaHandlers.select[0];
    const reInitHandler = emblaHandlers.reInit[0];

    act(() => {
      emblaState.canScrollPrev = true;
      emblaState.canScrollNext = false;
      selectHandler(emblaApi);
      reInitHandler(undefined);
    });

    expect(previous).toBeEnabled();
    expect(next).toBeDisabled();

    unmount();

    expect(emblaApi.off).toHaveBeenCalledWith("select", selectHandler);
    expect(container.querySelector("[data-slot='carousel-content']")).not.toBeInTheDocument();
  });

  it("supports vertical orientation and carousel navigation controls", () => {
    emblaState.canScrollPrev = true;
    emblaState.canScrollNext = true;

    render(
      <Carousel orientation="vertical" opts={{ loop: true }}>
        <CarouselContent data-testid="carousel-track">
          <CarouselItem data-testid="carousel-item">Slide two</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    const region = screen.getByRole("region", { name: "" });
    const previous = screen.getByRole("button", { name: "Previous slide" });
    const next = screen.getByRole("button", { name: "Next slide" });

    expect(mockUseEmblaCarousel).toHaveBeenCalledWith(
      expect.objectContaining({ loop: true, axis: "y" }),
      undefined
    );
    expect(screen.getByTestId("carousel-track").className).toContain("-mt-4");
    expect(screen.getByTestId("carousel-track").className).toContain("flex-col");
    expect(screen.getByTestId("carousel-item").className).toContain("pt-4");
    expect(previous.className).toContain("rotate-90");
    expect(next.className).toContain("rotate-90");

    fireEvent.click(previous);
    fireEvent.click(next);
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    fireEvent.keyDown(region, { key: "ArrowRight" });

    expect(emblaApi.scrollPrev).toHaveBeenCalledTimes(2);
    expect(emblaApi.scrollNext).toHaveBeenCalledTimes(2);
  });

  it("no-ops while the embla api is not ready yet", () => {
    emblaState.api = null;

    render(
      <Carousel>
        <CarouselContent data-testid="carousel-track">
          <CarouselItem>Pending slide</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    const region = screen.getByRole("region", { name: "" });
    fireEvent.keyDown(region, { key: "ArrowLeft" });
    fireEvent.keyDown(region, { key: "ArrowRight" });

    expect(screen.getByRole("button", { name: "Previous slide" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Next slide" })).toBeDisabled();
    expect(emblaApi.scrollPrev).not.toHaveBeenCalled();
    expect(emblaApi.scrollNext).not.toHaveBeenCalled();
  });

  it("throws when carousel children are rendered outside the provider", () => {
    expect(() => render(<CarouselContent />)).toThrow(
      "useCarousel must be used within a <Carousel />"
    );
  });
});
