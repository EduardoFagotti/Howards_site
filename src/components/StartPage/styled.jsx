import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .cont {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

    p {
      width: 350px;
      color: #fff;
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 22px;
      text-align: justify;
    }

    strong {
      color: #9041c5;
    }

    img {
      width: 400px;
      height: 400px;
    }
  }
`;
