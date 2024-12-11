import React, { useState } from "react";
import styled from "styled-components";
import HeaderMenu from "../core/Header/Header";
import Dices from "./Dices";
import Winner from "./Winner";

const Container = styled.div`
  ${(props) => props.theme.Home?.Container};
`;

const Wrapper = styled.div`
  ${(props) => props.theme.Home?.Wrapper};
`;

const bg_app = "/images/app_bg.jpg";

const Home = (props) => {
  const [isWinner, setIsWinner] = useState(false);

  return (
    <Container
      style={{
        backgroundImage: `url(${bg_app})`,
        backgroundSize: "cover",
        overflow: "auto",
      }}
    >
      <Wrapper>
        <HeaderMenu />
        <Dices setIsWinner={setIsWinner} />
        <Winner isWinner={isWinner} />
      </Wrapper>
    </Container>
  );
};

export default Home;
