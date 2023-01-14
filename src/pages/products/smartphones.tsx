import Image from "next/image";
import { useEffect, useState } from "react";
import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import { useApi } from "../../hooks/useApi";
import { IProduct } from "../../interfaces/IProduct";

export default function Smartphones() {
  const { smartphones } = useApi();

  return (
    smartphones && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen w-full justify-center">
          <ul className="inline md:flex">
            {smartphones.map((smartphone) => (
              <li>
                <Product
                  price={smartphone.price}
                  imageUrl={smartphone.thumbnail}
                  productName={smartphone.title}
                  description={smartphone.description}
                  key={smartphone.id}
                  id={smartphone.id}
                />
                <AddItemButton id={smartphone.id} />
              </li>
            ))}
          </ul>
        </main>
      </div>
    )
  );
}
