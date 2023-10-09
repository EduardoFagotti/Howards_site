import { styled } from "styled-components";

export const Container = styled.div`
  font-family: "Kanit", sans-serif;
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
      width: 80%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .contacts {
        align-items: center !important;
      }
    }
  }

  .cont {
    width: 80%;
    display: flex;
    justify-content: space-between;
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

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      .icon {
        width: 22px;
        height: 22px;
      }

      .link {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  img {
    width: 150px;
    height: 150px;
  }
`;
