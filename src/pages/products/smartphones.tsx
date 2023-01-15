import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { useApi } from "../../hooks/useApi";

export default function Smartphones(): JSX.Element | undefined {
  const { smartphones, isLoadingSmartphones } = useApi();

  return (
    smartphones && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {isLoadingSmartphones ? (
              <Spinner />
            ) : (
              smartphones.map((smartphone) => (
                <li>
                  <Product
                    price={smartphone.price}
                    imageUrl={smartphone.thumbnail}
                    productName={smartphone.title}
                    description={smartphone.description}
                    key={smartphone.id}
                    id={smartphone.id}
                  />
                  <AddItemButton id={smartphone.id} />
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
    )
  );
}
