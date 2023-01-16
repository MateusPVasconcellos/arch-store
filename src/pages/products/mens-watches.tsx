import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { useApi } from "../../hooks/useApi";
import { IProduct } from "../../interfaces/IProduct";

export default function MansWatches(): JSX.Element | undefined {
  const { mensWatches, isLoadingMensWatches } = useApi();

  return (
    mensWatches && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen w-full justify-center">
          <ul
            className="flex w-full flex-wrap justify-center md:ml-6 md:flex
             md:h-[450px] md:max-h-[600px] lg:justify-evenly xl:justify-start"
          >
            {isLoadingMensWatches ? (
              <div className="fixed top-64 md:fixed md:top-[30%]">
                <Spinner />
              </div>
            ) : (
              mensWatches.map((mensWatch) => (
                <li>
                  <Product
                    price={mensWatch.price}
                    imageUrl={mensWatch.thumbnail}
                    productName={mensWatch.title}
                    description={mensWatch.description}
                    key={mensWatch.id}
                    id={mensWatch.id}
                  />
                  <AddItemButton
                    id={mensWatch.id}
                    category={mensWatch.category}
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
