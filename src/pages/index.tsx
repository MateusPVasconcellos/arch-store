import Image from "next/image";
import { useEffect, useState } from "react";
import Category from "../components/Category";
import Api from "../services/api";

export default function Home() {
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
              New Session: Developer Stuff
            </h1>
            <h2 className="font-mono text-xl font-bold text-gray-700">
              Tecnologia e Acessórios
            </h2>
          </div>
        </div>
        <div className="flex h-96 w-11/12 justify-evenly pt-10">
          <Category
            imageUrl="https://m.media-amazon.com/images/I/51ZL3TV7D1L._SX360_BO1,204,203,200_.jpg"
            categoryName="Books"
          ></Category>
        </div>
      </main>
    </div>
  );
}
