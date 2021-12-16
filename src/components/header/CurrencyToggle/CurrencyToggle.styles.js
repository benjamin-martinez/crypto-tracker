import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
  height: 50px;
  width: 108px;
  position: relative;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  @media (max-width: 900px) {
    width: 76px;
    height: 36px;
  }
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  height: 50px;
  width: 108px;
  align-items: center;
  justify-items: center;
  gap: 12px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 900px) {
    width: 76px;
    height: 36px;
    gap: 10px;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.money.green};
  display: grid;
  justify-items: center;
  align-content: center;
  margin-left: 10px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background: ${(props) => props.theme.money.background};
  @media (max-width: 900px) {
    height: 22px;
    width: 22px;
    margin-left: 4px;
  }
`;

export const CurrentCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 108px;
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  top: 66px;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  animation: ${fadeIn} 0.1s ease-in-out;
  display: grid;
  padding: 10px;

  @media (max-width: 900px) {
    width: 85px;
    padding: 5px;
  }
`;

export const DropdownCurrencyOuterWrapper = styled.div`
  height: 50px;
  width: 108px;
  display: grid;
  border-radius: 10px;
  :hover {
    cursor: pointer;
    background: ${(props) => props.theme.card.background};
  }
  @media (max-width: 900px) {
    height: 43px;
    width: 85px;
  }
`;

export const DropdownCurrencyInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 15px;
  border-radius: 10px;
`;
