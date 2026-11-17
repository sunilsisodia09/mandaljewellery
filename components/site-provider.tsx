"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  image: string;
  qty: number;
};

type SiteContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  cartCount: number;
};

const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("mandal-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          const cleanedCart: CartItem[] = parsedCart.map((item) => ({
            id: Number(item.id),
            name: String(item.name),
            image: String(item.image),
            qty: Math.max(1, Number(item.qty) || 1),
          }));

          setCart(cleanedCart);
        }
      }
    } catch (error) {
      console.error("Cart loading error:", error);
      setCart([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem("mandal-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Cart saving error:", error);
    }
  }, [cart, isLoaded]);

  const addToCart = (item: Omit<CartItem, "qty">) => {
    setCart((prev) => {
      const existing = prev.find((product) => product.id === item.id);

      if (existing) {
        return prev.map((product) =>
          product.id === item.id
            ? { ...product, qty: product.qty + 1 }
            : product
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, qty: product.qty + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((product) =>
          product.id === id
            ? { ...product, qty: product.qty - 1 }
            : product
        )
        .filter((product) => product.qty > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, product) => total + product.qty,
    0
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      cartCount,
    }),
    [cart, cartCount]
  );

  return (
    <SiteContext.Provider value={value}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  const context = useContext(SiteContext);

  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }

  return context;
}
