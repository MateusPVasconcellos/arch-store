import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import { useApi } from "../../hooks/useApi";
import { IProduct } from "../../interfaces/IProduct";

export default function MansWatches() {
  const { mensWatches } = useApi();

  return (
    mensWatches && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen w-full">
          {mensWatches.map((mensWatch) => (
            <Product
              price={mensWatch.price}
              imageUrl={mensWatch.thumbnail}
              productName={mensWatch.title}
              description={mensWatch.description}
              key={mensWatch.id}
            />
          ))}
        </main>
      </div>
    )
  );
}
