import React from 'react';
import styled from 'styled-components';

const FrameWrapper = styled.div`
  min-height: ${props => props.minHeight ? `${props.minHeight}%` : '31%'};
  max-width: ${props => props.width ? `${props.width}px` : '1850px'};
  height: ${props => props.height ? `${props.height}px` : ''};
  margin-top: ${props => props.margintop ? `${props.margintop}%` : '7%'};
  margin-bottom: ${props => props.marginbottom ? `${props.marginbottom}` : '0px'};
  overflow: visible;
  margin-left: 8%;
  margin-right: 8%;
  align-items: end;
  justify-content: center;
  display: flex;
  position: relative;
  @media (max-width: 991px) {
    margin-top: ${props => props.margintop ? `${props.margintop + 3}%` : '9%'};
    min-height: ${props => props.minHeight ? `${props.minHeight}%` : '31%'};
  }
  @media (max-width: 767px) {
    margin-top: ${props => props.margintop ? `${props.margintop + 5}%` : '14%'};
    min-height: ${props => props.minHeight ? `${props.minHeight + 25}%` : '50%'};
  }
  @media (max-width: 576px) {
    margin-top: ${props => props.margintop ? `${props.margintop + 14}%` : '18%'};
    min-height: ${props => props.minHeight ? `${props.minHeight + 27}%` : '55%'};
  }
  ${(props) => props.styles};
`;

const FrameLayout = (props) => {
  const { children, role, minHeight, height, width, marginTop, marginBottom, name, styles } = props;

  return (
    <FrameWrapper
      frameName={name}
      role={role}
      minHeight={minHeight}
      height={height}
      width={width}
      margintop={marginTop}
      marginbottom={marginBottom}
      styles={styles}
    >
      {children}
    </FrameWrapper>
  )
}

export default FrameLayout;
