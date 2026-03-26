import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

describe("Breadcrumb helpers", () => {
  it("renders breadcrumb links, page markers, separators, and ellipsis helpers", () => {
    const { container } = render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <a href="/projects">Projects</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbPage>Current page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(screen.getByLabelText("breadcrumb")).toHaveAttribute(
      "data-slot",
      "breadcrumb"
    );
    expect(container.querySelector("[data-slot='breadcrumb-list']")).toBeInTheDocument();
    expect(container.querySelectorAll("[data-slot='breadcrumb-item']")).toHaveLength(4);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute(
      "data-slot",
      "breadcrumb-link"
    );
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "/projects"
    );
    expect(screen.getByText("Current page")).toHaveAttribute(
      "data-slot",
      "breadcrumb-page"
    );
    expect(screen.getByText("Current page")).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(container.querySelectorAll("[data-slot='breadcrumb-separator']")).toHaveLength(2);
    expect(screen.getByText("More")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='breadcrumb-ellipsis']")).toBeInTheDocument();
  });
});
