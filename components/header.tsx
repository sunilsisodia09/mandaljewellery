"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, UserRound, ShoppingBag, ChevronDown } from "lucide-react";
import { useSite } from "@/components/site-provider";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Collections", href: "/#collections", },
  { label: "Our Story", href: "/#story" },
  { label: "Contact", href: "/#contact" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { cartCount } = useSite();
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/95 backdrop-blur-md">
      <div className="container-shell flex h-[76px] items-center justify-between gap-4">
        <button aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-10 w-10 items-center justify-center lg:hidden">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link href="/" className="group flex shrink-0 flex-col items-center leading-none">
          <span className="font-serif text-[25px] tracking-[.16em] sm:text-[29px]">MANDAL</span>
          <span className="mt-1 text-[8px] font-semibold tracking-[.44em] text-gold sm:text-[9px]">JEWELLERS</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(link => <Link key={link.label} href={link.href} className="flex items-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-[.13em] text-ink/80 transition hover:text-gold">{link.label}{link.dropdown && <ChevronDown size={12} />}</Link>)}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <button aria-label="Search" onClick={() => setSearchOpen(!searchOpen)} className="flex h-10 w-10 items-center justify-center transition hover:text-gold"><Search size={19} strokeWidth={1.5} /></button>
          <Link href="/cart" aria-label="Shopping bag" className="relative flex h-10 w-10 items-center justify-center transition hover:text-gold"><ShoppingBag size={20} strokeWidth={1.5} />{cartCount > 0 && <span className="absolute right-0 top-0 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-gold px-1 text-[10px] text-white">{cartCount}</span>}</Link>
        </div>
      </div>
      {searchOpen && <form action="/shop" className="border-t border-black/5 px-4 py-3"><div className="mx-auto flex max-w-2xl gap-3"><input name="q" placeholder="Search necklaces, rings, earrings..." className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-ink/40" autoFocus /><button className="bg-ink px-5 py-2 text-xs uppercase tracking-widest text-white">Search</button></div></form>}
      {menuOpen && <nav className="border-t border-black/5 bg-cream px-5 py-3 lg:hidden">{links.map(link => <Link key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="block border-b border-black/5 py-4 text-xs font-semibold uppercase tracking-[.15em] last:border-0">{link.label}</Link>)}</nav>}
    </header>
  );
}
