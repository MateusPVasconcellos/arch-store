import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import { useApi } from "../../hooks/useApi";

export default function WomensWatches() {
  const { womensWatches } = useApi();

  return (
    womensWatches && (
      <div className="mx-auto w-full justify-center text-base">
        <HeaderProducts />
        <main className="flex min-h-screen justify-center md:w-full">
          <ul className="inline md:flex md:w-full md:justify-evenly">
            {womensWatches.map((womensWatch) => (
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
            ))}
          </ul>
        </main>
      </div>
    )
  );
}
