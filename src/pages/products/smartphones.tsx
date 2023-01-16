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
        <main className="flex min-h-screen w-full justify-center">
          <ul className="flex w-2/4 flex-wrap justify-center md:flex md:h-[450px] md:max-h-[600px] md:w-full">
            {isLoadingSmartphones ? (
              <div className="fixed top-64 md:fixed md:top-[30%]">
                <Spinner />
              </div>
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
                  <AddItemButton
                    id={smartphone.id}
                    category={smartphone.category}
                  />
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
    )
  );
}
