import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;

  .cont-your {
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: start;

    @media (min-width: 1120px) {
      justify-content: center;
    }

    @media (max-width: 540px) {
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
      justify-content: center;

      img {
        width: 50%;
        height: 50%;
      }
    }

    .text {
      /* background-color: red; */
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      font-family: "Kanit", sans-serif;
      color: #fff;
      z-index: 10;
      margin-left: 20px;

      p {
        font-size: 40px;
        margin: 0;
        padding: 0;
      }

      @media (max-width: 1000px) {
        justify-content: center;
        p {
          font-size: 20px;
        }

        button {
          width: 80% !important;
        }
      }

      button {
        margin-top: 60px;
        position: relative;
        width: 60%;
        height: 48px;
        border-radius: 10px;
        border: none;
        color: #fff;
        font-size: 24px;
        background-color: #89219b;
        font-family: "Kanit", sans-serif;
      }

      button:hover {
        cursor: pointer;
        background-color: #e342ff;
        /* border: solid 2px #fff; */
      }
    }
  }

  img {
    width: 60%;
    height: 60%;

    @media (min-width: 1120px) {
      width: 500px;
      height: 500px;
    }
  }
`;
