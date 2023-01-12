import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Document() {
  return (
    <Html className="h-screen w-screen">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-app block bg-gray-900 bg-cover bg-no-repeat">
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
