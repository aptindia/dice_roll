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
    display: ${(props) => (props.isWinner ? 'flex': 'none')};
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
    font-size: 2.5vw;
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
    font-size: 2.5vw;
    font-weight: 700;
    color: #ffffff;
  `,
  ImgCoffeeCup: css`
    width: 28%;
  `,
};
