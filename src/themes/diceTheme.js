import { css } from "styled-components";

// Theme
export const DiceTheme = {
  name: "Dice",
  DiceContainer: css`
    padding: 0 10%;
  `,
  LeftContainer: css`
    margin: 2%;
    display: flex;
    justify-content: center;
  
    @media only screen and (max-width: 1100px) {
      height: 50vh;
      align-items: center;
    }    
  `,
  RightContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  ImgLady: css`
    width: 30%;

    @media only screen and (max-width: 960px) {
      width: 40%;
    }

    @media only screen and (max-width: 578px) {
      width: 60%;
    }
  `,
  ImgLogo: css`
    width: 25%;
    margin-right: 1.5%;

    @media only screen and (max-width: 960px) {
      width: 35%;
    }

    @media only screen and (max-width: 578px) {
      width: 45%;
    }
  `,
};
