import { useEffect, useState } from "react";
import api from "../services/api";
import useLocalStorage from "./useLocalStorage";

interface ICartItem {
  id: number;
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [detailCartItems, setDetailCartItems] = useState<any>([]);
  const [isLoadingCart, setIsLoadingCart] = useState<boolean>(false);

  function increaseItem(id: number) {
    setCartItems((currentItems: any) => {
      if (currentItems.find((item: any) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item: any) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            console.log(item);
            return item;
          }
        });
      }
    });
  }

  function decreaseItem(itemId: number) {
    setCartItems((currentItems: any[]) => {
      if (
        currentItems.find((item: any) => item.id === itemId)?.quantity === 1
      ) {
        return currentItems.filter((item: any) => item.id !== itemId);
      } else {
        return currentItems.map((item: any) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  const getCartItemsDetails = async (itensId: number[]): Promise<void> => {
    try {
      setIsLoadingCart(true);
      itensId.forEach(async (el) => {
        let item = await api.get(`products/${el}`);
        setDetailCartItems((prev: any) => [...prev, item]);
      });
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingCart(false);
    }
  };

  return {
    decreaseItem,
    increaseItem,
    detailCartItems,
    cartItems,
  };
};
