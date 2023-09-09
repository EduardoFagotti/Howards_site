import { styled } from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  height: 300px;
  background-color: #080808;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px) {
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;

    .cont {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .contacts {
        align-items: center !important;
      }
    }
  }

  .cont {
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;

    @media (min-width: 1200px) {
      width: 60%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .contacts {
      align-items: start;
    }
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
