import { css } from "styled-components";

// Theme
export const HomeTheme = {
  name: "Home",
  Container: css`
    width: auto;
    height: var(--vh);
    align-items: center;
    display: flex;
    text-align: center;
    padding: 0;
    display: flex;
    justify-content: center;
  `,
  Wrapper: css`
    width: auto;    
    border-radius: 10px;

    @media only screen and (min-width: 1100px) {
      border: 1.5px solid lightgrey;
    }

    @media only screen and (max-width: 1100px) {
    
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      align-self: stretch;

    }


  `,
  
};
