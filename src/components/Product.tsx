import Image from "next/image";
import { useCart } from "../hooks/useCart";

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  description: string;
  id: number;
}

function Product({
  imageUrl,
  productName,
  price,
  description,
  id,
}: ProductProps): JSX.Element {
  return (
    <div
      className="mx-5 mt-5 flex  rounded bg-gray-300 hover:bg-gray-400 dark:bg-gray-600
     dark:hover:bg-gray-800 md:h-[450px] md:max-h-[600px] lg:ml-6"
    >
      <section className="mx-2 block w-44 justify-center">
        <div className="relative m-2 block h-32 w-40 md:h-40">
          <Image src={imageUrl} alt="products" fill quality={100} />
        </div>
        <div>
          <h1 className="ml-2 text-xs text-gray-800 dark:text-white md:text-base">
            {productName}
          </h1>
          <h2 className="ml-2 text-sm font-bold text-green-600 dark:text-green-300 md:text-base">
            US$ {price}
          </h2>
          <h3 className="mt-2 text-xs text-gray-800 dark:text-white md:text-base">
            {description}
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Product;
