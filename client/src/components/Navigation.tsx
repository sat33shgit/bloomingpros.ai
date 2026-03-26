import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "For Students", href: "/students" },
  { label: "For Colleges", href: "/colleges" },
  { label: "For Companies", href: "/companies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const SCROLL_TO_TOP_ROUTES = new Set([
  "/",
  "/students",
  "/colleges",
  "/companies",
  "/blog",
  "/faq",
]);

/**
 * Navigation Component
 * Modern minimalism design with indigo & teal accent
 * Features: Sticky header, mobile menu, responsive navigation
 */
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToPageTop = () => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } catch {
      window.scrollTo(0, 0);
    }
  };

  const handleNavClick =
    (href: string, closeMobileMenu = false) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (closeMobileMenu) {
        setMobileMenuOpen(false);
      }

      if (!SCROLL_TO_TOP_ROUTES.has(href)) {
        return;
      }

      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      if (location === href) {
        event.preventDefault();
        scrollToPageTop();
        return;
      }

      window.setTimeout(scrollToPageTop, 0);
    };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/">
          <div className="group flex cursor-pointer items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1F2937] to-[#14B8A6]">
              <span className="text-lg font-bold text-white">BP</span>
            </div>
            <span className="hidden text-lg font-bold text-foreground sm:inline">
              BloomingPros.ai
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              location === item.href || (item.href !== "/" && location.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "rounded-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6] px-3 py-1 text-white shadow-sm"
                    : "text-foreground hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button
            asChild
            className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] transition-shadow hover:shadow-lg"
          >
            <Link href="/app/signup">Join Free PoC</Link>
          </Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {NAV_ITEMS.map((item) => {
              const isActive =
                location === item.href || (item.href !== "/" && location.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick(item.href, true)}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "rounded-md bg-gradient-to-r from-[#1F2937] to-[#14B8A6] text-white"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Button asChild>
              <Link href="/app/signup" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <span>Join Free PoC</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

/**
 * Footer Component
 * Modern minimalism design with clear section grouping
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "For Students", href: "/students" },
        { label: "For Colleges", href: "/colleges" },
        { label: "For Companies", href: "/companies" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="mt-20 bg-white border-t border-border">
      <div className="container py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#1F2937] to-[#14B8A6]">
                <span className="text-lg font-bold text-white">BP</span>
              </div>
              <span className="font-bold text-foreground">BloomingPros.ai</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Reimagining employability through skills, evidence, and opportunity.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            Copyright {currentYear} BloomingPros.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Twitter"
            >
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
