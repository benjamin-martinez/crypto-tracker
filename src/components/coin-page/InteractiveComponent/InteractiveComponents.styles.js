import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    gap: 37px;
    margin-top: 58px;
    margin-bottom: 27px;
`;

export const ButtonSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RadioButton = styled.span`
    height: 27px;
    width: 27px;
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

export const ConversionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:32px;
`;

export const CoinInput = styled.div`
    display: flex;
`;

export const Name = styled.div`
    height: 45px;
    width: 83px;
    background: ${props => props.theme.money.green};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const InputPrice = styled.div`
    width: 248px;
    height: 45px;
    background: ${props => props.theme.card.active};
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 19px;
`;

export const ConversionArrowsIcon = styled.img`
    width: 24px;
    height: 18px;
`;