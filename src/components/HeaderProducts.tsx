import Link from "next/link";

interface HeaderProductsProps {
  categorys: string;
}

function HeaderProducts() {
  return (
    <header className="mt-10 h-14 w-full bg-transparent">
      <nav className="flex h-full w-full items-center">
        <Link
          className="flex h-full w-full items-center justify-center text-gray-800 dark:text-white"
          href={"/products/mens-watches"}
        >
          Mens Watches
        </Link>
        <Link
          className="flex h-full w-full items-center justify-center text-gray-800 dark:text-white"
          href={"/products/womens-watches"}
        >
          Womens Watches
        </Link>
        <Link
          className="flex h-full w-full items-center justify-center text-gray-800 dark:text-white"
          href={"/products/laptops"}
        >
          Laptops
        </Link>
        <Link
          className="flex h-full w-full items-center justify-center text-gray-800 dark:text-white"
          href={"/products/smartphones"}
        >
          Smartphones
        </Link>
      </nav>
      <hr className="w-full border-gray-500"></hr>
    </header>
  );
}

export default HeaderProducts;
