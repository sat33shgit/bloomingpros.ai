import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "./sidebar";

const { mockIsMobile } = vi.hoisted(() => ({
  mockIsMobile: vi.fn(),
}));

vi.mock("@/hooks/useMobile", () => ({
  useIsMobile: () => mockIsMobile(),
}));

vi.mock("@/components/ui/sheet", async () => {
  const React = await import("react");
  const SheetContext = React.createContext(false);

  return {
    Sheet: ({
      open,
      children,
    }: {
      open?: boolean;
      children: React.ReactNode;
    }) => <SheetContext.Provider value={!!open}>{children}</SheetContext.Provider>,
    SheetContent: ({
      children,
      ...props
    }: React.ComponentProps<"div">) => {
      const open = React.useContext(SheetContext);
      return open ? <div {...props}>{children}</div> : null;
    },
    SheetHeader: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
    SheetTitle: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
    SheetDescription: ({ children, ...props }: React.ComponentProps<"div">) => (
      <div {...props}>{children}</div>
    ),
  };
});

vi.mock("@/components/ui/tooltip", () => ({
  TooltipProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Tooltip: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  TooltipTrigger: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  TooltipContent: ({
    children,
    hidden,
    ...props
  }: { children: React.ReactNode; hidden?: boolean } & React.ComponentProps<"div">) =>
    hidden ? null : <div {...props}>{children}</div>,
}));

function SidebarHarness({
  providerProps,
  sidebarProps,
}: {
  providerProps?: Partial<React.ComponentProps<typeof SidebarProvider>>;
  sidebarProps?: Partial<React.ComponentProps<typeof Sidebar>>;
}) {
  return (
    <SidebarProvider {...providerProps}>
      <SidebarTrigger />
      <Sidebar {...sidebarProps}>
        <SidebarHeader>
          <SidebarInput aria-label="Search sidebar" placeholder="Search the sidebar" />
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupAction aria-label="Add workspace">+</SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive tooltip="Go to dashboard">
                    <a href="/dashboard">Dashboard</a>
                  </SidebarMenuButton>
                  <SidebarMenuAction aria-label="Open menu actions">...</SidebarMenuAction>
                  <SidebarMenuBadge>7</SidebarMenuBadge>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton variant="outline" size="lg">
                    Reports
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuSkeleton showIcon />
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton href="/settings" size="sm" isActive>
                    Settings
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarRail />
        </SidebarContent>
        <SidebarFooter>Footer Area</SidebarFooter>
      </Sidebar>
      <SidebarInset>Inset content</SidebarInset>
    </SidebarProvider>
  );
}

describe("Sidebar primitives", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    document.cookie = "sidebar_state=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  });

  it("throws when useSidebar is used outside the provider", () => {
    function RogueConsumer() {
      useSidebar();
      return null;
    }

    expect(() => render(<RogueConsumer />)).toThrow(
      "useSidebar must be used within a SidebarProvider."
    );
  });

  it("toggles desktop sidebar state through the trigger, keyboard shortcut, and rail", () => {
    mockIsMobile.mockReturnValue(false);
    const { container } = render(<SidebarHarness providerProps={{ defaultOpen: true }} />);

    const sidebar = container.querySelector("[data-slot='sidebar']") as HTMLElement;
    const trigger = container.querySelector("[data-slot='sidebar-trigger']") as HTMLButtonElement;
    const rail = container.querySelector("[data-slot='sidebar-rail']") as HTMLButtonElement;

    expect(sidebar).toHaveAttribute("data-state", "expanded");
    expect(screen.queryByText("Go to dashboard")).not.toBeInTheDocument();
    expect(screen.getByText("Inset content")).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(sidebar).toHaveAttribute("data-state", "collapsed");
    expect(document.cookie).toContain("sidebar_state=false");
    expect(screen.getByText("Go to dashboard")).toBeInTheDocument();

    fireEvent.keyDown(window, { key: "b", ctrlKey: true });
    expect(sidebar).toHaveAttribute("data-state", "expanded");
    expect(document.cookie).toContain("sidebar_state=true");

    fireEvent.click(rail);
    expect(sidebar).toHaveAttribute("data-state", "collapsed");
  });

  it("calls the controlled onOpenChange callback when the trigger is used", () => {
    mockIsMobile.mockReturnValue(false);
    const onOpenChange = vi.fn();
    const { container } = render(
      <SidebarHarness providerProps={{ open: true, onOpenChange }} />
    );

    const trigger = container.querySelector("[data-slot='sidebar-trigger']") as HTMLButtonElement;
    fireEvent.click(trigger);

    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("renders the mobile sidebar sheet when toggled open", () => {
    mockIsMobile.mockReturnValue(true);
    const { container } = render(<SidebarHarness />);

    const trigger = container.querySelector("[data-slot='sidebar-trigger']") as HTMLButtonElement;

    expect(screen.queryByText("Displays the mobile sidebar.")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.getByText("Sidebar")).toBeInTheDocument();
    expect(screen.getByText("Displays the mobile sidebar.")).toBeInTheDocument();
    expect(screen.getByText("Footer Area")).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByText("Displays the mobile sidebar.")).not.toBeInTheDocument();
  });

  it("renders the non-collapsible sidebar variant", () => {
    mockIsMobile.mockReturnValue(false);

    render(
      <SidebarProvider>
        <Sidebar collapsible="none">Always visible</Sidebar>
      </SidebarProvider>
    );

    expect(screen.getByText("Always visible")).toBeInTheDocument();
  });
});
