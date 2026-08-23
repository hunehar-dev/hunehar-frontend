"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/school", label: "Our School" },
  { href: "/impact", label: "Our Impact" },
  {
    label: "Get Involved",
    href: "/get-involved/donate",
    sublinks: [
      { href: "/get-involved/volunteer", label: "Volunteer" },
      { href: "/get-involved/donate", label: "Donate" },
    ],
  },
  { href: "/stories", label: "Stories & Reports" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="container-brand">
        <div className="flex items-center justify-between h-[72px] lg:h-20 gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/logopng.png"
              alt="Hunehar"
              width={130}
              height={44}
              className="w-[110px] lg:w-[130px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            aria-label="Main"
            className="hidden lg:flex items-center gap-7 xl:gap-8"
          >
            {navLinks.map((link) => {
              const isActive =
                (pathname.startsWith(link.href) && link.href !== "/") ||
                pathname === link.href;

              return (
                <div key={link.label} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-[0.9375rem] font-medium transition-colors ${
                      isActive
                        ? "text-brand-blue"
                        : "text-brand-muted hover:text-brand-blue-dark"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.sublinks && (
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                  {link.sublinks && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-48 bg-white rounded-2xl shadow-lg ring-1 ring-black/5 py-2">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block mx-1.5 px-3.5 py-2 rounded-lg text-[0.875rem] text-brand-muted hover:text-brand-blue hover:bg-brand-bg transition-colors"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Donate & Mobile Menu Button */}
          <div className="flex items-center gap-2.5 flex-none">
            <Button asChild variant="brand" size="brand-sm" className="hidden md:inline-flex">
              <Link href="/get-involved/donate">Donate</Link>
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-[10px] bg-brand-bg text-brand-navy"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-[36rem] pb-5" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-0.5 pt-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdown(link.label)}
                      className="w-full flex justify-between items-center py-3 px-0.5 text-[1.0625rem] font-medium text-brand-navy"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 text-brand-muted transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-3 border-l border-brand-border ${
                        openDropdown === link.label ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col gap-0.5 py-1">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-2 px-2 text-[0.9375rem] text-brand-muted"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 px-0.5 text-[1.0625rem] font-medium text-brand-navy"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild variant="brand" size="brand-sm" className="mt-3 w-full">
              <Link href="/get-involved/donate" onClick={() => setIsMenuOpen(false)}>
                Donate
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
