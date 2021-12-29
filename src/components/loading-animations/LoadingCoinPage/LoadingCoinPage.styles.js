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
  margin-top: 100px;
  gap: 60px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
`;

export const FirstWrapper = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LoadingCoinId = styled.div`
  height: 303px;
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

export const LoadingPriceWrapper = styled.div`
  height: 303px;
  width: 370px;
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

export const LoadingMarketDetailsWrapper = styled.div`
  height: 303px;
  width: 497px;
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

export const LoadingCoinDescription = styled.div`
  width: 1133px;
  height: 300px;
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
  @media (max-width: 1100px) {
    width: 636px;
  }
  @media (max-width: 900px) {
    width: 437px;
  }
`;
