import styled from "styled-components"

export const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
    display: grid;
    justify-items: center;
    gap: 28px;
    color: ${props => props.theme.color};
`;

export const SectionWrapper = styled.div`
    display: flex;
    gap: 75px;
    justify-items: center;
    align-items: center;
`;

export const Selector = styled.select``;

export const Summary = styled.div``;

export const Title = styled.div`
    margin-top:50px;
    margin-bottom: 50px;
`;

export const CoinId = styled.div`
    height: 379px;
    width: 258px;
    display: grid;
    gap: 20px;
`;

export const CoinName = styled.span``;

export const IconWrapper = styled.div`
    background: ${props => props.theme.card.active};
    border-radius: 10px;
    width: 104px;
    height:104px;
    display: grid;
    justify-items: center;
    align-items: center;
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

export const Icon = styled.img`
    height: 44px;
    width: 44px;
`;

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

export const PriceDetails = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    height: 379px;
    width: 463px;
    display: grid;
    justify-content: center;
    align-items: center;
`;

export const MarketDetailsBottom = styled.div``;

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

export const PriceText = styled.span`
    color: ${props => props.price >= 0 ? props.theme.money.green : props.theme.money.red};
    line-height: 0px;
`;

export const PriceRangeDetailsWrapper = styled.div``;

export const PriceRangeTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ATPriceWrapper = styled.div`
    display: flex;
    gap: 4px;
`;

export const PriceRangeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const ProfitWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const PercentWrapper = styled.span`
    display: flex;
    gap: 4px;
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

export const Description = styled.div`
    display: grid;
    gap: 28px;
`;

export const TextWrapper = styled.div`
    width: 1424px;
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const InnerTextWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
    padding-right: 27px;
    padding-left:27px;
    padding-top: 5px;
    padding-bottom: 52px;
`;

export const DescText = styled.div`
    line-height: 160% !important;
    text-align: center;
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap:19px;
`;

export const InteractiveWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const ConversionWrapper = styled.div`
    display: flex;
    align-items: center;
    gap:32px;
`;

export const CoinInput = styled.div`
    display: flex;
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

export const BackgroundChartWrapper = styled.div``;

export const LinkIcon = styled.img`
    width: 13px;
    height: 13px;
    position: absolute;
    left: 20px;
`;

export const CopyIcon = styled.img`
    position: absolute;
    right: 18px;
    height: 20px;
    width: 20px;
`;

export const ConversionArrowsIcon = styled.img`
    width: 24px;
    height: 18px;
`;

export const StackIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-top:24px;
    margin-bottom: 24px;
`;