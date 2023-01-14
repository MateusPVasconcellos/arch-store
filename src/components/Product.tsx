import Image from "next/image";

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  description: string;
}

function Product({ imageUrl, productName, price, description }: ProductProps) {
  return (
    <div
      className="mt-10 ml-28 flex max-h-72 rounded bg-gray-300 hover:bg-gray-400
     dark:bg-gray-600 dark:hover:bg-gray-800 md:ml-12"
    >
      <section className="m-4 block max-h-64 w-44 justify-center">
        <div className="relative m-2 block h-32 w-40 md:h-40">
          <Image src={imageUrl} alt="products" fill quality={100} />
        </div>
        <div className="block h-10 justify-end md:h-20">
          <h1 className="ml-2 text-xs text-gray-800 dark:text-white md:text-base">
            {productName}
          </h1>
          <h2 className="ml-2 text-sm font-bold text-green-600 dark:text-green-300 md:mt-2 md:text-base">
            US$ {price}
          </h2>
        </div>
        <h3 className="mt-2 text-xs text-gray-800 dark:text-white md:mt-6 md:text-base">
          {description}
        </h3>
      </section>
    </div>
  );
}

export default Product;
