import Image from "next/image";
import { Container } from "./styles";
import icon from "../../assets/icons/logotipo.png";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { scroller } from "react-scroll";

export default function Header() {
  const [width, setWidth] = useState(0);
  const [open, setOpen] = useState("close");
  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  const scrollTo = (to) => {
    scroller.scrollTo(to, {
      duration: 1000,
      smooth: "easeInOutQuad",
      ignoreCancelEvents: true,
    });
  };

  return (
    <Container>
      <div className="cont">
        <Image src={icon} with="50px" heigth="50px" alt="" />
        {width > 800 ? (
          <div className="buttons">
            <button>Home</button>

            <button onClick={() => scrollTo("Responsive")}>Responsive</button>

            <button onClick={() => scrollTo("Contact")}>Contact</button>
          </div>
        ) : (
          <div>
            <div>
              <GiHamburgerMenu id="menu-icon" onClick={() => setOpen("open")} />
            </div>
            <div className="buttons-mobile" id={open}>
              <CgClose id="close-icon" onClick={() => setOpen("close")} />
              <button>Home</button>
              <button>Responsive</button>
              <button>Contact</button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
