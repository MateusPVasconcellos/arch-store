import { createContext, ReactNode, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import api from "../services/api";

export interface CartContextProps {
  getCartItemsDetails: (any: [], category: string) => any;
  decreaseOneItem: (itemId: number) => void;
  addOneMoreItem: (id: number, category: string) => void;
  cartItems: never[];
  itemsDetails: any[];
  clearAll: () => void;
  openCart: () => void;
  closeCart: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({
  children,
}: CartContextProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [itemsDetails, setItemsDetails] = useState<any>([]);
  const [isLoadingCart, setIsLoadingCart] = useState<boolean>(false);

  useEffect(() => {
    getCartItemsDetails(cartItems);
  }, [cartItems]);

  function addOneMoreItem(id: number, category: string) {
    setCartItems((currentItems: any) => {
      if (currentItems.find((item: any) => item.id === id) == null) {
        openCart();
        return [...currentItems, { id, quantity: 1, category }];
      } else {
        openCart();
        return currentItems.map((item: any) => {
          if (item.id === id) {
            openCart();
            return { ...item, quantity: item.quantity + 1, category };
          } else {
            console.log(item);
            return item;
          }
        });
      }
    });
  }

  function decreaseOneItem(id: number) {
    setCartItems((currentItems: any) => {
      if (currentItems.find((item: any) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item: any) => item.id !== id);
      } else {
        return currentItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const getCartItemsDetails = async (itens: any[]) => {
    try {
      setIsLoadingCart(true);
      const data = await Promise.all(
        itens.map(async (item) => {
          const response = await api.get(`${item.category}/${item.id}`);
          return { ...response, quantity: item.quantity };
        })
      );
      setItemsDetails(data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingCart(false);
    }
  };

  const openCart = () => {
    const modal = document.querySelector(".modal");
    modal?.classList.remove("hidden");
  };

  const closeCart = () => {
    const modal = document.querySelector(".modal");
    modal?.classList.add("hidden");
  };

  const clearAll = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        getCartItemsDetails,
        decreaseOneItem,
        addOneMoreItem,
        cartItems,
        itemsDetails,
        clearAll,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
