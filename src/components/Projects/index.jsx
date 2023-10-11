import { Container } from "./styled";

export default function Projects() {
  const data = [
    {
      img: "",
      name: "",
    },
    {
      img: "",
      name: "",
    },
  ];

  return (
    <Container>
      <div className="cont-projects">
        <h1>Be one of our</h1>
        <h1>partners</h1>
        <div className="cards">
          {data.map((item) => {
            const { img, name } = item;
            return (
              <div className="card">
                {/* <Image src={img} width="" heigth="" alt="" /> */}
                <h1>Your project</h1>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
