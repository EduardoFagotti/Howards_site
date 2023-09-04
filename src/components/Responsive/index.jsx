import Image from "next/image";
import { Container } from "./styles";
import img from "../../assets/img/tamplates.png"



export default function Responsive() {


    return(
        <Container>
            <div className="Cont">
                <Image src={img} width="" height="" alt="tamplates.png"/> 
                <p>Have a <strong>responsive and elegant</strong> website. With advanced search features, <strong>easy navigation</strong>, and an <strong>intuitive interface</strong>.</p>
            </div>
        </Container>
    )
}