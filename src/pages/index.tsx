import Image from "next/image";
import Category from "../components/Category";
import { useApi } from "../hooks/useApi";
import { capitalizeFirstLetter } from "../utils/capitalizeWords";
import { getCategoryName } from "../utils/getCategoryName";

export default function Home() {
  const { categories, getImageForCategory } = useApi();

  return (
    <div className="mx-auto inline-block w-full justify-center text-base">
      <main>
        <div className="flex items-center justify-center">
          <Image
            src="https://themewagon.github.io/cozastore/images/slide-02.jpg"
            alt="ArcH-Store Home"
            width={1000}
            height={1}
            quality={100}
            className="w-full"
          />
          <div className="absolute left-2 md:left-12">
            <h1 className="font-mono text-lg font-bold text-gray-700 md:mb-6 md:text-5xl">
              ArcH Store
            </h1>
            <h1 className="mt-1 mb-2 w-40 break-words font-mono text-base font-bold text-gray-700 md:mb-6 md:w-full md:text-xl">
              New Season: Developer Stuff
            </h1>
            <h2 className="w-40 break-words font-mono text-sm font-bold text-gray-700 md:w-full md:text-2xl">
              Technology and Accessories
            </h2>
          </div>
        </div>
        <ul className="flex justify-evenly md:ml-0">
          {categories.length &&
            categories.map((category) => (
              <li className="flex w-16 justify-evenly pt-10 md:flex md:h-96 md:w-11/12">
                <Category
                  href={`/products/${getCategoryName(category)}`}
                  imageUrl={getImageForCategory(category) as string}
                  categoryName={capitalizeFirstLetter(category.toString())}
                  key={category}
                ></Category>
              </li>
            ))}
        </ul>
      </main>
    </div>
  );
}
