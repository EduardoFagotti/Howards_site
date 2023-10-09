import Image from "next/image";
import logo from "../../assets/icons/logotipo.png";
import { Container } from "./styles";
import { Element } from "react-scroll";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <Container>
      <div name="Contact" className="cont">
        <div className="company">
          <Image src={logo} width="" height="" alt="logo" />
          <p>Howards</p>
        </div>
        <div className="contacts">
          <Link
            className="icon"
            href="https://criarmeulink.com.br/u/1696879756"
            target="_blank"
          >
            <p>
              <MdSms className="icon" /> +1 561-334-7604
            </p>
          </Link>
          <Link className="link" href="https://wa.link/kh6g4v" target="_blank">
            <p>
              <IoLogoWhatsapp className="icon" /> +1 561-334-7604
            </p>
          </Link>
          <p>
            <MdEmail className="icon" /> Thiagohoward18@gmail.com
          </p>
          <Link
            href="https://www.instagram.com/howards_marketing/"
            target="_blank"
            className="link"
          >
            <p>
              <AiFillInstagram className="icon" /> instagram
            </p>
          </Link>
        </div>
      </div>
    </Container>
  );
}
