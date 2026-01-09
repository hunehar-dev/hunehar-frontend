"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/school", label: "Our School" },
  { href: "/impact", label: "Our Impact" },
  {
    label: "Get Involved",
    href: "/get-involved",
    sublinks: [
      { href: "/get-involved/volunteer", label: "Volunteer" },
      { href: "/donate", label: "Donate" },
    ],
  },
  { href: "/stories", label: "Stories & Reports" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const handleMobileDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="bg-white/80 shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[clamp(3rem,5vw,4rem)]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/logopng.png"
              alt="Hunehar Logo"
              width={150}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-[clamp(1.75rem,1.5vw,1.5rem)]">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <Link
                  href={link.href}
                  className={`flex items-center space-x-1 text-gray-600 hover:text-[#206FAC] transition-colors duration-300 font-medium pb-1 text-[clamp(0.875rem,1vw,1rem)] ${
                    (pathname.startsWith(link.href) && link.href !== "/") ||
                    pathname === link.href
                      ? "text-[#206FAC]"
                      : ""
                  }`}
                >
                  <span>{link.label}</span>
                  {link.sublinks && (
                    <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                {link.sublinks && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="py-1">
                      {link.sublinks.map((sublink) => (
                        <Link
                          key={sublink.href}
                          href={sublink.href}
                          className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#206FAC] transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Donate & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Link
              href="/donate"
              className="hidden md:inline-flex items-center space-x-1 bg-[#206FAC] hover:bg-red-400 text-white px-[clamp(0.75rem,1vw,1rem)] py-[clamp(0.4rem,0.8vw,0.6rem)] rounded-full font-semibold text-[clamp(0.75rem,0.9vw,0.875rem)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart className="h-3 w-4.5" />
              <span>Donate Now</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-1.5 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
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
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen
              ? "max-h-screen py-3 border-t border-gray-200"
              : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.sublinks ? (
                  <>
                    <button
                      onClick={() => handleMobileDropdown(link.label)}
                      className="w-full flex justify-between items-center text-left py-2 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-3 ${
                        openDropdown === link.label ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <div className="flex flex-col space-y-1 py-1 border-l border-gray-200">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-1 px-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md text-sm"
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
                    className="block py-2 px-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-2 pb-3">
              <Link
                href="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors"
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
