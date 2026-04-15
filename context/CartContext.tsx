import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export interface CartItem {
  id: number | string;
  name: string;
  price: number;
  qty: number;
}

interface CartContextType {
  cart: CartItem[];
  total: number;
  increase: (id: number | string) => void;
  decrease: (id: number | string) => void;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  total: 0,
  increase: () => {},
  decrease: () => {},
  addToCart: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const increase = (id: number | string) => {
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decrease = (id: number | string) => {
    setCart(prev =>
      prev.map(item => (item.id === id ? { ...item, qty: Math.max(1, item.qty - 1) } : item))
    );
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const exist = prev.find(i => i.id === item.id);
      if (exist) {
        return prev.map(i => (i.id === item.id ? { ...i, qty: i.qty + item.qty } : i));
      }
      return [...prev, item];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, total, increase, decrease, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
