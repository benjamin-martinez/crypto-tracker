import styled from "styled-components"

export const Wrapper = styled.div`
    justify-self: end;
    width: 752px;
    height: 449px;
    padding: 21px;
    position: relative;
    border-radius: 10px;
    background: ${props => props.theme.card.background}`;
;

export const SubWrapper = styled.div`
    position: absolute;
    bottom: 21px;
    left: 72px;
`;

export const TextWrapper = styled.div`
    position: absolute;
    top: 21px;
    left: 21px;
    color: ${props => props.theme.color};
`;
