import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  ${(props) => props.theme.Header?.HeaderContainer};
`;

const HederWrapper = styled.div`
  ${(props) => props.theme.Header?.HederWrapper};
`;

const TitleWrapper = styled.div`
  ${(props) => props.theme.Header?.TitleWrapper};
`;

const Title = styled.div`
  ${(props) => props.theme.Header?.Title};
`;

const SubTitle = styled.div`
  ${(props) => props.theme.Header?.SubTitle};
`;

const HeaderMenu = () => {
  return (
    <HeaderContainer>
      <HederWrapper>
        <TitleWrapper>
          <Title>Touch screen to spin</Title>
          <SubTitle>with every order</SubTitle>
        </TitleWrapper>
      </HederWrapper>
    </HeaderContainer>
  );
};

export default HeaderMenu;
