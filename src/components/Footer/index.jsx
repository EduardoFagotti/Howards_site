import Image from "next/image";
import logo from "../../assets/icons/logotipo.png";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="cont">
        <div className="company">
          <Image src={logo} width="" height="" alt="logo" />
          <p>Hawards</p>
        </div>
        <div className="contacts">
          <p>SMS: 0000-0000</p>
          <p>EMAIL: teste@teste.com</p>
        </div>
      </div>
    </Container>
  );
}
