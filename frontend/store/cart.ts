import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type CartItem = {
  id: string | number;
  name: string;
  img: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">, qty?: number) => void;
  removeItem: (id: string | number) => void;
  clear: () => void;
  increment: (id: string | number) => void;
  decrement: (id: string | number) => void;
  toggleCart: (open?: boolean) => void;
};

export const useCartStore = create<CartState>()(persist((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (item, qty = 1) => {
    const existing = get().items.find((i) => i.id === item.id);
    if (existing) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + qty } : i
        ),
      });
    } else {
      set({ items: [...get().items, { ...item, quantity: qty }] });
    }
  },
  removeItem: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
  clear: () => set({ items: [] }),
  increment: (id) =>
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    }),
  decrement: (id) =>
    set({
      items: get().items
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0),
    }),
  toggleCart: (open) =>
    set((state) => ({ isOpen: typeof open === "boolean" ? open : !state.isOpen })),
}), {
  name: "cart-store",
  storage: createJSONStorage(() => (typeof window !== 'undefined' ? window.localStorage : undefined as any)),
}));

export const selectCount = (s: CartState) =>
  s.items.reduce((acc, i) => acc + i.quantity, 0);

export const selectTotal = (s: CartState) =>
  s.items.reduce((acc, i) => acc + i.price * i.quantity, 0);

export type { CartItem };


