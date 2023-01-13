import Image from "next/image";

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  description: string;
}

function Product({ imageUrl, productName, price, description }: ProductProps) {
  return (
    <div className="mt-10 ml-12 flex max-h-72 bg-gray-300 hover:bg-gray-500 dark:bg-gray-600">
      <section className="m-4 block max-h-64 w-44 justify-center">
        <div className="relative m-2 block h-40 w-40">
          <Image src={imageUrl} alt="products" fill quality={100} />
        </div>
        <div className="block h-20 justify-end">
          <h1 className="ml-2 text-gray-800 dark:text-white">{productName}</h1>
          <h2 className="ml-2 mt-2 font-bold text-green-600 dark:text-green-300">
            R$ {price}
          </h2>
        </div>
        <h3 className="mt-6 text-gray-800 dark:text-white">{description}</h3>
      </section>
    </div>
  );
}

export default Product;
