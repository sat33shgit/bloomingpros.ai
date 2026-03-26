import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

/**
 * Navigation Component
 * Modern minimalism design with indigo & teal accent
 * Features: Sticky header, mobile menu, responsive navigation
 */
export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "For Students", href: "/students" },
    { label: "For Colleges", href: "/colleges" },
    { label: "For Companies", href: "/companies" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-[#1F2937] to-[#14B8A6] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">BP</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">
              BloomingPros.ai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              location === item.href || (item.href !== "/" && location.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-[#1F2937] to-[#14B8A6] px-3 py-1 rounded-full shadow-sm"
                    : "text-foreground hover:text-accent"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow">
            <Link href="/app/signup">Join Free PoC</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive =
                location === item.href || (item.href !== "/" && location.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors px-2 py-1 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-[#1F2937] to-[#14B8A6] rounded-md"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <Button asChild>
              <Link href="/app/signup" onClick={() => setMobileMenuOpen(false)} className="w-full">
                <span>
                  Join Free PoC
                </span>
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
        { label: "Blog", href: "#" },
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
    <footer className="bg-white border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#1F2937] to-[#14B8A6] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BP</span>
              </div>
              <span className="font-bold text-foreground">BloomingPros.ai</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Reimagining employability through skills, evidence, and opportunity.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BloomingPros.ai. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
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
