import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

vi.mock("vaul", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Drawer: {
      Root: primitive("div"),
      Trigger: primitive("button"),
      Portal: primitive("div"),
      Close: primitive("button"),
      Overlay: primitive("div"),
      Content: primitive("div"),
      Title: primitive("div"),
      Description: primitive("div"),
    },
  };
});

describe("Drawer wrappers", () => {
  it("renders the drawer slots, overlay, and semantic sections", () => {
    const { container } = render(
      <Drawer open>
        <DrawerTrigger>Open drawer</DrawerTrigger>
        <DrawerContent data-testid="drawer-content">
          <DrawerHeader>
            <DrawerTitle>Drawer title</DrawerTitle>
            <DrawerDescription>Drawer description</DrawerDescription>
          </DrawerHeader>
          <div>Drawer body</div>
          <DrawerFooter>
            <DrawerClose>Dismiss</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    expect(container.querySelector("[data-slot='drawer']")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Open drawer" })).toHaveAttribute(
      "data-slot",
      "drawer-trigger"
    );
    expect(screen.getByTestId("drawer-content")).toHaveAttribute(
      "data-slot",
      "drawer-content"
    );
    expect(container.querySelector("[data-slot='drawer-overlay']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='drawer-portal']")).toBeInTheDocument();
    expect(screen.getByText("Drawer title").parentElement).toHaveAttribute(
      "data-slot",
      "drawer-header"
    );
    expect(screen.getByText("Drawer title")).toHaveAttribute(
      "data-slot",
      "drawer-title"
    );
    expect(screen.getByText("Drawer description")).toHaveAttribute(
      "data-slot",
      "drawer-description"
    );
    expect(screen.getByRole("button", { name: "Dismiss" })).toHaveAttribute(
      "data-slot",
      "drawer-close"
    );
    expect(screen.getByText("Dismiss").parentElement).toHaveAttribute(
      "data-slot",
      "drawer-footer"
    );
  });
});
