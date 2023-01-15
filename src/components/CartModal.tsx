import { useCallback, useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import CartItem from "./CartItem";

function CartModal({}) {
  const { closeCart, itemsDetails, clearAll } = useCart();

  return (
    <div
      className="modal fixed top-0 right-0 z-20 hidden h-full w-52
        overflow-y-scroll border border-gray-700 bg-gray-200 dark:bg-gray-400 md:w-72"
    >
      <div className="flex">
        <button className="close-modal top-0" onClick={closeCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="ml-1 mt-1 h-6 w-6 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <div className="ml-6 mt-2 flex w-full justify-around font-bold">
          <h1>YOUR CART</h1>
          <button onClick={clearAll} title="Clear all products.">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-full">
        <ul>
          {itemsDetails &&
            itemsDetails.map((item: any) => (
              <li>
                <CartItem
                  imageUrl={item.thumbnail}
                  productName={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  key={item.id}
                  id={item.id}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default CartModal;
