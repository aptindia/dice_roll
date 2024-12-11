import { css } from "styled-components";

// Theme
export const HeaderTheme = {
  name: "Header",
  HeaderContainer: css`
    margin-bottom: 5%;
  `,
  HederWrapper: css``,
  TitleWrapper: css`
    background: linear-gradient(180deg, #1153FC 0%, #1153FC 15%, #5581F1 100%);
    color: #ffffff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5px 0;
  `,
  Title: css`
    font-size: 4.5vh;
    margin: 0px;
    line-height: 4.5vh;
    white-space: pre-wrap;
  `,
  SubTitle: css`
    font-size: 4.5vh;
    margin: 0px;
    white-space: pre-wrap;
  `,
};
