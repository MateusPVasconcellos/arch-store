import { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import api from "../services/api";
import { useRouter } from "next/router";
import { ImagesEnum } from "../enums/images";

export const useApi = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const router = useRouter();
  const path = router.pathname;
  const [productsCategory, setProductsCategory] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState({
    loadingCategories: false,
    loadingProducts: false,
  });

  useEffect(() => {
    if (path === "/") {
      getAllCategories();
    }
  }, []);

  const getAllCategories = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get("products/categories");
      const filter1 = "smartphones";
      const filter2 = "laptops";
      const filter3 = "mens-watches";
      const filter4 = "womens-watches";

      const filters = [filter1, filter2, filter3, filter4];

      const formatedData = data?.filter((el: any) => {
        return filters.includes(el.toString());
      });

      const finalData = formatedData.map((el: string) => {
        return el.replace("-", " ");
      });

      if (finalData) {
        setCategories(finalData);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  const getImageForCategory = (category: string) => {
    if (category === "mens watches")
      return "https://i.dummyjson.com/data/products/61/thumbnail.jpg";
    if (category === "womens watches")
      return "https://i.dummyjson.com/data/products/68/thumbnail.webp";
    if (category === "laptops")
      return "https://i.dummyjson.com/data/products/10/2.jpg";
    if (category === "smartphones")
      return "https://i.dummyjson.com/data/products/4/2.jpg";
  };

  const getAllProductsCategory = async (product: string) => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get(`products/category/${product}`);
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  return { categories, getAllProductsCategory, getImageForCategory };
};
