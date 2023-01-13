import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  imageUrl: string;
  categoryName: string;
}

function Category({ imageUrl, categoryName }: CategoryProps) {
  return (
    <Link href={"/"} className="block h-fit border p-3 hover:bg-gray-800">
      <div className="relative flex h-48 w-40">
        <Image src={imageUrl} alt="categorys" fill quality={100}></Image>
      </div>
      <h1 className="mt-4 h-12 w-8 text-white">{categoryName}</h1>
    </Link>
  );
}

export default Category;
