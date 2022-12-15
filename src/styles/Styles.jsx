import styled from "styled-components";
import PokeBall from "../assets/pokeball.png";

const Button = styled.button`
  height: 35px;
  border-radius: 5px;
  border: 1px solid #fff;
  box-shadow: 6px 6px 12px #c5c5c5;
  font-family: "Josefin Sans", sans-serif;
  font-size: 1rem;
`;

export const ContainerForm = styled.div`
  height: 350px;
  background-color: #c5312a;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 3px 5px 7px 1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 3px 5px 7px 1px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 3px 5px 7px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  .logo {
    width: 280px;
    text-align: center;
    margin: 0 auto;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 30%;
      height: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
    }

    img {
      width: 55%;
      filter: drop-shadow(-3px 3px 5px #000);
    }
  }

  form {
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    input {
      width: 65%;
      height: 30px;
      text-align: center;
      border-radius: 5px;
      border: none;
      outline: none;

      &::placeholder {
        text-align: center;
      }
      @media (min-width: 576px) {
        width: 50%;
      }

      @media (min-width: 1200px) {
        width: 20%;
      }
    }

    .message__error {
      width: 100%;
      height: 50px;
      background-color: rgba(0, 0, 0, 0.5);
      color: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const BtnFormSearch = styled(Button)`
  width: 120px;
  box-shadow: 0 2px 10px #000;
  letter-spacing: 3px;
`;

export const BtnFormReset = styled(Button)`
  width: 200px;
  box-shadow: 0 2px 10px #000;
  letter-spacing: 1px;
`;

export const ImageFav = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 60px;
  left: 10px;

  picture {
    img {
      width: 80px;
    }
  }

  p {
    text-align: center;
    margin-top: 0px;
    text-transform: capitalize;
    color: #fff;
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    text-shadow: 2px 3px 5px #000;
  }
`;

export const ContainerFavorite = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;

  h2 {
    padding: 10px;
  }

  .container__favorite--cards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
  }

  .favorite__card {
    width: 350px;
    height: 390px;
    background-color: #d1d8ec;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50px 280px 50px;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .favorite__title {
      font-size: 1.2rem;
      color: #fff;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      grid-column: 1/5;
      text-transform: capitalize;
    }

    .favorite__image {
      width: 50%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      grid-column: 1/5;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        border-radius: 50%;
        background-image: url(${PokeBall});
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        bottom: 0;
        z-index: 1;
      }

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 50%;
        bottom: -8px;
        border-radius: 50%;
        background: #d1d8ec;
        border-bottom: 4px solid rgba(0, 0, 0, 0.45);
        -webkit-box-shadow: 12px 12px 24px #b2b8c9, -12px -12px 24px #f0f8ff;
        box-shadow: 0px 10px 20px #b2b8c9, -20px -12px 24px #f0f8ff;
      }

      img {
        width: 80%;
        object-fit: contain;
        z-index: 5;
      }
    }

    .favorite__buttons {
      grid-column: 1/5;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const BtnShowFavorites = styled(Button)`
  width: 190px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  box-shadow: 0 2px 10px #000;
`;

export const BtnFavorites = styled(Button)`
  width: 90px;
  height: 30px;
`;

export const ContainerFilter = styled.section`
  text-align: center;
  margin: 20px 0;

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
  }
`;

export const ContainerSelectFilter = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .custom__select {
    width: 130px;
    height: 40px;
    position: relative;
  }

  #select__type {
    width: 130px;
    height: 40px;
    font-family: "Josefin Sans", sans-serif;
    font-size: 0.9rem;
    text-transform: capitalize;
    letter-spacing: 1px;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: #4f5061;
    border: 0;
    outline: none;
    color: #fff;

    & option {
      font-size: 0.9rem;
    }
  }

  .custom__arrow {
    width: 20px;
    height: 40px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #34353f;
    pointer-events: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-left: 8px solid #fff;
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      transform: rotate(90deg);
    }
  }

  .select__type--option {
    color: #c5312a;
    font-size: 0.9rem;
  }

  #select__type--rank {
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    font-family: "Josefin Sans", sans-serif;

    @media (min-width: 576px) {
      width: 50%;
    }

    @media (min-width: 1400px) {
      width: 30%;
    }
  }
