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
   // const history = useNavigate();

   // const handleLogoClick = (event, id) => {
   //    history(`/`);
   //    window.location.reload(false);
   // };

   return (
      <HeaderContainer>
         <HederWrapper>
            {/* <Logo src={img_logo} onClick={handleLogoClick} alt="logo" /> */}
            <TitleWrapper>
               <Title>Touch screen to spin</Title>
               <SubTitle>with every order</SubTitle>
            </TitleWrapper>
         </HederWrapper >
      </HeaderContainer>
   );
};

export default HeaderMenu;