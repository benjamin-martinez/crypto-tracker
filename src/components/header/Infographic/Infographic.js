import React from "react";
import axios from "axios";
import { DownArrow, NeutralDot, UpArrow } from "styles/arrows";
import { NavText } from "styles/Fonts";
import { Slider, SliderWrapper } from "styles/sliders";
import { Wrapper, Volume, PriceWrapper, BtcDominance, Exchanges, MarketCap, Icon, EthDominance, InnerWrapper, CoinsExchangesWrapper, Coins } from "./Infographic.styles";

export default class Infographic extends React.Component {
    state = {
        numCoins: 0,
        numExchanges: 0,
        marketCap: 0,
        marketCapChange: 0,
        volume: 0,
        btcDom: 0,
        ethDom: 0,
        isLoading: false
    }
    getGlobalCryptoData = async () => {
        try {
            this.setState({isLoading: true})
            const { data } = await axios("https://api.coingecko.com/api/v3/global");
            this.setState({
                isLoading: false,
                hasError: false,
                numCoins: data.data.active_cryptocurrencies,
                numExchanges: data.data.markets,
                btcDom: data.data.market_cap_percentage.btc,
                ethDom: data.data.market_cap_percentage.eth,
                marketCap: data.data.total_market_cap.usd,
                marketCapChange: data.data.market_cap_change_percentage_24h_usd,
                volume: data.data.total_volume.usd
            })
        }
        catch (err) {
            console.log(err);
            this.setState({
                isLoading: false,
                hasError: true
            })
        }
    }
    componentDidMount() {
        this.getGlobalCryptoData();
    }
    render() {
        return (
            <Wrapper>
                <InnerWrapper>
                    <CoinsExchangesWrapper>
                        <Coins>
                            <NavText>Coins {this.state.numCoins}</NavText>
                        </Coins>
                        <Exchanges>
                            <NavText>Exchanges {this.state.numExchanges}</NavText>
                        </Exchanges>
                    </CoinsExchangesWrapper>
                    <MarketCap>
                        <NeutralDot background="white" />
                        <PriceWrapper>
                            <NavText>{(this.state.marketCap/1.0e+12).toFixed(2)} T</NavText>
                            {this.state.marketCapChange > 0 ? <UpArrow /> : <DownArrow />}
                        </PriceWrapper>
                    </MarketCap>
                    <Volume>
                        <NeutralDot background="white" />
                        <PriceWrapper>
                            <NavText>{(this.state.volume/1.0e+9).toFixed(2)} B</NavText>
                            <SliderWrapper height="13px" width="55px" background="#2172E5">
                                <Slider width="28" background="#ffffff" />
                            </SliderWrapper>
                        </PriceWrapper>
                    </Volume>
                    <BtcDominance>
                        <Icon src="icons/btcdom.svg" />
                        <NavText>{Math.round(this.state.btcDom)}%</NavText>
                        <SliderWrapper height="13px" width="55px" background="#2172E5">
                            <Slider width={Math.round(this.state.btcDom)} background="#ffffff" />
                        </SliderWrapper>
                    </BtcDominance>
                    <EthDominance>
                        <Icon src="icons/ethdom.svg" />
                        <NavText>{Math.round(this.state.ethDom)}%</NavText>
                        <SliderWrapper height="13px" width="55px" background="#2172E5">
                            <Slider width={Math.round(this.state.ethDom)} background="#ffffff" />
                        </SliderWrapper>
                    </EthDominance>
                </InnerWrapper>
            </Wrapper>
        )
    }
}
