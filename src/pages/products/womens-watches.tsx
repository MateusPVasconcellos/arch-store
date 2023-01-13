import Image from "next/image";
import { useEffect, useState } from "react";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import { useApi } from "../../hooks/useApi";
import { IProduct } from "../../interfaces/IProduct";

export default function WomensWatches() {
  const { womensWatches } = useApi();

  return (
    womensWatches && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen w-full">
          {womensWatches.map((womensWatch) => (
            <Product
              price={womensWatch.price}
              imageUrl={womensWatch.thumbnail}
              productName={womensWatch.title}
              description={womensWatch.description}
              key={womensWatch.id}
            />
          ))}
        </main>
      </div>
    )
  );
}
