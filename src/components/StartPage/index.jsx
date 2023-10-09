import img from "../../assets/img/marketing.png";
import Image from "next/image";
import { Container } from "./styled";

export default function StartPage() {
  return (
    <Container name="home">
      <div className="cont">
        <p>
          Creation of <strong>websites</strong> and{" "}
          <strong>landing pages</strong> is an excellent way to promote your
          business and <strong>attract new customers</strong>.
        </p>
        <Image src={img} width="" heigth="" alt />
      </div>
    </Container>
  );
}
