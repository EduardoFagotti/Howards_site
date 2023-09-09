import Image from "next/image";
import logo from "../../assets/icons/logotipo.png";
import { Container } from "./styles";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <Container>
      <Element name="Contact">
        <div className="cont" id="contact">
          <div className="company">
            <Image src={logo} width="" height="" alt="logo" />
            <p>Hawards</p>
          </div>
          <div className="contacts">
            <p>SMS: 0000-0000</p>
            <p>EMAIL: teste@teste.com</p>
          </div>
        </div>
      </Element>
    </Container>
  );
}
