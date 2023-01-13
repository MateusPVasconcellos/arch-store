import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  imageUrl: string;
  categoryName: string;
  href: string;
}

function Category({ imageUrl, categoryName, href }: CategoryProps) {
  return (
    <Link
      href={href}
      className="block h-fit rounded bg-gray-300 p-3 hover:bg-gray-400 dark:bg-gray-600  dark:hover:bg-gray-800"
    >
      <div className="relative flex h-48 w-48">
        <Image src={imageUrl} alt="categorys" fill quality={100} />
      </div>
      <h1 className="mt-4 h-12 w-8 text-gray-800 dark:text-white">
        {categoryName}
      </h1>
    </Link>
  );
}

export default Category;
