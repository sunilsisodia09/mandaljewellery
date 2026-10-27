"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type CartItem = { id: number; name: string; price: number; image: string; qty: number };
type SiteContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: number) => void;
  cartCount: number;
};
const SiteContext = createContext<SiteContextType | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  useEffect(() => {
    try { const saved = localStorage.getItem("mandal-cart"); if (saved) setCart(JSON.parse(saved)); } catch {}
  }, []);
  useEffect(() => { try { localStorage.setItem("mandal-cart", JSON.stringify(cart)); } catch {} }, [cart]);
  const value = useMemo(() => ({
    cart,
    addToCart: (item: Omit<CartItem, "qty">) => setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      return found ? prev.map(p => p.id === item.id ? { ...p, qty: p.qty + 1 } : p) : [...prev, { ...item, qty: 1 }];
    }),
    removeFromCart: (id: number) => setCart(prev => prev.filter(p => p.id !== id)),
    cartCount: cart.reduce((sum, item) => sum + item.qty, 0)
  }), [cart]);
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error("useSite must be used within SiteProvider");
  return context;
}
