import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-top: 50px; */
  .cont {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;

    @media (max-width: 850px) {
      flex-direction: column-reverse;
    }

    p {
      width: 350px;
      color: #fff;
      font-family: "Kanit", sans-serif;
      font-weight: 300;
      font-size: 22px;
      text-align: justify;
      @media (min-width: 1200px) {
        font-size: 28px;
        width: 400px;
      }
      @media (max-width: 500px) {
        width: 100%;
      }
    }

    strong {
      color: #9041c5;
    }

    img {
      width: 400px;
      height: 300px;

      @media (min-width: 1200px) {
        width: 600px;
        height: 420px;
      }
      @media (max-width: 500px) {
        width: 300px;
        height: 220px;
      }
    }
  }
`;
