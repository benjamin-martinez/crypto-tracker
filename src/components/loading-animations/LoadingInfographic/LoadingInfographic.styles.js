import styled, { keyframes } from "styled-components";

const shimmer = keyframes` 
  0% {
    background-position: 0px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

export const Wrapper = styled.div`
  height: 55px;
  width: 906px;
  background: ${(props) => props.theme.card.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const InnerWrapper = styled.div`
  height: 12px;
  width: 95%;
  border-radius: 45px;
  background: ${(props) => props.theme.card.active};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.background} 4%,
    ${(props) => props.theme.card.active} 25%,
    ${(props) => props.theme.background} 36%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
`;
