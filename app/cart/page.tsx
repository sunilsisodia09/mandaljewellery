
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Trash2, Gem } from "lucide-react";
import { useSite } from "@/components/site-provider";

export default function CartPage() {
  const { cart, removeFromCart } = useSite();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <main className="min-h-screen overflow-hidden bg-[#faf7f0]">
      <div className="container-shell mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-12 lg:px-10 lg:py-12">

        {/* Continue Shopping */}
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.15em] text-ink transition hover:text-gold"
        >
          <ArrowLeft size={17} strokeWidth={1.7} />
          Continue Shopping
        </Link>

        {/* Page Heading */}
        <div className="mb-9 text-center sm:mb-11 lg:mb-10">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#bd914b] sm:w-24" />

            <p className="text-[11px] font-semibold uppercase tracking-[.35em] text-[#b18a45] sm:text-sm">
              Your Collection
            </p>

            <span className="h-px w-12 bg-[#bd914b] sm:w-24" />
          </div>

          <h1 className="font-serif text-4xl text-[#211c16] sm:text-5xl lg:text-5xl xl:text-6xl">
            Shopping Bag
          </h1>

          <p className="mt-3 text-xs tracking-wider text-ink/50">
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (

          <div className="mx-auto flex max-w-3xl flex-col items-center border-y border-[#d9cbb5] py-16 text-center lg:py-20">

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#eee6d8]">
              <ShoppingBag
                size={30}
                strokeWidth={1.3}
                className="text-[#a68142]"
              />
            </div>

            <h2 className="font-serif text-2xl text-[#211c16] sm:text-3xl">
              Your bag is waiting to sparkle.
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-ink/55">
              Discover beautiful jewellery pieces and add something
              special to your collection.
            </p>

            <Link
              href="/shop"
              className="mt-8 bg-[#211c16] px-8 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-white transition hover:bg-[#b18a45]"
            >
              Explore Jewellery
            </Link>
          </div>

        ) : (

          /* Product Grid */
          <section className="mx-auto max-w-6xl">

            <div className="mb-6 flex items-center justify-between border-b border-[#ded4c5] pb-4">
              <h2 className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#211c16] sm:text-xs">
                Your Selected Jewellery
              </h2>

              <span className="text-[10px] tracking-wider text-ink/50 sm:text-xs">
                {cart.length} Products
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:gap-9">

              {cart.map((item) => (

                <article
                  key={item.id}
                  className="group mx-auto w-full max-w-[480px] overflow-hidden rounded-lg border border-[#e3d9ca] bg-[#fffdf9] p-2.5 transition duration-300 hover:border-[#c4a36c] sm:p-3"
                >

                  {/* Product Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#eee6d9] lg:aspect-auto lg:h-[350px] xl:h-[390px]">

                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 450px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <Gem
                          size={42}
                          strokeWidth={1}
                          className="text-[#b18a45]"
                        />
                      </div>
                    )}

                  </div>

                  {/* Product Details */}
                  <div className="px-2 pb-2 pt-4 sm:px-3 sm:pt-5">

                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[.25em] text-[#b18a45]">
                      Mandal Jewellers
                    </p>

                    <h3 className="font-serif text-xl leading-snug text-[#211c16] sm:text-2xl">
                      {item.name}
                    </h3>

                    {/* Quantity */}
                    <div className="mt-3 flex items-center justify-between border-b border-[#e7dfd3] pb-3">
                      <span className="text-xs text-[#665e54] sm:text-sm">
                        Quantity
                      </span>

                      <span className="text-sm font-semibold text-[#211c16]">
                        {item.qty}
                      </span>
                    </div>

                    {/* Remove Button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from shopping bag`}
                      className="mt-4 flex w-full items-center justify-center gap-2 border border-red-600 bg-transparent px-4 py-3 text-xs font-semibold text-red-600 transition duration-300 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 size={15} strokeWidth={1.7} />
                      Remove Item
                    </button>

                  </div>
                </article>

              ))}

            </div>
          </section>
        )}

        {/* Bottom Brand Section */}
        <div className="mx-auto mt-14 max-w-5xl border-t border-[#d9cbb5] pt-8 text-center sm:mt-16">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#bd914b] sm:w-28" />

            <Gem
              size={28}
              strokeWidth={1.2}
              className="text-[#bd914b]"
            />

            <span className="h-px w-16 bg-[#bd914b] sm:w-28" />
          </div>

          <h2 className="font-serif text-xl italic text-[#211c16] sm:text-2xl">
            Elegance That Lasts Forever
          </h2>

          <p className="mt-3 text-[9px] font-medium uppercase tracking-[.4em] text-[#b18a45] sm:text-xs">
            M A N D A L &nbsp; J E W E L L E R S
          </p>

        </div>

      </div>
    </main>
  );
}
