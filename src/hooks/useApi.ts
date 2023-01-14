import { useEffect, useState } from "react";
import api from "../services/api";
import { useRouter } from "next/router";
import { IProduct } from "../interfaces/IProduct";

export const useApi = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [laptops, setLaptops] = useState<IProduct[]>([]);
  const [mensWatches, setMensWatches] = useState<IProduct[]>([]);
  const [smartphones, setSmartphones] = useState<IProduct[]>([]);
  const [womensWatches, setWomensWatches] = useState<IProduct[]>([]);
  const router = useRouter();
  const path = router.pathname;
  const [isLoading, setIsLoading] = useState({
    loadingCategories: false,
    loadingProducts: false,
  });

  useEffect(() => {
    if (path === "/") {
      getAllCategories();
    }
    if (path === "/products/laptops") {
      getAllLaptops();
    }
    if (path === "/products/smartphones") {
      getAllSmartphones();
    }
    if (path === "/products/mens-watches") {
      getAllMensWatches();
    }
    if (path === "/products/womens-watches") {
      getAllWomensWatches();
    }
  }, [path]);

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

  const getAllLaptops = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get(`products/category/laptops?limit=4`);
      setLaptops(data.products);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  const getAllSmartphones = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get(`products/category/smartphones?limit=4`);
      setSmartphones(data.products);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  const getAllMensWatches = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get(`products/category/mens-watches?limit=4`);
      setMensWatches(data.products);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  const getAllWomensWatches = async () => {
    try {
      setIsLoading((prev) => ({ ...prev, loadingCategories: true }));
      const data = await api.get(`products/category/womens-watches?limit=4`);
      setWomensWatches(data.products);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoading((prev) => ({ ...prev, loadingCategories: false }));
    }
  };

  return {
    categories,
    getAllLaptops,
    getImageForCategory,
    isLoading,
    laptops,
    smartphones,
    mensWatches,
    womensWatches,
  };
};
