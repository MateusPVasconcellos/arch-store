import { useEffect, useState } from "react";
import { Product } from "../interfaces/product";
import api from "../services/api";

export const useApi = () => {
  const [categories, setCategories] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState({
    loadingCategories: false,
    loadingProducts: false,
  });

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get("products/categories");
      let filter1 = "smartphones";
      let filter2 = "laptops";
      let filter3 = "mens-watches";
      let filter4 = "womens-watches";

      const filters = [filter1, filter2, filter3, filter4];

      const formatedData = data?.filter((el) => {
        return filters.includes(el.toString());
      });
      if (formatedData) {
        setCategories(formatedData);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
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

  return { categories };
};
