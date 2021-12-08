import styled from "styled-components"

export const Wrapper = styled.div`
    padding-left: 21px;
    padding-right: 21px;
    padding-top:21px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.color};
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
    background: ${props => props.selected ? props.theme.money.green : props.theme.card.active};
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