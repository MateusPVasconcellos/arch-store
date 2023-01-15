import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
export default function Document(): JSX.Element {
  return (
    <Html>
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
      <body className="bg-app block bg-gray-200 bg-cover bg-no-repeat dark:bg-gray-700">
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
