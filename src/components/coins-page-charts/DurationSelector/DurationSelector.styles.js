import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    right: 21px;
    top:21px;
    width: 331px;
    height: 43px;
    background: ${props => props.theme.card.active};
    border-radius: 10px;
`;

export const ContentWrapper = styled.div`
    width: 331px;
    height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;


export const SWrapper = styled.div`
    height: 34px;
    width: 34px;
    color: ${props => props.theme.color};
    display: grid;
    background: ${props => props.active ? props.theme.money.green : "none"};
    border-radius: 5px;
    justify-items: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`;
