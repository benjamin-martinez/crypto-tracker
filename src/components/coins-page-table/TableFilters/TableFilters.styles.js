import styled from "styled-components";

export const Wrapper = styled.div`
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 21px;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap:16px;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color};
`;

export const OrderBy = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DirectionToggle = styled.div`
  display: flex;
  align-items: center;
  justify-items: space-around;
  flex-direction: column;
  gap: 4px;
  :hover {
    cursor: pointer;
  }
`;

export const Categories = styled.div`
  display: flex;
  gap: 12px;
`;

export const CatWrapper = styled.div`
  background: ${(props) =>
    props.selected ? props.theme.money.green : props.theme.card.active};
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
  :hover {
    cursor: pointer;
  }
`;

export const TableNav = styled.div`
  display: flex;
  gap: 12px;
`;

export const RowSelectorWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const RowsSelection = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  background: ${(props) => props.theme.card.active};
  padding: 4px 8px;
  border-radius: 10px;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

export const RowsDropdown = styled.div`
  position: absolute;
  top: 40px;
  left: 0px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.card.active};
  padding: 8px;
  border-radius: 10px;
  justify-items: center;
  align-items: center;
  gap: 2px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const SelectionWrapper = styled.div`
width: 100%;
padding: 2px;
border-radius: 10px;
:hover {
    background: ${props => props.theme.card.background}
}`;

export const PageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
