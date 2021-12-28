import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    gap: 30px;
    margin-top: 47px;
    margin-bottom: 21px;
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

export const ConversionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:26px;
`;

export const CoinInput = styled.div`
    display: flex;
`;

export const Name = styled.div`
    height: 36px;
    width: 65px;
    background: ${props => props.theme.money.green};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: grid;
    justify-items: center;
    align-content: center;
`;

export const InputPriceDiv = styled.div`
    width: 198px;
    height: 36px;
    background: ${props => props.theme.card.active};
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 16px;

    :hover {
        cursor: text
    }
`;

export const Input = styled.input`
    background: none;
    border: none;
    color: white;`;

export const ConversionArrowsIcon = styled.img`
    width: 20px;
    height: 14px;
`;