import Image from "next/image";
import { useEffect, useState } from "react";
import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import { useApi } from "../../hooks/useApi";
import { IProduct } from "../../interfaces/IProduct";

export default function Laptops() {
  const { laptops } = useApi();

  return (
    laptops && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {laptops.map((laptop) => (
              <li>
                <Product
                  price={laptop.price}
                  imageUrl={laptop.thumbnail}
                  productName={laptop.title}
                  description={laptop.description}
                  key={laptop.id}
                  id={laptop.id}
                />
                <AddItemButton id={laptop.id} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    )
  );
}
