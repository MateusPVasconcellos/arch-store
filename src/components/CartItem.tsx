import React from "react";
import Image from "next/image";

interface CartItemProps {
  imageUrl: string;
  productName: string;
  price: number;
  quantity: number;
}

function CartItem({ imageUrl, productName, price, quantity }: CartItemProps) {
  return (
    <div
      className="mt-4 ml-3 flex h-24 w-44 rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600
     dark:hover:bg-gray-800 md:ml-6 md:h-36 md:w-56"
    >
      <div className="md:h-38 relative m-2 block h-16 w-20">
        <Image src={imageUrl} alt="products" quality={100} fill />
      </div>
      <div className="block h-10 justify-end md:h-20">
        <h1 className="ml-2 mr-1 mt-1 text-xs text-gray-800 dark:text-white md:text-[14px]">
          {productName}
        </h1>
        <h2 className="ml-2 text-xs font-bold text-green-600 dark:text-green-300 md:mt-2">
          US$ {price}
        </h2>
        <h3 className="ml-2 text-xs text-gray-800 dark:text-white md:mt-2 md:text-[14px]">
          quantity: {quantity}
        </h3>
      </div>
    </div>
  );
}

export default CartItem;
