import styled from "styled-components";

export const OutsideWrapper = styled.div``;

export const Wrapper = styled.table`
    color: ${props => props.theme.color};
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    width: 1712px;
    padding: 45px 21px 21px 21px;
`;

export const HeaderRow = styled.thead`
    text-align: left;
    th {
        line-height: 100%;
    }
`;

export const Pagination = styled.div``;
