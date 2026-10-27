"use client";
import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag, Check } from "lucide-react";
import type { Product } from "@/data/products";
import { useSite } from "@/components/site-provider";

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);
  const { addToCart } = useSite();
  const formatPrice = (price: number) => "₹" + price.toLocaleString("en-IN");
  return (
    <article className="group min-w-0">
      <div className="product-image image-zoom relative aspect-[4/5] overflow-hidden">
        <Link href={`/shop#product-${product.id}`} aria-label={`View ${product.name}`} className="absolute inset-0 z-0"><img src={product.image} alt={product.name} className="h-full w-full object-cover" /></Link>
        {product.tag && <span className="absolute left-3 top-3 z-10 bg-cream px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[.13em]">{product.tag}</span>}
        <button onClick={() => setLiked(!liked)} aria-label={liked ? "Remove from wishlist" : "Add to wishlist"} className={`absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 transition ${liked ? "text-rose-600" : "text-ink hover:text-gold"}`}><Heart size={16} fill={liked ? "currentColor" : "none"} /></button>
        <button onClick={() => { addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }); setAdded(true); setTimeout(() => setAdded(false), 1600); }} className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-center gap-2 bg-white/95 py-3 text-[10px] font-semibold uppercase tracking-[.16em] transition hover:bg-ink hover:text-white sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">{added ? <><Check size={15} /> Added to bag</> : <><ShoppingBag size={14} /> Add to bag</>}</button>
      </div>
      <div className="flex items-start justify-between gap-2 pt-3">
        <div className="min-w-0"><p className="mb-1 text-[9px] uppercase tracking-[.16em] text-ink/45">{product.category}</p><h3 className="truncate font-serif text-[15px] sm:text-base">{product.name}</h3></div>
        <div className="shrink-0 text-right"><p className="text-xs font-semibold sm:text-sm">{formatPrice(product.price)}</p>{product.oldPrice && <p className="text-[10px] text-ink/40 line-through">{formatPrice(product.oldPrice)}</p>}</div>
      </div>
    </article>
  );
}
