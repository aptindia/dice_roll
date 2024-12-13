import { css, keyframes } from "styled-components";

const winnerAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;
// Theme
export const WinnerTheme = {
  name: "Winner",
  WinnerContainer: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${(props) => (props.isWinner ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #000000aa 50%, #000000aa 50%);
  `,
  WinnerWrapper: css`
    width: 50%;
    text-align: center;
  `,
  WinnerTextWrapper: css`
    margin: 0 auto;
    display: inline-block;
    border: 1px solid lightcoral;
    padding: 1% 3.1%;
    border-radius: 10px;
    background: linear-gradient(180deg, #f08080 0%, #f08080 15%, #f5a5a5 100%);
  `,
  WinnerText: css`
    font-size: 2.3vw;
    font-weight: 700;
    color: #ffffff;
    animation: ${winnerAnimation} 2s infinite;
  `,
  CupTextWrapper: css`
    margin: 2%;
  `,
  WinnerOfferText: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.2vw;
    font-weight: 700;
    color: #ffffff;
  `,
  ImgCoffeeCup: css`
    width: 26%;
  `,
  ButtonWrapper: css`
    z-index: 1000;
    gap: 1rem;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
    @media (max-width: 767px) {
      margin-top: 0rem;
    }
    @media (max-width: 576px) {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  `,
  Button: css`
    z-index: 1000;
    cursor: pointer;
    color: ${(props) => props.theme.txtButton};
    background: linear-gradient(180deg, #1153fc 0%, #1153fc 15%, #5581f1 100%);
    border: 1px solid #5581f1;
    padding: 0.2rem 1.5rem;
    font-size: 1.8rem;
    line-height: normal;
    border-radius: 0.2rem;
    min-width: 92px;
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  `,
};
