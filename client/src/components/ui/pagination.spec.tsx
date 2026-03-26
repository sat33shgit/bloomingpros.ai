import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

describe("Pagination wrappers", () => {
  it("renders pagination links, navigation controls, and ellipsis helpers", () => {
    const { container } = render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="/page/1" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/page/1">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/page/2" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="/page/3" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    expect(screen.getByRole("navigation", { name: "pagination" })).toHaveAttribute(
      "data-slot",
      "pagination"
    );
    expect(container.querySelector("[data-slot='pagination-content']")).toBeInTheDocument();
    expect(container.querySelectorAll("[data-slot='pagination-item']")).toHaveLength(5);
    expect(screen.getByRole("link", { name: "1" })).toHaveAttribute(
      "data-slot",
      "pagination-link"
    );
    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute(
      "aria-current",
      "page"
    );
    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute(
      "data-active",
      "true"
    );
    expect(
      screen.getByRole("link", { name: "Go to previous page" })
    ).toHaveAttribute("href", "/page/1");
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to next page" })).toHaveAttribute(
      "href",
      "/page/3"
    );
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='pagination-ellipsis']")).toBeInTheDocument();
    expect(screen.getByText("More pages")).toBeInTheDocument();
  });
});
