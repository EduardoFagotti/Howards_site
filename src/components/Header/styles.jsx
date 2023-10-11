import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #131313;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;

  .cont {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 2px solid #7f7f7f;
    @media (max-width: 500px) {
      width: 92%;
      justify-content: space-between;
      //gap: 20%;

      .buttons {
        width: auto;
      }
    }

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
      font-family: "Kanit", sans-serif;
      font-weight: bold;
    }

    button:hover {
      color: #9041c5;
      cursor: pointer;
    }
  }
  #menu-icon {
    color: #ffffff;
    width: 32px;
    height: 32px;
  }
  #close-icon {
    color: #ffffff;
    width: 32px;
    height: 32px;
    padding: 25px;
  }
  #open {
    display: flex;
  }
  #close {
    display: none;
  }
  .buttons-mobile {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #131313;
    display: flex;
    flex-direction: column;
    align-items: end;
    width: 100vw;
    button {
      margin-right: 25px;
      font-size: 22px;
    }
  }
`;