`;

export const BtnFilterToggle = styled(Button)`
  width: 150px;
  letter-spacing: 1px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px #000;
`;

export const ContainerCards = styled.div`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 50px;
`;

export const PokeCard = styled.div`
  width: 350px;
  height: 470px;
  box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.51);
  -webkit-box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.51);
  -moz-box-shadow: 3px 5px 5px 5px rgba(0, 0, 0, 0.51);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  .card__header {
    height: 10%;
    background-color: var(--${({ colors }) => colors}Primary);
    color: #fff;

    h3 {
      margin: 0px;
      padding: 10px;
      text-align: center;
      text-transform: capitalize;
    }
  }

  .card__body {
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #e0e0e0;
    position: relative;

    .card__background {
      width: 65%;
      position: absolute;
      bottom: -50px;
      right: 5px;
      transform: scaleX(-1);
      filter: drop-shadow(1px 1px 10px black)
        drop-shadow(3px 3px 15px var(--${({ colors }) => colors}Primary))
        drop-shadow(6px 6px 25px gold);
    }

    ${(props) => !props.isShown} {
      color: var(--${({ colors }) => colors}Primary);
      background-image: linear-gradient(
        to right top,
        var(--${({ colors }) => colors}Secondary),
        var(--${({ colors }) => colors}Primary)
      );
    }

    picture {
      width: 140px;
      height: 140px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;

      &:before {
        content: "";
        position: absolute;
        width: 110%;
        height: 110%;
        top: -10px;
        left: -10px;
        border-radius: 50%;
        box-shadow: 9.91px 9.91px 15px #979797, -5.91px -5.91px 15px #fff;
      }

      img {
        width: 90%;
      }

      .pokemon__unknown {
        width: 100%;
      }
    }

    .card__type {
      width: 100%;
      height: 80px;

      .card__type--type {
        text-align: center;

        ${(props) => !props.isShown} {
          visibility: hidden;
        }
      }

      .card__type--types {
        display: flex;
        justify-content: space-around;

        ${(props) => !props.isShown} {
          flex-direction: column;
          height: 120px;
        }

        p {
          width: 70px;
          height: 50px;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          color: #fff;
          text-transform: capitalize;
        }
      }

      & + p {
        margin: 0;
        ${(props) => !props.isShown} {
          visibility: hidden;
        }
      }
    }
  }

  .card__footer {
    width: 100%;
    height: 15%;
    background-color: var(--${({ colors }) => colors}Secondary);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${(props) => !props.isShown} {
      background-color: var(--${({ colors }) => colors}Primary);
      button {
        display: none;
      }
    }

    .btn__favorite,
    .btn__delete {
      width: 40px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid #fff;
      box-shadow: 0 5px 15px var(--${({ colors }) => colors}Primary);
    }

    .show {
      display: block;

      ${(props) => !props.isShown} {
        display: none;
      }
    }

    .hide {
      display: none;
    }

    .btn__modal {
      width: 80px;
      height: 30px;
      border: none;
      border: 1px solid;
      border-radius: 5px;
      border: 1px solid #fff;
      box-shadow: 0 5px 15px var(--${({ colors }) => colors}Primary);
    }
  }
`;

export const ContainerPagination = styled.div`
  width: 100%;
  height: 170px;
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 1px solid #ecf0f1;
  border-bottom: 1px solid #ecf0f1;
  color: #ecf0f1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  h4 {
    grid-column: 1/5;
    padding: 10px 0;
  }

  .container__btns {
    grid-column: 1/5;
  }

  .container__btns--show-more {
    grid-column: 1/5;

    button {
      width: 180px;
      height: 40px;
      border-radius: 5px;
      font-family: "Josefin Sans", sans-serif;
      font-size: 1rem;
    }
  }
`;

export const BtnsPagination = styled(Button)`
  margin: 0 20px 0 20px;
  outline: none;
  border: 3px solid #fff;
  box-shadow: 0px 2px 10px #c5c5c5;
