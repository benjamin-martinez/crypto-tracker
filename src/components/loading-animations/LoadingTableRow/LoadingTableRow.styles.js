import styled, { keyframes } from "styled-components";

const shimmer = keyframes` 
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

export const Wrapper = styled.tbody`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 89px;
    width: 100%;

`;

export const InnerWrapper = styled.div`
    border-radius: 10px;
    height: 16px;
    width: 100%;
    background: linear-gradient(to right, ${props => props.theme.background} 4%, ${props => props.theme.card.active} 25%, ${props => props.theme.background} 36%);
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;
`;