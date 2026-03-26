import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

describe("Table wrappers", () => {
  it("renders table structure slots for caption, header, body, footer, and cells", () => {
    const { container } = render(
      <Table>
        <TableCaption>Quarterly results</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead>Revenue</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow data-state="selected">
            <TableCell>Growth</TableCell>
            <TableCell>$10,000</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>$10,000</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(container.querySelector("[data-slot='table-container']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='table']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='table-header']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='table-body']")).toBeInTheDocument();
    expect(container.querySelector("[data-slot='table-footer']")).toBeInTheDocument();
    expect(screen.getByText("Team")).toHaveAttribute("data-slot", "table-head");
    expect(screen.getByText("Growth")).toHaveAttribute("data-slot", "table-cell");
    expect(screen.getByText("Total").closest("tr")).toHaveAttribute(
      "data-slot",
      "table-row"
    );
    expect(screen.getByText("Quarterly results")).toHaveAttribute(
      "data-slot",
      "table-caption"
    );
  });
});
