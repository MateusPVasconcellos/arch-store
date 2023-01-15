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
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {isLoadingMensWatches ? (
              <Spinner />
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
                  <AddItemButton id={mensWatch.id} />
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
    )
  );
}
