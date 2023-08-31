import Image from "next/image";
import { Container } from "./styles";
import icon from "../../assets/icons/logotipo.png";

export default function Header() {
  return (
    <Container>
      <div className="cont">
        <Image src={icon} with="50px" heigth="50px" alt="" />
        <div className="buttons">
          <button>TESTE</button>
          <button>TESTE</button>
          <button>TESTE</button>
          <button>TESTE</button>
        </div>
      </div>
    </Container>
  );
}
