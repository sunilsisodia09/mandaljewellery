"use client";
import Link from "next/link";
import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#211b16] text-white">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1.2fr] lg:gap-12 lg:py-16">
        <div>
          <Link href="/" className="inline-flex flex-col leading-none"><span className="font-serif text-3xl tracking-[.15em]">MANDAL</span><span className="mt-2 text-[9px] tracking-[.45em] text-gold">JEWELLERS</span></Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">Jewellery that holds a story. Thoughtfully crafted pieces for your everyday and your forever.</p>
          <div className="mt-5 flex gap-3">{[Instagram, Facebook, Youtube].map((Icon, i) => <a key={i} href="#contact" aria-label={["Instagram","Facebook","Youtube"][i]} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-gold hover:text-gold"><Icon size={16} /></a>)}</div>
        </div>
        <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-gold">Explore</h3><div className="space-y-3 text-sm text-white/65"><Link className="block hover:text-white" href="/shop">Shop all jewellery</Link><a className="block hover:text-white" href="/#collections">Collections</a><a className="block hover:text-white" href="/#story">Our story</a><a className="block hover:text-white" href="/#craft">Our craftsmanship</a></div></div>
        <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-gold">Customer care</h3><div className="space-y-3 text-sm text-white/65"><a className="block hover:text-white" href="#contact">Shipping & delivery</a><a className="block hover:text-white" href="#contact">Returns & exchange</a><a className="block hover:text-white" href="#contact">Care guide</a><a className="block hover:text-white" href="#contact">FAQs</a></div></div>
        <div><h3 className="mb-5 text-xs font-semibold uppercase tracking-[.18em] text-gold">A note from us</h3><p className="mb-4 text-sm leading-6 text-white/60">Join our list for new collections, styling notes and a little sparkle in your inbox.</p><form className="flex border-b border-white/30 pb-2" onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing!"); }}><input type="email" required placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/40" /><button aria-label="Subscribe" className="text-gold"><ArrowUpRight size={19} /></button></form></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-[10px] tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Mandal Jewellers. All rights reserved.</span><span>Made with care, worn with love.</span></div></div>
    </footer>
  );
}
