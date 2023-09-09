import Image from "next/image";
import Responsive from "jsconfig.json/components/Responsive";
import StartPage from "jsconfig.json/components/StartPage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Howards</title>
        <meta name="description" content="teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <StartPage />
      <Responsive />
    </>
  );
}
