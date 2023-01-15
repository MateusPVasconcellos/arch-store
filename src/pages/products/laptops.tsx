import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { useApi } from "../../hooks/useApi";

export default function Laptops(): JSX.Element | undefined {
  const { laptops, isLoadingLaptops } = useApi();

  return (
    laptops && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {isLoadingLaptops ? (
              <Spinner />
            ) : (
              laptops?.map((laptop) => (
                <li>
                  <Product
                    price={laptop.price}
                    imageUrl={laptop.thumbnail}
                    productName={laptop.title}
                    description={laptop.description}
                    key={laptop.id}
                    id={laptop.id}
                  />
                  <AddItemButton id={laptop.id} />
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
    )
  );
}
