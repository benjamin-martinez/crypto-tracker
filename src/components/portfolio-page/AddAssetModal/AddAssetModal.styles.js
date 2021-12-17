import styled, { keyframes } from "styled-components";

const fadeInBackground = keyframes`
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 50%;
  }
`;

const fadeInForeground = keyframes`
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
`;

export const BackgroundOuterWrapper = styled.div``;

export const BackgroundInnerWrapper = styled.div`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background: black;
  opacity: 50%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  animation: ${fadeInBackground} 1s ease-out;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: ${(props) => props.height / 2 - 403 / 2}px;
  left: ${(props) => props.width / 2 - 870 / 2}px;
  background: ${(props) => props.theme.card.active};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 870px;
  height: 403px;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
  z-index: 11;
  animation-delay: 0.5s;
  animation: ${fadeInForeground} 0.5s ease-out;
`;

export const ContentWrapper = styled.div`
  position: relative;
  padding-top: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  justify-content: center;
`;

export const ModalTitleWrapper = styled.div``;

export const ModalContentWrapper = styled.div`
  display: flex;
  gap: 41px;
`;

export const ModalSelectorsWrapper = styled.div`
  display: grid;
  gap: 18px;
`;

export const ModalSelectorWrapper = styled.div`
  width: 406px;
  height: 53px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  display: flex;
  align-items: center;
`;

export const SearchCoinInput = styled.input`
  margin-left: 28px;
  background: none;
  border: none;
  height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${(props) => props.theme.color};
  &:focus {
    outline: none;
  }
`;

export const DateSelector = styled.input`
  margin-left: 27px;
  margin-right: 27px;
  width: 100%;
  background: none;
  border: none;
  font-size: 15px;
  color: ${(props) => props.theme.color};
  :hover {
    cursor: pointer;
  }
  ::-webkit-calendar-picker-indicator {
    filter: invert(${(props) => (props.theme.color === "#ffffff" ? "1" : "0")});
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const ExitButton = styled.img`
  position: absolute;
  top: 32px;
  right: 30px;
  width: 31px;
  height: 31px;
  :hover {
    cursor: pointer;
  }
`;

export const ModalButton = styled.div`
  height: 48px;
  width: 235px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.white ? "white" : props.theme.money.green)};
  color: ${(props) => (props.white ? props.theme.money.green : "white")};
  :hover {
    cursor: pointer;
  }
`;

export const CoinIcon = styled.img`
  height: 28px;
  width: 28px;
`;

export const CoinImageWrapper = styled.div`
  height: 66px;
  width: 66px;
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const IdOuterWrapper = styled.div`
  height: 186px;
  width: 163px;
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const IdInnerWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
