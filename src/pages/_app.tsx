import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Header from "../components/Header";
import CartModal from "../components/CartModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ArcH-Store</title>
      </Head>

      <ThemeProvider attribute="class">
        <Header />
        <CartModal />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
