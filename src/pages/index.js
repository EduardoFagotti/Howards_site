import Image from "next/image";
import Responsive from "jsconfig.json/components/Responsive";
import StartPage from "jsconfig.json/components/StartPage";
import Head from "next/head";
import Your from "jsconfig.json/components/Your";
import Projects from "jsconfig.json/components/Projects";
import Products from "jsconfig.json/components/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>Howards</title>
        <meta name="description" content="creating responsive websites" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Your />
      <Products />
      <StartPage />
      <Responsive />
      {/* <Projects /> */}
    </>
  );
}
