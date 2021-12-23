import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const IdOuterWrapper = styled.div`
    height: 236px;
    width: 206px;
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const IdInnerWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const CoinIcon = styled.img`
    height: 35px;
    width: 35px;
`;

export const CoinImageWrapper = styled.div`
    height: 86px;
    width: 86px;
    background: ${props => props.theme.background};
    border-radius: 10px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

export const PriceDataWrapper = styled.div`
  display: grid;
  height: 100%;
`;

export const MarketDataWrapper = styled.div`
    display: grid;
    align-items: space-between; 
`;

export const SubSectionHeadingWrapper = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const EditIconWrapper = styled.div`
  height: 37px;
  width: 37px;
  background: ${(props) => props.theme.card.background};
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 6px;
`;

export const EditIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const SubSectionContent = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-right: 45px;
    padding-left: 45px;
    gap: 45px;
    @media (max-width: 900px) {
        flex-direction: column;
        padding-right: 45px;
        padding-left: 45px;
        gap: 0px;
    }
`;

export const SubSectionSpan = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PriceText = styled.p`
  color: ${(props) =>
    props.isNegative ? props.theme.money.red : props.theme.money.green};
  font-size: 15px;
`;

export const PriceChangeWrapper = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
`;
