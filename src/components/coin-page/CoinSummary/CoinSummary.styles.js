import styled from "styled-components";

export const Wrapper = styled.div`
  margin-left: 10%;
  margin-right: 10%;
`;

export const Title = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  gap: 60px;
  justify-items: center;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CoinId = styled.div`
  height: 303px;
  width: 206px;
  display: grid;
  gap: 16px;
`;

export const IdOuterWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 236px;
  width: 206px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const IdInnerWrapper = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;

export const IconWrapper = styled.div`
  background: ${(props) => props.theme.card.active};
  border-radius: 10px;
  width: 83px;
  height: 83px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 35px;
  width: 35px;
`;

export const CoinName = styled.span``;

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LinkIcon = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  left: 16px;
`;

export const PriceDetails = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 303px;
  width: 370px;
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
  gap: 12px;
`;

export const PercentWrapper = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const ProfitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PriceText = styled.span`
  color: ${(props) =>
    props.price >= 0 ? props.theme.money.green : props.theme.money.red};
  line-height: 0px;
`;

export const StackIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PriceRangeDetailsWrapper = styled.div``;

export const PriceRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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
  width: 215px;
`;

export const DoubleSpanTop = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const MarketDetailsInnerWrapper = styled.div`
  margin-left: 38px;
  margin-top: 23px;
`;

export const MarketDetailsLine = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MarketDetailsLineText = styled.div`
  display: flex;
  gap: 4px;
`;

export const BulletPoint = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 7px;
  background: ${(props) => props.theme.money.blue};
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const MarketDetails = styled.div`
  background: ${(props) => props.theme.card.background};
  border-radius: 10px;
  height: 303px;
  width: 437px;
`;

export const MarketDetailsTop = styled.div`
  margin-bottom: 19px;
`;

export const MarketDetailsMiddle = styled.div``;

export const MarketDetailsBottom = styled.div``;
