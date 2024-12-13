import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Sparkles from "react-sparkle";

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
const WinnerOfferText = styled.div`
  ${(props) => props.theme.Winner?.WinnerOfferText};
`;
const ImgCoffeeCup = styled.img`
  ${(props) => props.theme.Winner?.ImgCoffeeCup};
`;
const ButtonWrapper = styled.div`
  ${(props) => props.theme.Winner?.ButtonWrapper};
`;
const Button = styled.button`
  ${(props) => props.theme.Winner?.Button};
`;

const Winner = (props) => {
  const { isWinner } = props;

  const [hasWinnerScreen, setHasWinnerScreen] = useState();

  const img_coffee_cup = "/images/img_coffee_cup.png";
  // const winner_sound = "/sounds/winner_sound.wav";
  const winner_sound_1 = "/sounds/winner_sound_1.mp3";

  useEffect(() => {
    setHasWinnerScreen(isWinner);
    if (isWinner) {
      const audio = new Audio(winner_sound_1); // Update the path as needed
      audio.play().catch((error) => {
        console.error("Playback failed:", error);
      });
    }
  }, [isWinner]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <WinnerContainer isWinner={hasWinnerScreen}>
      <Sparkles
        color="yellow"
        count={120}
        minSize={10}
        maxSize={15}
        overflowPx={80}
        fadeOutSpeed={30}
        flicker={false}
      />
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
        <ButtonWrapper>
          <Button type="button" onClick={handleRefresh}>
            Refresh
          </Button>
        </ButtonWrapper>
      </WinnerWrapper>
    </WinnerContainer>
  );
};

export default Winner;
