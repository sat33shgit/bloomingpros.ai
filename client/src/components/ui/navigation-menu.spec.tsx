import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

vi.mock("@radix-ui/react-navigation-menu", async () => {
  const React = await import("react");

  const primitive = (tag: keyof React.JSX.IntrinsicElements = "div") =>
    React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
      ({ children, ...props }, ref) =>
        React.createElement(tag, { ref, ...props }, children)
    );

  return {
    Root: primitive("div"),
    List: primitive("div"),
    Item: primitive("div"),
    Trigger: primitive("button"),
    Content: primitive("div"),
    Viewport: primitive("div"),
    Link: primitive("a"),
    Indicator: primitive("div"),
  };
});

describe("Navigation menu wrappers", () => {
  it("renders the navigation menu with its default viewport and slots", () => {
    const { container } = render(
      <NavigationMenu data-testid="nav-root">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent data-testid="nav-content">
              <NavigationMenuLink href="/platform" data-active="true">
                Platform
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    );

    expect(screen.getByTestId("nav-root")).toHaveAttribute(
      "data-slot",
      "navigation-menu"
    );
    expect(screen.getByTestId("nav-root")).toHaveAttribute(
      "data-viewport",
      "true"
    );
    expect(screen.getByRole("button", { name: "Products" })).toHaveAttribute(
      "data-slot",
      "navigation-menu-trigger"
    );
    expect(screen.getByTestId("nav-content")).toHaveAttribute(
      "data-slot",
      "navigation-menu-content"
    );
    expect(screen.getByRole("link", { name: "Platform" })).toHaveAttribute(
      "data-slot",
      "navigation-menu-link"
    );
    expect(
      container.querySelector("[data-slot='navigation-menu-indicator']")
    ).toBeInTheDocument();
    expect(
      container.querySelector("[data-slot='navigation-menu-viewport']")
    ).toBeInTheDocument();
    expect(navigationMenuTriggerStyle()).toContain("inline-flex");
  });

  it("omits the viewport when disabled", () => {
    const { container } = render(
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Docs</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(container.querySelector("[data-slot='navigation-menu']")).toHaveAttribute(
      "data-viewport",
      "false"
    );
    expect(
      container.querySelector("[data-slot='navigation-menu-viewport']")
    ).not.toBeInTheDocument();
    expect(navigationMenuTriggerStyle()).toContain(
      "data-[state=open]:bg-accent/50"
    );
  });
});
