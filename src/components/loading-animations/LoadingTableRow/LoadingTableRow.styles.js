import styled from "styled-components";

export const Wrapper = styled.tbody`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 89px;
    width: 100%;

`;

export const InnerWrapper = styled.div`
height: 16px;
width: 100%;
background: ${props => props.theme.card.active};
`;