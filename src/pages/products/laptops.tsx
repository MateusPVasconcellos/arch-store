import AddItemButton from "../../components/AddItemButton";
import HeaderProducts from "../../components/HeaderProducts";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import { useApi } from "../../hooks/useApi";

export default function Laptops(): JSX.Element | undefined {
  const { laptops, isLoadingLaptops } = useApi();

  return (
    laptops && (
      <div className="w-full justify-center text-base">
        <HeaderProducts />
        <div className="flex items-start justify-center">
          <main className="flex min-h-screen w-full justify-center">
            <ul
              className="flex w-full flex-wrap md:ml-20 md:flex md:h-[450px]
             md:max-h-[600px] lg:justify-evenly xl:justify-start"
            >
              {isLoadingLaptops ? (
                <div className="fixed top-64 md:fixed md:top-[30%]">
                  <Spinner />
                </div>
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
                    <AddItemButton id={laptop.id} category={laptop.category} />
                  </li>
                ))
              )}
            </ul>
          </main>
        </div>
      </div>
    )
  );
}
