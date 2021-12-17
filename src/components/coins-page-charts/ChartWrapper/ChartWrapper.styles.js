import styled, { css, keyframes } from "styled-components";

const fadeOutLeft = keyframes`
  0% {
    transform: translateX(0);
    opacity: 100%
  }
  100% {
    transform: translateX(-150px);
    opacity: 0%;
  }
`;
const fadeOutRight = keyframes`
  0% {
    transform: translateX(0);
    opacity: 100%
  }
  100% {
    transform: translateX(150px);
    opacity: 0%;
  }
`;

export const Wrapper = styled.div`
  display: ${(props) => !props.visible && !props.responsive && "none"};
  justify-self: start;
  width: 602px;
  height: 359px;
  padding: 13px;
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};

  @media (max-width: 900px) {
    width: 361px;
    height: 215px;
  }
`;

export const SubWrapper = styled.div`
  position: absolute;
  bottom: 21px;
  left: 47px;
  @media (max-width: 900px) {
    left: 28px;
    bottom: 13px;
  }
`;

export const ErrorWrapper = styled.div`
  justify-self: start;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 602px;
  height: 359px;
  padding: 21px;
  position: relative;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  @media (max-width: 900px) {
    width: 361px;
    height: 215px;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 21px;
  left: 21px;
  color: ${(props) => props.theme.color};
`;
