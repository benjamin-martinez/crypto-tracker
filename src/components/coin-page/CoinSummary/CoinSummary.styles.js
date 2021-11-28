import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div`
    margin-top:50px;
    margin-bottom: 50px;
`;

export const SectionWrapper = styled.div`
    display: flex;
    gap: 75px;
    justify-items: center;
    align-items: center;
`;

export const CoinId = styled.div`
    height: 379px;
    width: 258px;
    display: grid;
    gap: 20px;
`;

export const IdOuterWrapper = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 295px;
    width: 258px;   
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const IdInnerWrapper = styled.div`
    display: grid;
    gap:7px;
    justify-items: center;
`;

export const IconWrapper = styled.div`
    background: ${props => props.theme.card.active};
    border-radius: 10px;
    width: 104px;
    height:104px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const Icon = styled.img`
    height: 44px;
    width: 44px;
`;

export const CoinName = styled.span``;

export const LinkWrapper = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const LinkIcon = styled.img`
    width: 13px;
    height: 13px;
    position: absolute;
    left: 20px;
`;

export const PriceDetails = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 379px;
    width: 463px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const PriceDetailsInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PriceWrapper = styled.div`
    display: flex;
    gap: 14px;
`;

export const PercentWrapper = styled.span`
    display: flex;
    gap: 4px;
    align-items: center;   
`;

export const ProfitWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const PriceText = styled.span`
    color: ${props => props.price >= 0 ? props.theme.money.green : props.theme.money.red};
    line-height: 0px;
`;

export const StackIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-top:24px;
    margin-bottom: 24px;
`;

export const PriceRangeDetailsWrapper = styled.div``;

export const PriceRangeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const PriceRangeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ATPriceWrapper = styled.div`
    display: flex;
    gap: 4px;
`;

export const DoubleSpan = styled.span`
    display: grid;
    width: 269px;`;

export const DoubleSpanTop = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const MarketDetailsInnerWrapper = styled.div`
    margin-left: 48px;
    margin-top: 29px;
`;

export const MarketDetailsLine = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const MarketDetailsLineText = styled.div`
    display: flex;
    gap: 4px;
`;

export const BulletPoint = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 7px;
    background: ${props => props.theme.money.blue};
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const MarketDetails = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 379px;
    width: 546px;
`;

export const MarketDetailsTop = styled.div`
    margin-bottom: 22px;`;

export const MarketDetailsMiddle = styled.div``;

export const MarketDetailsBottom = styled.div``;