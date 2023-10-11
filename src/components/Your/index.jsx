import Image from "next/image";
import BG from "../../assets/img/BG.png";
import { Container } from "./styled";
import { scroller } from "react-scroll";

export default function Your() {
  const scrollTo = (to) => {
    scroller.scrollTo(to, {
      duration: 1000,
      smooth: "easeInOutQuad",
      ignoreCancelEvents: true,
    });
  };
  return (
    <Container name="home">
      <div className="cont-your">
        <Image src={BG} width="" heigth="" />
        <div className="text">
          <p>Get your website</p>
          <p>customized with</p>
          <p>your brand</p>
          <button onClick={() => scrollTo("Contact")}>Contact</button>
        </div>
      </div>
    </Container>
  );
}