`;

export const ContainerModal = styled.article`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;
  justify-content: center;
  align-items: center;

  &.is__open {
    display: flex;
  }
`;

export const CardModal = styled.div`
  width: 90%;
  height: 550px;
  background-color: #ff363c;
  border-radius: 10px;

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 25%;
    height: 600px;
  }

  .card__header {
    width: 90%;
    margin: 10px auto 0 auto;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.4);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 30px;
      background-color: rgba(255, 255, 255, 0.4);
      position: absolute;
      bottom: -30px;
      z-index: 1;
    }

    .card__header--name {
      width: 100%;
      display: flex;
      align-content: flex-start;
      padding-top: 10px;

      h2 {
        margin: 0;

        text-transform: capitalize;
      }

      img {
        width: 40px;
        height: 30px;
        padding-left: 10px;
      }

      &:before {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        top: 15px;
        right: 25px;
        background-color: #fcf005;
        border: 1px solid;
        border-radius: 50%;
      }

      &:after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        top: 15px;
        right: 5px;
        background-color: #00a551;
        border: 1px solid;
        border-radius: 50%;
      }

      span {
        width: 30px;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
      }

      h2 {
        padding: 10px;
      }
    }
  }

  .card__body {
    width: 90%;
    height: 430px;
    margin: 0 auto;
    background-color: #b61f1e;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    position: relative;
    z-index: 5;

    @media (min-width: 1200px) {
      height: 480px;
    }

    li {
      list-style: none;
    }

    picture {
      width: 140px;
      height: 140px;
      margin: 0 auto 30px auto;
      position: relative;
      display: flex;
      justify-content: center;
      top: 10px;
      border-radius: 50%;

      @media (min-width: 1200px) {
        width: 150px;
        height: 150px;
      }

      &::before {
        content: "";
        position: absolute;
        width: 110%;
        height: 110%;
        top: 0px;
        right: 0px;
        border-radius: 50%;
        box-shadow: 9.91px 9.91px 15px #913333, -5.91px -5.91px 15px #cc4e5a;
      }
    }

    img {
      width: 65%;
    }

    .pokemon__unknown {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      margin: 5px;
    }

    .info {
      width: 95%;
      margin: 0 auto;
      font-size: 0.9rem;
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;

      .info__title {
        text-align: center;
        letter-spacing: 0.3rem;
        margin: 0;
        padding-top: 10px;
        text-transform: uppercase;
        grid-column: 1/8;
        color: #fff;
        font-weight: bold;
      }

      .stats {
        width: 100%;
        height: 95px;
        background-color: #fff;
        grid-column: 1/8;
        border-top: 3px solid;
        border-bottom: 3px solid;

        @media (min-width: 1200px) {
          height: 110px;
        }

        ul {
          height: inherit;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          align-content: space-evenly;
        }
      }

      .ability {
        height: 110px;
        background-color: #fff;
        padding: 10px;
        border: 3px solid;
        grid-column: 1/4;
        text-align: center;

        @media (min-width: 1200px) {
          height: 130px;
        }

        h4 {
          margin: 0;
          padding: 0;
        }
      }
    }

    .moves {
      height: 110px;
      padding: 5px;
      grid-column: 4/8;
      background-color: #fff;
      border: 3px solid;
      text-align: center;
      position: relative;

      @media (min-width: 1200px) {
        height: 130px;
      }

      h4 {
        margin: 0;
        padding: 5px;
      }

      .all__moves {
        height: 75px;
        background-color: rgba(0, 0, 0, 0.2);
        overflow-y: scroll;
        padding: 0;

        @media (min-width: 1200px) {
          height: 95px;
        }

        ul {
          padding: 0;
        }

        &::-webkit-scrollbar {
          width: 2px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: red;
          border-radius: 20px;
        }
      }
    }
  }

  .card__footer {
    width: 90%;
    height: 50px;
    margin: auto;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    .show {
      display: block;
    }

    .hide {
      display: none;
    }
  }
`;

export const BtnModalFavorite = styled(Button)`
  width: 40px;
  height: 30px;
`;
export const BtnModalClose = styled(Button)`
  width: 80px;
  height: 30px;
`;
