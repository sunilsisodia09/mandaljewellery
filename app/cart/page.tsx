
"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";
import { useSite } from "@/components/site-provider";

export default function CartPage() {
  const { cart, removeFromCart } = useSite();

  const money = (n: number) =>
    "₹" + n.toLocaleString("en-IN");

  return (
    <main className="container-shell min-h-[60vh] py-10 sm:py-16">
      <Link
        href="/shop"
        className="mb-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-ink/60 transition hover:text-gold"
      >
        <ArrowLeft size={14} />
        Continue shopping
      </Link>

      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
            Your selection
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl">
            Shopping bag
          </h1>
        </div>

        <span className="text-sm text-ink/50">
          {cart.reduce((sum, item) => sum + item.qty, 0)} items
        </span>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center border-y border-ink/10 py-16 text-center">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#eee5d8]">
            <ShoppingBag size={24} />
          </div>

          <h2 className="font-serif text-2xl">
            Your bag is waiting to sparkle.
          </h2>

          <p className="mt-2 text-sm text-ink/55">
            Discover a piece that feels like you.
          </p>

          <Link
            href="/shop"
            className="mt-6 bg-ink px-6 py-4 text-[10px] font-bold uppercase tracking-[.17em] text-white transition hover:bg-gold"
          >
            Explore jewellery
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-ink/10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 py-5 first:pt-0"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-28 w-24 bg-sand object-cover sm:h-36 sm:w-28"
              />

              <div className="flex min-w-0 flex-1 flex-col justify-between sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-serif text-lg">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs text-ink/50">
                    Quantity: {item.qty}
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    {money(item.price * item.qty)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 inline-flex items-center gap-2 self-start text-[10px] font-semibold uppercase tracking-widest text-ink/45 transition hover:text-red-600 sm:mt-0"
                >
                  <Trash2 size={14} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
