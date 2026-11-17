
"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { useSite } from "@/components/site-provider";

type Product = {
  id: number;
  name: string;
  image: string;
  category?: string;
  tag?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useSite();

  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
    });

    setIsAdded(true);

    window.setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <article className="group min-w-0">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f2ec]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Product Tag */}
        {product.tag && (
          <span className="absolute left-3 top-3 bg-[#a58b59] px-3 py-1 text-[9px] font-semibold uppercase tracking-[1.5px] text-white">
            {product.tag}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setIsWishlisted((prev) => !prev)}
          aria-label={
            isWishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#28251f] transition hover:bg-[#a58b59] hover:text-white"
        >
          <Heart
            size={17}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* Add to Cart */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 flex w-full translate-y-full items-center justify-center gap-2 bg-[#24211d] py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-white transition-transform duration-300 group-hover:translate-y-0 max-sm:translate-y-0"
        >
          {isAdded ? (
            <>
              <Check size={15} />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingBag size={15} />
              Add to Cart
            </>
          )}
        </button>
      </div>

      {/* Product Details */}
      <div className="px-1 py-4 text-center">
        {product.category && (
          <p className="mb-2 text-[9px] font-medium uppercase tracking-[2px] text-[#a58b59]">
            {product.category}
          </p>
        )}

        <h3 className="font-serif text-base text-[#29251f] sm:text-lg">
          {product.name}
        </h3>
      </div>
    </article>
  );
}
