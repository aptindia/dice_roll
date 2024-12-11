import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import ReactDice from "react-dice-complete";

// https://www.npmjs.com/package/react-dice-complete

const DiceContainer = styled.div`
  ${(props) => props.theme.Dice?.DiceContainer};
`;

const LeftContainer = styled.div`
  ${(props) => props.theme.Dice?.LeftContainer};
`;

const RightContainer = styled.div`
  ${(props) => props.theme.Dice?.RightContainer};
`;

const ImgLady = styled.img`
  ${(props) => props.theme.Dice?.ImgLady};
`;

const ImgLogo = styled.img`
  ${(props) => props.theme.Dice?.ImgLogo};
`;

const Dices = (props) => {
  const { setIsWinner } = props;
  const reactDice = useRef(null);
  const [rollCount, setRollCount] = useState(0);

  //default values
  const numberOfDices = 3; // The number of dice you wish to have
  const dieCornerRadius = 5; // Rounded radius to use for each die
  const rollTime = 1; // time in seconds for the roll animation
  const dotColor = "#FFFFFF"; // hex color code for the face of the die
  const faceColor = "#4680ff"; // hex color code for the face of the die
  const dieSize = (window.innerWidth / window.innerHeight) * 43; // px width/height of each dice face
  const margin = 25; // margin between each die

  const img_lady = "/images/img_lady.png";
  const img_logo = "/images/client_logo.png";
  const dice_roll_sound = "/sounds/dice_sound.wav";
  const audio = new Audio(dice_roll_sound); // Update the path as needed

  /** Dices Logic Start */
  const rollDone = (totalValue, values) => {
    console.log("individual die values array:", values);
    console.log("total dice value:", totalValue);
    // Success! Show Winner Screen
    if (totalValue == 18) {
      setIsWinner(true);
    }
  };
  console.log(rollCount);
  const rollAll = () => {
    setRollCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log("newCount: " + newCount);

      if (newCount % 5 === 0) {
        reactDice.current.rollAll([6, 6, 6]); // Forcefully set both dice to 6 on the second roll
      } else {
        reactDice.current.rollAll();
      }
      return newCount;
    });
  };

  // Roll dice on full screen click
  const handleFullScreenClick = () => {
    playSound();
    rollAll();
  };
  // Play sound function
  const playSound = () => {
    audio.play();
  };

  useEffect(() => {
    // Attach click event listener to the entire document
    document.addEventListener("click", handleFullScreenClick);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", handleFullScreenClick);
    };
  }, []);
  /** Dices Logic End */

  return (
    <DiceContainer>
      <LeftContainer>
        <ReactDice
          numDice={numberOfDices}
          ref={reactDice}
          rollDone={rollDone}
          dieCornerRadius={dieCornerRadius}
          dotColor={dotColor}
          faceColor={faceColor}
          rollTime={rollTime} //time in seconds for the roll animation
          dieSize={dieSize}
          margin={margin}
        />
      </LeftContainer>
      <RightContainer>
        <ImgLogo src={img_logo} alt="imgLogo" />
        <ImgLady src={img_lady} alt="imgLady" />
      </RightContainer>
    </DiceContainer>
  );
};

export default Dices;
