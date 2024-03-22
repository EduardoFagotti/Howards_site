import { Container } from "./styles";
import img from "../../assets/icons/Frame.png";
import Image from "next/image";

export default function Products() {
  return (
    <Container>
      <h1 className="title">Products</h1>
      <div className="cont">
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Websites</h1>
          <p>
            Website creation for your company. Landing Pages, Institutional and
            others.
          </p>
        </div>
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Virtual Stores</h1>
          <p>
            Creation of Ecommerce’s Virtual stores for all segments of business.
          </p>
        </div>
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Social Media</h1>
          <p>
            Social Media Management. Leverage your company in the virtual world.
          </p>
        </div>
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Online Ads</h1>
          <p>
            Offer your product or service to your ideal customer. Show up to who
            wants to find.
          </p>
        </div>
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Brand</h1>
          <p>
            Structure and establish your brand in the market. Please note that
            your brand deserves it.
          </p>
        </div>
        <div className="card">
          <div className="img">
            <Image src={img} width="" height="" alt="tamplates.png" />
          </div>
          <h1>Consultancies</h1>
          <p>
            Specialized marketing consultancies. Experience and knowledge to
            grow.
          </p>
        </div>
      </div>
    </Container>
  );
}
