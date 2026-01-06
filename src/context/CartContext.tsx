import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

{/* Contexto para el carrito de compras y lista de deseos */}
interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image?: string;
  platform?: string;
}
{/* Tipo para el contexto del carrito */}
interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

{/* Proveedor del contexto del carrito */}
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };
  {/* Función para eliminar un item del carrito */}
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  {/* Función para agregar un item a la lista de deseos */}
  const addToWishlist = (id: string) => {
    setWishlist((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };
  {/* Función para eliminar un item de la lista de deseos */}
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((itemId) => itemId !== id));
  };
  {/* Función para verificar si un item está en la lista de deseos */}
  const isInWishlist = (id: string) => {
    return wishlist.includes(id);
  };
  {/* Función para limpiar el carrito */}
  const clearCart = () => {
    setCart([]);
  };
  {/* Función para obtener el total del carrito */}
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  {/* Retorno del proveedor del contexto */}
  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
{/* Hook personalizado para usar el contexto del carrito */}
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
