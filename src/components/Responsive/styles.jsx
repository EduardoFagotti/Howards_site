import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  .Cont {
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 10%;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  }

  img {
    width: 400px;
    height: 250px;
    @media (min-width: 1200px) {
      width: 650px;
      height: 450px;
    }
    @media (max-width: 500px) {
      width: 350px;
      height: 220px;
    }
  }

  p {
    width: 350px;
    color: #ffffff;
    font-family: "Kanit", sans-serif;
    text-align: justify;
    font-weight: 300;
    font-size: 22px;

    strong {
      color: #9041c5;
    }
    @media (min-width: 1200px) {
      font-size: 28px;
      width: 400px;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
