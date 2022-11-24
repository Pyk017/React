import { useState, createContext, useContext, ReactNode } from "react";
import { StoreItemProps } from "../components/StoreItem";
import useLocalStorage from "../hooks/useLocalStorage";

export type ItemType = {
  id: number;
  image: string;
  price: number;
  rating: number;
  description: string;
  title: string;
  quantity: number;
};

export type ShoppingCartContextType = {
  cartItems: ItemType[];
  cartQuantity: number;
  isCartOpen: boolean;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (item: StoreItemProps) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const shoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingContext() {
  return useContext(shoppingCartContext);
}

const ShoppingCartContextProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage<ItemType[]>(
    "SHOPPING_CART",
    []
  );

  const cartQuantity = cartItems.reduce(
    (prevCount: number, item: ItemType) => item.quantity + prevCount,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item: ItemType) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (item: StoreItemProps) => {
    setCartItems((currentItems: ItemType[]) => {
      let _item = currentItems.find((_it: ItemType) => _it.id === item.id);
      if (_item) {
        return currentItems.map((__item: ItemType) =>
          __item.id === item.id
            ? { ...__item, quantity: __item.quantity + 1 }
            : __item
        );
      } else {
        return [...currentItems, { ...item, quantity: 1 }];
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems: ItemType[]) => {
      let quantity = currentItems.find(
        (item: ItemType) => item.id === id
      )?.quantity;
      if (quantity !== 1) {
        return currentItems.map((__item: ItemType) =>
          __item.id === id
            ? { ...__item, quantity: __item.quantity - 1 }
            : __item
        );
      } else {
        return currentItems.filter((__it: ItemType) => __it.id !== id);
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems: ItemType[]) =>
      currentItems.filter((item: ItemType) => item.id !== id)
    );
  };

  return (
    <shoppingCartContext.Provider
      value={
        {
          cartQuantity,
          cartItems,
          isCartOpen,
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          openCart,
          closeCart,
        } as ShoppingCartContextType
      }
    >
      {children}
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
