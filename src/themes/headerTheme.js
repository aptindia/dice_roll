import { css } from "styled-components";

// Theme
export const HeaderTheme = {
  name: "Header",
  HeaderContainer: css`
    margin-bottom: 10%;
  `,
  HederWrapper: css``,
  TitleWrapper: css`
    background: linear-gradient(180deg, #1153FC 0%, #1153FC 15%, #5581F1 100%);
    color: #ffffff;
    border-radius: 0 0 10px 10px;
    padding: 20px 5px;

    @media only screen and (min-width: 1100px) {
      border-radius: 0px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    
  `,
  Title: css`
    font-size: 3.6vh;
    margin: 0px;
    line-height: 4.5vh;
    white-space: pre-wrap;
  `,
  SubTitle: css`
    font-size: 3.6vh;
    margin: 0px;
    white-space: pre-wrap;
  `,
};
