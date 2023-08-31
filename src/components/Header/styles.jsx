import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;

  .cont {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 2px solid #7f7f7f;

    img {
      width: 60px;
      height: 60px;
    }

    .buttons {
      width: 50%;
      display: flex;
      justify-content: space-around;
    }

    button {
      padding: 10px;
      color: #7f7f7f;
      background-color: transparent;
      border: none;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
      font-weight: bold;
    }

    button:hover {
      color: #9041c5;
      cursor: pointer;
    }
  }
`;
