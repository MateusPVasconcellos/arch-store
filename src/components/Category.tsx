import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CategoryProps {
  imageUrl: string;
  categoryName: string;
  href: string;
}

function Category({
  imageUrl,
  categoryName,
  href,
}: CategoryProps): JSX.Element {
  return (
    <Link
      href={href}
      className="block rounded bg-gray-300 p-1 hover:bg-gray-400
       dark:bg-gray-600 dark:hover:bg-gray-800 md:h-fit md:p-3"
    >
      <div className="relative flex h-14 w-16 md:h-48 md:w-48">
        <Image src={imageUrl} alt="categorys" fill quality={100} />
      </div>
      <div className="mt-2 ml-2">
        <h1
          className="mt-2 flex text-[10px] leading-3 text-gray-800
         dark:text-white md:mt-4 md:inline md:w-8 md:text-base"
        >
          {categoryName}
        </h1>
      </div>
    </Link>
  );
}

export default Category;
