import Footer from "jsconfig.json/components/Footer";
import Header from "jsconfig.json/components/Header";
import Head from "next/head";
import { Container } from "../components/Styled/styles";

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      {/* <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> */}
      <Footer />
    </Container>
  );
}
