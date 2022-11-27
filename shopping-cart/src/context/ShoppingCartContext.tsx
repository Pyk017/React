import { useState, createContext, useContext, ReactNode } from "react";
import ShoppingCartSideBar from "../components/ShoppingCartSidebar";
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
  isItemFavourite: boolean;
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
  getItemFavouritism: (id: number) => boolean;
  setItemFavouritism: (item: StoreItemProps) => void;
  emptyCart: () => void;
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

  const cartQuantity =
    cartItems.length > 0
      ? cartItems?.reduce(
          (prevCount: number, item: ItemType) => item.quantity + prevCount,
          0
        )
      : 0;

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
        return [
          ...currentItems,
          {
            ...item,
            quantity: 1,
            isItemFavourite: false,
            rating: item.rating.rate,
          },
        ];
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems: ItemType[]) => {
      let foundItem = currentItems.find((item: ItemType) => item.id === id);

      if (foundItem?.quantity !== 1) {
        return currentItems.map((__item: ItemType) =>
          __item.id === id
            ? { ...__item, quantity: __item.quantity - 1 }
            : __item
        );
      } else if (foundItem?.quantity === 1 && foundItem?.isItemFavourite) {
        return currentItems.map((__item: ItemType) =>
          __item.id === id ? { ...__item, quantity: 0 } : __item
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

  const getItemFavouritism = (id: number) => {
    return (
      cartItems.find((item: ItemType) => item.id === id)?.isItemFavourite ||
      false
    );
  };

  const setItemFavouritism = (item: StoreItemProps) => {
    setCartItems((currentItems: ItemType[]) => {
      if (currentItems.length > 0) {
        let foundItem = currentItems.find((i: ItemType) => i.id === item.id);

        if (foundItem?.quantity === 0 && foundItem?.isItemFavourite) {
          return currentItems.filter((_i: ItemType) => _i.id !== item.id);
        } else {
          return currentItems.map((_i: ItemType) =>
            item.id === _i.id
              ? { ..._i, isItemFavourite: !_i.isItemFavourite }
              : _i
          );
        }
      } else {
        return [
          ...currentItems,
          {
            ...item,
            isItemFavourite: true,
            quantity: 0,
            rating: item.rating.rate,
          },
        ];
      }
    });
  };

  const emptyCart = () => setCartItems([]);

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
          getItemFavouritism,
          setItemFavouritism,
          emptyCart,
        } as ShoppingCartContextType
      }
    >
      {children}
      <ShoppingCartSideBar isCartOpen={isCartOpen} />
    </shoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;
