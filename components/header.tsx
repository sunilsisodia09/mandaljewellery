
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Gem,
} from "lucide-react";
import { useSite } from "@/components/site-provider";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Collections", href: "/#collections" },
  { label: "Our Story", href: "/#story" },
  { label: "Contact", href: "/contact" },
];

const rateItems = [
  "GOLD 24K — Today's Rate Available In Store",
  "GOLD 22K — Today's Rate Available In Store",
  "SILVER — Today's Rate Available In Store",
  "DIAMOND — Price On Request",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const { cartCount } = useSite();

  return (
    <header className="sticky top-0 z-50 bg-[#faf7f0] shadow-sm">

      {/* Main Header */}
      <div className="border-b border-black/10 bg-cream/95 backdrop-blur-md">
        <div className="container-shell flex h-[76px] items-center justify-between gap-3 lg:h-[88px]">

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center transition hover:text-gold lg:hidden"
          >
            {menuOpen ? (
              <X size={29} strokeWidth={1.6} />
            ) : (
              <Menu size={30} strokeWidth={1.6} />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            aria-label="Mandal Jewellers Home"
            className="group flex shrink-0 flex-col items-center leading-none"
          >
            <span className="font-serif text-[27px] tracking-[.16em] sm:text-[32px]">
              MANDAL
            </span>

            <span className="mt-1.5 text-[9px] font-semibold tracking-[.48em] text-gold sm:text-[10px]">
              JEWELLERS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:flex xl:gap-10"
          >
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="whitespace-nowrap py-4 text-[12px] font-semibold uppercase tracking-[.14em] text-ink/85 transition-colors duration-300 hover:text-gold xl:text-[13px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-1 sm:gap-3">

            {/* Search Button */}
            <button
              type="button"
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center transition hover:text-gold"
            >
              {searchOpen ? (
                <X size={22} strokeWidth={1.5} />
              ) : (
                <Search size={22} strokeWidth={1.5} />
              )}
            </button>

            {/* Shopping Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping bag, ${cartCount} items`}
              className="relative flex h-11 w-11 items-center justify-center transition hover:text-gold"
            >
              <ShoppingBag size={23} strokeWidth={1.5} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Form */}
      {searchOpen && (
        <form
          action="/shop"
          onSubmit={() => setSearchOpen(false)}
          className="border-b border-black/10 bg-[#faf7f0] px-4 py-4"
        >
          <div className="mx-auto flex max-w-2xl gap-3">
            <input
              type="search"
              name="q"
              placeholder="Search necklaces, rings, earrings..."
              aria-label="Search products"
              className="min-w-0 flex-1 border-b border-black/20 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-ink/40"
              autoFocus
            />

            <button
              type="submit"
              className="bg-ink px-6 py-2 text-xs uppercase tracking-widest text-white transition hover:bg-gold"
            >
              Search
            </button>
          </div>
        </form>
      )}

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-b border-black/10 bg-[#faf7f0] px-5 py-3 shadow-lg lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between border-b border-black/5 py-5 text-[13px] font-semibold uppercase tracking-[.16em] text-ink transition hover:text-gold last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}

      {/* Gold, Silver & Diamond Rate Ticker */}
      <div className="flex h-[36px] items-center overflow-hidden border-b border-[#b8944d]/30 bg-[#17140f] text-[#e8d09c]">

        {/* Fixed Market Rates Label */}
        <div className="relative z-10 flex h-full shrink-0 items-center gap-2 bg-[#b18a45] px-3 text-[9px] font-bold uppercase tracking-wider text-white sm:px-5 sm:text-[10px]">
          <Gem size={13} />
          <span>Market Rates</span>
        </div>

        {/* Scrolling Ticker */}
        <div className="ticker-viewport min-w-0 flex-1 overflow-hidden">
          <div className="ticker-track flex w-max items-center">
            {[0, 1, 2, 3].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
                aria-hidden={group !== 0}
              >
                {rateItems.map((item) => (
                  <div
                    key={`${group}-${item}`}
                    className="flex items-center gap-3 px-5 text-[9px] font-medium uppercase tracking-[.13em] sm:gap-5 sm:px-8 sm:text-[10px]"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#c9a45e]" />

                    <span className="whitespace-nowrap">
                      {item}
                    </span>

                    <span className="text-[#c9a45e]">✦</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker Animation */}
      <style jsx>{`
        .ticker-track {
          animation: mandalTicker 35s linear infinite;
          will-change: transform;
        }

        .ticker-viewport:hover .ticker-track {
          animation-play-state: paused;
        }

        @keyframes mandalTicker {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-25%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker-track {
            animation: none;
          }
        }
      `}</style>

    </header>
  );
}
