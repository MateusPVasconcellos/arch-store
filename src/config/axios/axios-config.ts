import axios from "axios";
import { errorInterceptor } from "./ErrorInterceptor";
import { responseInterceptor } from "./ResponseInterceptor";

const AxiosClient = axios.create({
  baseURL: process.env.API_URL,
});

AxiosClient.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export { AxiosClient };
