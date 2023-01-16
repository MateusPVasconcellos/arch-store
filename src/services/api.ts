import { AxiosResponse } from "axios";
import { AxiosClient } from "../config/axios/axios-config";
import { IProducts } from "../interfaces/IProduct";
const BASE_URL = "http://localhost:3000/";

class Api {
  async get(url: string) {
    try {
      const response = await AxiosClient.get(`${BASE_URL}${url}`);
      return response.data;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao listar registros.");
    }
  }

  async post(url: string, item: any) {
    try {
      const response = await AxiosClient.post(`${BASE_URL}${url}`, { item });
      return response.data;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao inserir registros.");
    }
  }

  async put(url: string, item: any) {
    try {
      const response = await AxiosClient.put(`${BASE_URL}${url}`, { item });
      return response.data;
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao listar registros.");
    }
  }
}

export default new Api();
