import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { useApi } from "../../hooks/useApi";

export default function WomensWatches(): JSX.Element | undefined {
  const { womensWatches, isLoadingWomensWatches } = useApi();

  return (
    womensWatches && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {isLoadingWomensWatches ? (
              <div className="fixed top-64 md:fixed md:top-[30%]">
                <Spinner />
              </div>
            ) : (
              womensWatches.map((womensWatch) => (
                <li>
                  <Product
                    price={womensWatch.price}
                    imageUrl={womensWatch.thumbnail}
                    productName={womensWatch.title}
                    description={womensWatch.description}
                    key={womensWatch.id}
                    id={womensWatch.id}
                  />
                  <AddItemButton id={womensWatch.id} />
                </li>
              ))
            )}
          </ul>
        </main>
      </div>
    )
  );
}
