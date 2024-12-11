import React, { useEffect } from "react";
import styled from "styled-components";

const WinnerContainer = styled.div`
  ${(props) => props.theme.Winner?.WinnerContainer};
`;
const WinnerWrapper = styled.div`
  ${(props) => props.theme.Winner?.WinnerWrapper};
`;
const WinnerTextWrapper = styled.div`
  ${(props) => props.theme.Winner?.WinnerTextWrapper};
`;
const WinnerText = styled.span`
  ${(props) => props.theme.Winner?.WinnerText};
`;
const CupTextWrapper = styled.div`
  ${(props) => props.theme.Winner?.CupTextWrapper};
`;
const WinnerOfferText = styled.span`
  ${(props) => props.theme.Winner?.WinnerOfferText};
`;
const ImgCoffeeCup = styled.img`
  ${(props) => props.theme.Winner?.ImgCoffeeCup};
`;

const Winner = (props) => {
  const { isWinner } = props;

  const img_coffee_cup = "/images/img_coffee_cup.png";
  const winner_sound = "/sounds/winner_sound.wav";
  const winner_sound_1 = "/sounds/winner_sound_1.mp3";

  const audio = new Audio(winner_sound_1); // Update the path as needed
  audio.play().catch((error) => {
    console.error("Playback failed:", error);
  });

  return (
    <WinnerContainer isWinner={isWinner}>
      <WinnerWrapper>
        <WinnerTextWrapper>
          <WinnerText>WINNER!</WinnerText>
        </WinnerTextWrapper>
        <CupTextWrapper>
          <WinnerOfferText>
            1 <br /> medium <br /> coffee
          </WinnerOfferText>
          <ImgCoffeeCup src={img_coffee_cup} alt="imgCoffeeCup" />
        </CupTextWrapper>
      </WinnerWrapper>
    </WinnerContainer>
  );
};

export default Winner;
