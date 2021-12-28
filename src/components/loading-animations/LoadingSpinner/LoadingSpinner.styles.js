import styled, { keyframes } from "styled-components";

const spinner = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  100% {
    transform:  rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  animation: 1.5s linear infinite ${spinner};
  animation-play-state: inherit;
  border: solid 5px ${props => props.theme.card.active};
  border-bottom-color: ${props => props.theme.money.green};
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
