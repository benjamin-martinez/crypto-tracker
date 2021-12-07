import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { DownArrow, NeutralDot, UpArrow } from "styles/arrows";
import { NavText } from "styles/Fonts";
import { Slider, SliderWrapper } from "styles/sliders";
import {
  Wrapper,
  Volume,
  PriceWrapper,
  BtcDominance,
  Exchanges,
  MarketCap,
  Icon,
  EthDominance,
  InnerWrapper,
  CoinsExchangesWrapper,
  Coins,
} from "./Infographic.styles";
import { addDecimalsAndShorten } from "utils";

const Infographic = (props) => {
  const [numCoins, setNumCoins] = useState(0);
  const [numExchanges, setNumExchanges] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [marketCapChange, setMarketCapChange] = useState(0);
  const [volume, setVolume] = useState(0);
  const [btcDom, setBtcDom] = useState(0);
  const [ethDom, setEthDom] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [dominance, setDominance] = useState({
    eth: 0,
    btc: 0
  })
  const activeCurrency = useSelector(getActiveCurrency)
  const getGlobalCryptoData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setIsLoading(false);
      setHasError(false);
      setNumCoins(data.data.active_cryptocurrencies);
      setNumExchanges(data.data.markets);
      const { btc, eth } = data.data.market_cap_percentage;
      setDominance({btc, eth})
      setBtcDom(data.data.market_cap_percentage.btc);
      setEthDom(data.data.market_cap_percentage.eth);
      setMarketCap(data.data.total_market_cap[activeCurrency.name]);
      setMarketCapChange(data.data[`market_cap_change_percentage_24h_${activeCurrency.name}`]);
      setVolume(data.data.total_volume[activeCurrency.name]);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getGlobalCryptoData();
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <CoinsExchangesWrapper>
          <Coins>
            <NavText>Coins {numCoins}</NavText>
          </Coins>
          <Exchanges>
            <NavText>Exchanges {numExchanges}</NavText>
          </Exchanges>
        </CoinsExchangesWrapper>
        <MarketCap>
          <NeutralDot background="white" />
          <PriceWrapper>
            <NavText>{addDecimalsAndShorten(marketCap)}</NavText>
            {marketCapChange > 0 ? <UpArrow /> : <DownArrow />}
          </PriceWrapper>
        </MarketCap>
        <Volume>
          <NeutralDot background="white" />
          <PriceWrapper>
            <NavText>{(volume / 1.0e9).toFixed(2)} B</NavText>
            <SliderWrapper height="13px" width="55px" background="#2172E5">
              <Slider width="28" background="#ffffff" />
            </SliderWrapper>
          </PriceWrapper>
        </Volume>
        <BtcDominance>
          <Icon src="icons/btcdom.svg" />
          <NavText>{Math.round(btcDom)}%</NavText>
          <SliderWrapper height="13px" width="55px" background="#2172E5">
            <Slider width={Math.round(btcDom)} background="#ffffff" />
          </SliderWrapper>
        </BtcDominance>
        <EthDominance>
          <Icon src="icons/ethdom.svg" />
          <NavText>{Math.round(ethDom)}%</NavText>
          <SliderWrapper height="13px" width="55px" background="#2172E5">
            <Slider width={Math.round(ethDom)} background="#ffffff" />
          </SliderWrapper>
        </EthDominance>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Infographic;
