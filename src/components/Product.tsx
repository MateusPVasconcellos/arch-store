import Image from "next/image";

interface ProductProps {
  imageUrl: string;
  productName: string;
  price: number;
  description: string;
}

function Product({ imageUrl, productName, price, description }: ProductProps) {
  return (
    <div className="mt-10 ml-10 flex max-h-72 hover:bg-gray-800">
      <section className="m-4 block max-h-64 w-44 justify-center border">
        <div className="relative m-2 block h-40 w-40">
          <Image src={imageUrl} alt="products" fill quality={100} />
        </div>
        <div className="block h-20 justify-end">
          <h1 className="ml-2 text-white">{productName}</h1>
          <h2 className="ml-2 mt-2 text-green-500">R$ {price}</h2>
        </div>
      </section>
    </div>
  );
}

export default Product;
