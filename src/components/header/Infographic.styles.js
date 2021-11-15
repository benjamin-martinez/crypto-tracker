import styled from "styled-components";

export const Wrapper = styled.div`
height: 55px;
display: grid;
justify-content: center;`;

export const InnerWrapper = styled.div`
height: 55px;
width: 906px;
background: ${props => props.theme.card.background};
display: flex;
justify-content: space-between;
align-items: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`;

export const Coins = styled.div`
`;

export const Exchanges = styled.div``;

export const CoinsExchangesWrapper = styled.div`
margin-left:53px;
display: flex;
gap:42px;
align-items: center;`;


export const MarketCap = styled.div`
display: flex;
align-items: center;
gap: 13px;`;

export const PriceWrapper = styled.div`
display: flex;
align-items: center;
gap: 6px;
`;


export const Volume = styled.div`
display: flex;
align-items: center;
gap: 13px;`;

export const Icon = styled.img``;

export const BtcDominance = styled.div`
display: flex;
align-items: center;
gap: 4px;`;

export const EthDominance = styled.div`
display: flex;
align-items: center;
gap: 4px;
margin-right: 53px;`;