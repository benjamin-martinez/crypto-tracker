import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 25px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 40px;
`;

export const ChartsWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 45px;
`;

export const SectionWrapper = styled.div`
  color: ${(props) => props.theme.color};
`;

export const HeadingDiv = styled.div``;

export const HeadingDropdown = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.card.active};
  padding: 8px;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  gap: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  z-index: 10;
`;

export const DropdownSelectionWrapper = styled.div`
  width: 100%;
  padding: 2px;
  padding-left: 8px;
  border-radius: 10px;
  :hover {
    background: ${(props) => props.theme.card.background};
  }
`;

export const CoinTableWrapper = styled.div``;

export const MobileChartsWrapper = styled.div`
  display: grid;
`;
