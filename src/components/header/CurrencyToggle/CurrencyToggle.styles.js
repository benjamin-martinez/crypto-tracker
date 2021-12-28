import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Wrapper = styled.div`
    height: 63px;
    width: 135px;
    position: relative;
    background: ${props => props.theme.card.active};
    border-radius: 10px;
`;

export const CurrencyWrapper = styled.div`
    display: flex;
    height: 63px;
    width: 135px;
    align-items: center;
    justify-items: center;
    gap:15px;
    border-radius: 10px;

    :hover {
        cursor: pointer;
    }
`;

export const Icon = styled.div`
    color: ${props => props.theme.money.green};
    display: grid;
    justify-items: center;
    align-items: center;
    margin-left: 10px;
    height: 33px;
    width: 33px;
    border-radius: 50%;
    background: ${props => props.theme.money.background};
`;

export const CurrentCurrency = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;

    
`;

export const Dropdown = styled.div`
    position: absolute;
    width: 135px;
    background: ${props => props.theme.card.active};
    border-radius: 10px;
    top: 83px;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    animation: ${fadeIn} .1s ease-in-out;
    display: grid;
    padding: 10px;
`;

export const DropdownCurrencyOuterWrapper = styled.div`
height: 63px;
width: 135px;
display: grid;
border-radius: 10px;
:hover {
    cursor: pointer;
    background: ${props => props.theme.card.background}
}
`;

export const DropdownCurrencyInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap:15px;
    border-radius: 10px;
    `;