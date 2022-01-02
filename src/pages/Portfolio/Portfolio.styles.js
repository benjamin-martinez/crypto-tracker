import styled from "styled-components"

export const Wrapper = styled.div`
    margin-top:74px;
    position: relative;
`;

export const ContentWrapper = styled.div`
    display: grid;
    gap:35px;
    justify-content: center;
`;

export const AddAssetButton = styled.span`
    width: 405px;
    height: 61px;
    display: grid;
    justify-self: center;
    justify-items: center;
    align-items: center;
    border-radius: 10px;
    color: ${props => props.theme.color};
    background: ${props => props.theme.money.green};
    :hover {
        cursor: pointer;
    }
    @media (max-width: 900px) {
        width: 350px;
    }
`;

export const SectionWrapper = styled.div`
    display: grid;
    color: ${props => props.theme.color};
    justify-content: start;
    gap: 50px;

    @media (max-width: 420px) {
        margin-left: 10px;
        margin-right: 10px;
    }
`;

export const AssetWrapper = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
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
    height: 83px;
    width: 83px;
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
`;

export const EditIconWrapper = styled.div`
    height: 30px;
    width: 30px;
    background: ${props => props.theme.card.background};
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 6px;
`;

export const EditIcon = styled.img`
    width: 11px;
    height: 11px;
`;

export const SubSectionContent = styled.div`
    background: ${props => props.theme.card.background};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1430px;
    height: 100px;
`;

export const SubSectionSpan = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const PriceText = styled.p`
    color: ${props => props.theme.money.green};
    font-size: 19px;
`;

export const PriceChangeWrapper = styled.span`
    display: flex;
    gap: 4px;
    align-items: center;
`;