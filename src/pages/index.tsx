import Image from "next/image";
import { useEffect, useState } from "react";
import Category from "../components/Category";
import { useApi } from "../hooks/useApi";

export default function Home() {
  const { categories, getImageForCategory } = useApi();

  return (
    <div className="mx-auto inline-block w-full justify-center text-base">
      <main>
        <div className="flex items-center justify-center pt-10">
          <Image
            src="https://themewagon.github.io/cozastore/images/slide-02.jpg"
            alt="ArcH-Store Home"
            width={2000}
            height={1}
            quality={100}
            className="w-full"
          />
          <div className="absolute left-12">
            <h1 className="mb-6 font-mono text-xl font-bold text-gray-700">
              New Season: Developer Stuff
            </h1>
            <h2 className="font-mono text-2xl font-bold text-gray-700">
              Technologies and Accessories
            </h2>
          </div>
        </div>
        <div className="flex">
          {categories.length &&
            categories.map((category) => (
              <div
                className="flex h-96 w-11/12 justify-evenly pt-10"
                key={category.id}
              >
                <Category
                  href={`/products/${category}`}
                  imageUrl={getImageForCategory(category) as string}
                  categoryName={category.toString()}
                ></Category>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
