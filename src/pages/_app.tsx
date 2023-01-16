import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import CartModal from "../components/CartModal";
import { CartContextProvider } from "../contexts/cartContext";
import AddItemModal from "../components/AddItemModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ArcH-Store</title>
      </Head>
      <CartContextProvider>
        <ThemeProvider attribute="class" defaultTheme="light">
          <ToastContainer position="top-center" />
          <Header />
          <AddItemModal />
          <CartModal />
          <Component {...pageProps} />
        </ThemeProvider>
      </CartContextProvider>
    </>
  );
}
