import { useEffect, useState } from "react";
import api from "../services/api";
import { useRouter } from "next/router";
import { IProduct, IProducts } from "../interfaces/IProduct";

export const useApi = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [laptops, setLaptops] = useState<IProduct[] | undefined>([]);
  const [mensWatches, setMensWatches] = useState<IProduct[] | undefined>([]);
  const [smartphones, setSmartphones] = useState<IProduct[] | undefined>([]);
  const [womensWatches, setWomensWatches] = useState<IProduct[] | undefined>(
    []
  );
  const router = useRouter();
  const path = router.pathname;
  const [isLoadingLaptops, setIsLoadingLaptops] = useState<boolean>(true);
  const [isLoadingMensWatches, setIsLoadingMensWatches] =
    useState<boolean>(true);
  const [isLoadingWomensWatches, setIsLoadingWomensWatches] =
    useState<boolean>(true);
  const [isLoadingCategories, setIsLoadingCategories] = useState<boolean>(true);
  const [isLoadingSmartphones, setIsLoadingSmartphones] =
    useState<boolean>(true);

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
      setIsLoadingCategories(true);
      const data = await api.get("categories");
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

      return setCategories(finalData);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoadingCategories(false);
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
      setIsLoadingLaptops(true);
      const data = await api.get(`products/category/laptops`);
      return setLaptops(data);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoadingLaptops(false);
    }
  };

  const getAllSmartphones = async () => {
    try {
      setIsLoadingSmartphones(true);
      const data = await api.get(`products/category/smartphones`);
      return setSmartphones(data);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoadingSmartphones(false);
    }
  };

  const getAllMensWatches = async () => {
    try {
      setIsLoadingMensWatches(true);
      const data = await api.get(`products/category/mens-watches`);
      return setMensWatches(data);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoadingMensWatches(false);
    }
  };

  const getAllWomensWatches = async () => {
    try {
      setIsLoadingWomensWatches(true);
      const data = await api.get(`products/category/womens-watches`);
      return setWomensWatches(data);
    } catch (e) {
      console.log(e);
      throw new Error("Erro ao buscar produtos.");
    } finally {
      setIsLoadingWomensWatches(false);
    }
  };

  return {
    categories,
    getAllLaptops,
    getImageForCategory,
    laptops,
    smartphones,
    mensWatches,
    womensWatches,
    isLoadingCategories,
    isLoadingLaptops,
    isLoadingMensWatches,
    isLoadingWomensWatches,
    isLoadingSmartphones,
  };
};
