import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #131313;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    font-family: "Kanit", sans-serif;
    color: #fff;
    font-weight: 400;
    font-size: 40px;
  }

  .cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
  }

  .card {
    width: 250px;
    height: 308px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    font-family: "Kanit", sans-serif;
    padding: 10px;

    h1 {
      font-weight: 500;
    }

    p {
      color: #5f626b;
      width: 100%;
      text-align: center;
    }
  }

  .img {
    background-color: #5a2a98;
    width: 80px;
    height: 80px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;
