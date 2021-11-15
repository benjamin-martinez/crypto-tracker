import React from "react"
import { Wrapper, Volume, PriceWrapper, BtcDominance, Exchanges, MarketCap, Icon, EthDominance, InnerWrapper, CoinsExchangesWrapper, Coins } from "./Infographic.styles"
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
