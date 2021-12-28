import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 47px;
    margin-bottom: 22px;
    @media (max-width: 900px) {
        gap: 20px;
    }
`;

export const ButtonSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 7px;
`;

export const RadioButton = styled.span`
    height: 22px;
    width: 22px;
    border: solid 1px ${props => props.theme.money.green};
    border-radius: 50%;
    background: ${props => props.isSelected === true ? props.theme.money.green : "none"};
    box-shadow: ${props => props.isSelected === true && `0px 0px 0px 5px rgba(0, 255, 95, .25)`};
    :hover {
        cursor: pointer;
    }
`;

export const ButtonLabel = styled.label`
    line-height: 0px;
`;