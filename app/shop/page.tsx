"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/product-card";
import { products } from "@/data/products";
import { SlidersHorizontal } from "lucide-react";

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [mobileFilter, setMobileFilter] = useState(false);

  const categories = [
    "All",
    "Earrings",
    "Necklaces",
    "Rings",
    "Bracelets",
  ];

  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("category");

    if (value && categories.includes(value)) {
      setCategory(value);
    }
  }, []);

  const visible = useMemo(() => {
    let items =
      category === "All"
        ? [...products]
        : products.filter((p) => p.category === category);

    if (sort === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    }

    return items;
  }, [category, sort]);

  return (
    <main className="min-h-[65vh] w-full overflow-hidden bg-[#faf9f6]">

      {/* Shop Hero */}
      <section className="bg-[#eee5d8] px-4 py-12 text-center sm:py-16 md:py-20">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.25em] text-gold">
          Find your forever piece
        </p>

        <h1 className="font-serif text-4xl text-ink sm:text-5xl md:text-6xl">
          The jewellery edit
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink/60 sm:text-base">
          Explore timeless essentials, thoughtful gifts and statement
          pieces made to be part of your story.
        </p>
      </section>

      {/* Shop Products */}
      <section className="container-shell py-10 sm:py-14">

        {/* Toolbar */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-ink/10 pb-5">

          <p className="text-xs text-ink/55">
            <span className="font-semibold text-ink">
              {visible.length} pieces
            </span>{" "}
            to fall in love with
          </p>

          <div className="flex items-center gap-3">

            {/* Mobile Filter Button */}
            <button
              type="button"
              onClick={() => setMobileFilter(!mobileFilter)}
              aria-expanded={mobileFilter}
              className="flex items-center gap-2 border border-ink/15 px-3 py-2 text-[10px] font-bold uppercase tracking-widest transition hover:border-gold hover:text-gold sm:hidden"
            >
              <SlidersHorizontal size={14} />
              Filter
            </button>

            {/* Sorting */}
            <label className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest">
              Sort

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="max-w-[150px] cursor-pointer bg-transparent py-2 text-xs normal-case tracking-normal outline-none"
              >
                <option value="featured">Featured</option>
                <option value="name">Name A–Z</option>
              </select>
            </label>

          </div>
        </div>

        {/* Category Filters */}
        <div
          className={`${
            mobileFilter ? "block" : "hidden"
          } mb-6 border border-ink/10 p-4 sm:block sm:border-0 sm:p-0`}
        >
          <div className="flex flex-wrap gap-2">

            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setMobileFilter(false);
                }}
                className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[.12em] transition ${
                  category === c
                    ? "border-ink bg-ink text-white"
                    : "border-ink/15 hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}

          </div>
        </div>

        {/* Product Grid */}
        {visible.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">

            {visible.map((p) => (
              <div id={`product-${p.id}`} key={p.id} className="min-w-0">
                <ProductCard product={p} />
              </div>
            ))}

          </div>
        ) : (
          <p className="py-20 text-center text-sm text-ink/60">
            No pieces found in this collection yet.
          </p>
        )}

      </section>
    </main>
  );
}