"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles } from "@/components/sparkles";

const menuItems = [
  { label: "MAIN", href: "/" },
  { label: "INFO", href: "/info" },
] as const satisfies {
  label: string;
  href: string;
}[];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActiveLink(href: string) {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  }

  const linkStyles = {
    base: "transition-colors duration-200",
    desktop: "px-3 py-2 text-sm",
    mobile: "block px-3 py-2 text-base",
    inactive: "text-gray-900 hover:text-gray-600",
    active: "text-black font-medium underline underline-offset-4",
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Sparkles>
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                <span>ANZHELIKA BASHIROVA</span>
              </Link>
            </div>
          </Sparkles>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    linkStyles.base,
                    linkStyles.desktop,
                    isActiveLink(item.href)
                      ? linkStyles.active
                      : linkStyles.inactive
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-gray-900 hover:text-gray-600"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn("md:hidden", isOpen ? "block" : "hidden")}
        aria-hidden={!isOpen}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                linkStyles.base,
                linkStyles.mobile,
                isActiveLink(item.href)
                  ? linkStyles.active
                  : linkStyles.inactive
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
