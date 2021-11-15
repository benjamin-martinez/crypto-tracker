import React from "react"
import styled from "styled-components"
import { NeutralDot, UpArrow } from "styles/arrows";
import { NavText } from "styles/Fonts";
import { Slider, SliderWrapper } from "styles/sliders";

export default class Infographic extends React.Component {
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    <CoinsExchangesWrapper>
                        <Coins>
                            <NavText>Coins 6969</NavText>
                        </Coins>
                        <Exchanges>
                            <NavText>Exchanges 420</NavText>
                        </Exchanges>
                    </CoinsExchangesWrapper>
                    <MarketCap>
                        <NeutralDot background="white" />
                        <PriceWrapper>
                            <NavText>$1.67 T</NavText>
                            <UpArrow />
                        </PriceWrapper>
                    </MarketCap>
                    <Volume>
                        <NeutralDot background="white" />
                        <PriceWrapper>
                            <NavText>$100.00M</NavText>
                            <SliderWrapper height="13px" width="55px" background="#2172E5">
                                <Slider width="28" background="#ffffff" />
                            </SliderWrapper>
                        </PriceWrapper>
                    </Volume>
                    <BtcDominance>
                        <Icon src="icons/btcdom.svg" />
                        <NavText>44%</NavText>
                        <SliderWrapper height="13px" width="55px" background="#2172E5">
                            <Slider width="44" background="#ffffff" />
                        </SliderWrapper>
                    </BtcDominance>
                    <EthDominance>
                        <Icon src="icons/ethdom.svg" />
                        <NavText>18%</NavText>
                        <SliderWrapper height="13px" width="55px" background="#2172E5">
                            <Slider width="18" background="#ffffff" />
                        </SliderWrapper>
                    </EthDominance>
                </InnerWrapper>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
height: 55px;
display: grid;
justify-content: center;`;

const InnerWrapper = styled.div`
height: 55px;
width: 906px;
background: ${props => props.theme.card.background};
display: flex;
justify-content: space-between;
align-items: center;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;`;

const Coins = styled.div`
`;

const Exchanges = styled.div``;

const CoinsExchangesWrapper = styled.div`
margin-left:53px;
display: flex;
gap:42px;
align-items: center;`;


const MarketCap = styled.div`
display: flex;
align-items: center;
gap: 13px;`;

const PriceWrapper = styled.div`
display: flex;
align-items: center;
gap: 6px;
`;


const Volume = styled.div`
display: flex;
align-items: center;
gap: 13px;`;

const Icon = styled.img``;

const BtcDominance = styled.div`
display: flex;
align-items: center;
gap: 4px;`;

const EthDominance = styled.div`
display: flex;
align-items: center;
gap: 4px;
margin-right: 53px;`;