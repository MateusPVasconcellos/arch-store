import Image from "next/image";
import { useEffect, useState } from "react";
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
        <main className="flex min-h-screen w-full">
          {smartphones.map((smartphone) => (
            <Product
              price={smartphone.price}
              imageUrl={smartphone.thumbnail}
              productName={smartphone.title}
              description={smartphone.description}
              key={smartphone.id}
            />
          ))}
        </main>
      </div>
    )
  );
}
