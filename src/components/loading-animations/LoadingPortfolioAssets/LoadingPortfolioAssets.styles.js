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
  display: flex;
  width: 100%;
  gap: 50px;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
display: flex;
width: 100%;
gap: 24px;
align-items: center;
@media (max-width: 900px) {
  flex-direction: column;
}`;

export const InnerDiv1 = styled.div`
  height: 236px;
  width: 206px;
  background: ${(props) => props.theme.card.active};
    background: linear-gradient(
      to right,
      ${(props) => props.theme.card.background} 4%,
      ${(props) => props.theme.card.active} 25%,
      ${(props) => props.theme.card.background} 36%
    );
    background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: 10px;
`;

export const InnerDiv2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 45px;
`;

export const Layer = styled.div`
  width: 700px;
  height: 85px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.active};
    background: linear-gradient(
      to right,
      ${(props) => props.theme.card.background} 4%,
      ${(props) => props.theme.card.active} 25%,
      ${(props) => props.theme.card.background} 36%
    );
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;

  @media (max-width: 900px) {
    width: 300px;   
  }
`;
