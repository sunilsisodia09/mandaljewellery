
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import ProductCard from "@/components/product-card";
import { products } from "@/data/products";

const categories = [
  {
    title: "Earrings",
    note: "Little details, big impact",
    image: "ear.jpg",
    href: "/shop?category=Earrings",
  },
  {
    title: "Necklaces",
    note: "Close to your heart",
    image: "neck.jpg",
    href: "/shop?category=Necklaces",
  },
  {
    title: "Rings",
    note: "Made to mean something",
    image: "rn.jpg",
    href: "/shop?category=Rings",
  },
  {
    title: "Bracelets",
    note: "Your everyday signature",
    image: "bar.jpg",
    href: "/shop?category=Bracelets",
  },
];

const customerImages = [
  "ear.jpg",
  "rn.jpg",
  "a.jpg",
];

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="relative min-h-[590px] overflow-hidden bg-[#e8ddd0] sm:min-h-[660px] lg:min-h-[690px]">
        <img
          src="a.jpg"
          alt="Elegant jewellery collection by Mandal Jewellers"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#211a15]/85 via-[#211a15]/45 to-transparent" />

        <div className="container-shell relative flex min-h-[590px] items-center py-16 sm:min-h-[660px] lg:min-h-[690px]">
          <div className="max-w-xl text-white">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.28em] text-[#e9c58e] sm:text-xs">
              <span className="h-px w-9 bg-gold" />
              Jewellery with a soul
            </p>

            <h1 className="font-serif text-[48px] leading-[1.03] sm:text-6xl lg:text-[76px]">
              Made to be
              <br />
              <em className="font-normal text-[#e9c58e]">
                remembered.
              </em>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              Discover thoughtfully crafted pieces that celebrate
              your story, your style, and every moment in between.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[.18em] transition hover:bg-white hover:text-ink"
              >
                Explore jewellery
                <ArrowRight size={15} />
              </Link>

              <a
                href="#collections"
                className="inline-flex items-center gap-2 border border-white/45 px-6 py-4 text-[10px] font-bold uppercase tracking-[.18em] transition hover:bg-white hover:text-ink"
              >
                Our collections
              </a>
            </div>

            {/* CUSTOMER AVATARS */}
            <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-5">
              <div className="flex -space-x-2">
                {customerImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt={`Mandal Jewellers customer ${index + 1}`}
                    className="h-9 w-9 rounded-full border-2 border-[#4c4035] bg-[#d6c3ad] object-cover"
                    loading="lazy"
                  />
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold">
                  Loved, worn, remembered.
                </p>

                <p className="mt-1 text-[10px] text-white/60">
                  Designed for the moments that matter
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] uppercase tracking-[.22em] text-white/70 md:flex">
          <span className="h-px w-12 bg-white/50" />
          Discover your signature
        </div>
      </section>

      {/* COLLECTIONS SECTION */}
      <section
        id="collections"
        className="container-shell py-16 sm:py-20 lg:py-24"
      >
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.25em] text-gold">
              Find your favourite
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
              Shop by collection
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-ink/55">
              The finishing touches that feel unmistakably you.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden items-center gap-2 border-b border-gold pb-2 text-[10px] font-bold uppercase tracking-[.15em] sm:flex"
          >
            View all
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group image-zoom"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <img
                  src={cat.image}
                  alt={`${cat.title} jewellery collection`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-6 sm:left-5">
                  <p className="mb-1 text-[9px] uppercase tracking-[.17em] text-white/70">
                    {cat.note}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-xl sm:text-2xl">
                      {cat.title}
                    </h3>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-ink">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/shop"
          className="mt-6 flex items-center justify-center gap-2 border border-ink/20 py-3 text-[10px] font-bold uppercase tracking-[.17em] sm:hidden"
        >
          Shop all collections
          <ArrowRight size={14} />
        </Link>
      </section>

      {/* BESTSELLERS SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container-shell">
          <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[.25em] text-gold">
                The pieces everyone loves
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
                Our most-loved pieces
              </h2>

              <p className="mt-3 text-sm text-ink/55">
                A little something to make every day special.
              </p>
            </div>

            <Link
              href="/shop"
              className="hidden items-center gap-2 border-b border-gold pb-2 text-[10px] font-bold uppercase tracking-[.15em] sm:flex"
            >
              Shop all
              <ArrowUpRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="gold-outline inline-flex items-center gap-3 px-7 py-4 text-[10px] font-bold uppercase tracking-[.17em]"
            >
              Discover all jewellery
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND STORY & CRAFTSMANSHIP */}
      <section
        id="story"
        className="grid bg-[#eee5d8] md:grid-cols-2"
      >
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[500px]">
          <img
            src="ab.jpg"
            alt="Jewellery details and craftsmanship"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div
          id="craft"
          className="flex items-center px-6 py-14 sm:px-12 sm:py-20 lg:px-20"
        >
          <div className="max-w-lg">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.25em] text-gold">
              The Mandal philosophy
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
              Not just jewellery.
              <br />
              <em className="font-normal">
                A part of your story.
              </em>
            </h2>

            <p className="mt-6 text-sm leading-7 text-ink/65">
              We believe the pieces you wear should mean something.
              Every design begins with a feeling and is shaped with
              an eye for detail—creating keepsakes for your milestones,
              your everyday rituals, and all the beautiful things
              yet to come.
            </p>

            <p className="mt-4 text-sm leading-7 text-ink/65">
              From a gift that says everything to a piece you never
              take off, find something that feels like you.
            </p>

            <Link
              href="/shop"
              className="mt-7 inline-flex items-center gap-3 border-b border-gold pb-2 text-[10px] font-bold uppercase tracking-[.17em]"
            >
              Meet your next favourite
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIAL */}
      <section className="container-shell py-16 text-center sm:py-20">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[.25em] text-gold">
          A note from our community
        </p>

        <div
          className="mb-4 text-2xl tracking-[.2em] text-gold"
          aria-label="5 out of 5 stars"
        >
          ★★★★★
        </div>

        <blockquote className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed sm:text-3xl">
          “The kind of jewellery that makes a simple outfit feel
          special. Beautifully packed, thoughtful details, and pieces
          I reach for every day.”
        </blockquote>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[.18em]">
          — A happy customer
        </p>
      </section>

      {/* COMMUNITY CTA */}
      <section className="bg-[#e9dfd2]">
        <div className="container-shell flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center sm:py-12">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[.2em] text-gold">
              Stay in the loop
            </p>

            <h2 className="font-serif text-2xl sm:text-3xl">
              Good things, delivered occasionally.
            </h2>

            <p className="mt-2 text-sm text-ink/60">
              New drops, thoughtful stories and little treats.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-ink px-6 py-4 text-[10px] font-bold uppercase tracking-[.16em] text-white transition hover:bg-gold"
          >
            Join our community
            <ArrowRight size={15} />
          </a>
        </div>
      </section>
    </main>
  );
}
