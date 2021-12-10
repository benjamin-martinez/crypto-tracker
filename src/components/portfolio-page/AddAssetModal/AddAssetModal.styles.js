import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1920px;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background: ${(props) => props.theme.card.active};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  width: 1087px;
  height: 504px;
  border-radius: 10px;
  color: ${(props) => props.theme.color};
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
  width: 508px;
  height: 66px;
  border-radius: 10px;
  background: ${(props) => props.theme.card.background};
  display: flex;
  align-items: center;
`;

export const SearchCoinInput = styled.input`
  margin-left: 34px;
  background: none;
  border: none;
  height: 20px;
  font-size: 19px;
  color: ${(props) => props.theme.color};
`;

export const DateSelector = styled.input`
  margin-left: 34px;
  background: none;
  border: none;
  font-size: 19px;
  color: ${(props) => props.theme.color};
  :hover {
    cursor: pointer;
  }
  ::-webkit-calendar-picker-indicator {
    filter: ${(props) => props.theme.color === "#ffffff" && "invert(1)"};
  }
`;

export const ModalButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const ExitButton = styled.img`
  position: absolute;
  top: 33px;
  right: 38px;
  width: 39px;
  height: 39px;
  :hover {
    cursor: pointer;
  }
`;

export const ModalButton = styled.div`
  height: 60px;
  width: 294px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.white === true ? "#ffffff" : props.theme.money.green};
  color: ${(props) =>
    props.white === true ? props.theme.money.green : "#ffffff"};
  :hover {
    cursor: pointer;
  }
`;

export const CoinIcon = styled.img`
  height: 35px;
  width: 35px;
`;

export const CoinImageWrapper = styled.div`
  height: 83px;
  width: 82px;
  background: ${(props) => props.theme.background};
  border-radius: 10px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const IdOuterWrapper = styled.div`
  height: 233px;
  width: 204px;
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
