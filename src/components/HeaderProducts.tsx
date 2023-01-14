import Link from "next/link";

function HeaderProducts() {
  return (
    <header className="h-8 w-full bg-transparent md:mt-10 md:h-14">
      <nav className="flex h-full w-full items-center">
        <Link
          className="flex h-full w-11/12 
           items-center justify-center whitespace-nowrap text-xs text-gray-800 dark:text-white md:text-base"
          href={"/products/mens-watches"}
        >
          Mens Watches
        </Link>
        <Link
          className="flex h-full w-full
           items-center justify-center whitespace-nowrap text-xs text-gray-800 dark:text-white md:text-base"
          href={"/products/womens-watches"}
        >
          Womens Watches
        </Link>
        <Link
          className="flex h-full w-full items-center justify-center
           text-xs text-gray-800 dark:text-white md:text-base"
          href={"/products/laptops"}
        >
          Laptops
        </Link>
        <Link
          className="flex h-full w-full items-center
           justify-center text-xs text-gray-800 dark:text-white md:text-base"
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
