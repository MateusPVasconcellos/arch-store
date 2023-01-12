import { AxiosResponse } from "axios";
import { AxiosClient } from "../config/axios/axios-config";
import { Product } from "../interfaces/product";
const BASE_URL = "https://dummyjson.com/";

class Api {
  async get(url: string): Promise<Product[] | undefined> {
    try {
      const response = await AxiosClient.get(`${BASE_URL}${url}`);
      return response.data;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao listar registros.");
    }
  }

  post(url: string, item: any): Promise<AxiosResponse | Error> {
    try {
      const response = AxiosClient.post(`${BASE_URL}${url}`, { item });
      return response;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao inserir registros.");
    }
  }

  put(url: string, item: any): Promise<AxiosResponse | Error> {
    try {
      const response = AxiosClient.put(`${BASE_URL}${url}`, { item });
      return response;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao listar registros.");
    }
  }
}

export default new Api();
