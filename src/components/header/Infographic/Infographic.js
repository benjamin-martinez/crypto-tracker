import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { getInfographicData } from "store/infographic/actions";
import { LoadingInfographic } from "components/loading-animations";
import { DownArrow, NeutralDot, UpArrow } from "styles/arrows";
import { NavText } from "styles/Fonts";
import { Slider, SliderWrapper } from "styles/sliders";
import BtcDomSVG from "media/icons/btcdom.svg";
import EthDomSVG from "media/icons/ethdom.svg";
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
  const isLoading = useSelector((state) => state.infographic.isLoading);
  const isFetched = useSelector((state) => state.infographic.isFetched);
  const [hasError, setHasError] = useState(false);
  const [dominance, setDominance] = useState({
    eth: 0,
    btc: 0,
  });
  const activeCurrency = useSelector(getActiveCurrency);
  const data = useSelector((state) => state.infographic.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfographicData());
  }, []);

  console.log(data);
  return (
    <Wrapper>
      {isLoading && !isFetched && <LoadingInfographic />}
      {!isLoading && isFetched && (
        <InnerWrapper>
          <CoinsExchangesWrapper>
            <Coins>
              <NavText>Coins {data.active_cryptocurrencies}</NavText>
            </Coins>
            <Exchanges>
              <NavText>Exchanges {data.markets}</NavText>
            </Exchanges>
          </CoinsExchangesWrapper>
          <MarketCap>
            <NeutralDot background="white" />
            <PriceWrapper>
              <NavText>
                {addDecimalsAndShorten(
                  data.total_market_cap[activeCurrency.name]
                )}
              </NavText>
              {data[`market_cap_change_percentage_24h_${activeCurrency.name}`] >
              0 ? (
                <UpArrow />
              ) : (
                <DownArrow />
              )}
            </PriceWrapper>
          </MarketCap>
          <Volume>
            <NeutralDot background="white" />
            <PriceWrapper>
              <NavText>
                {addDecimalsAndShorten(data.total_volume[activeCurrency.name])}
              </NavText>
              <SliderWrapper height="13px" width="55px" background="#2172E5">
                <Slider width="28" background="#ffffff" />
              </SliderWrapper>
            </PriceWrapper>
          </Volume>
          <BtcDominance>
            <Icon src={BtcDomSVG} />
            <NavText>{Math.round(data.market_cap_percentage.btc)}%</NavText>
            <SliderWrapper height="13px" width="55px" background="#2172E5">
              <Slider
                width={Math.round(data.market_cap_percentage.btc)}
                background="#ffffff"
              />
            </SliderWrapper>
          </BtcDominance>
          <EthDominance>
            <Icon src={EthDomSVG} />
            <NavText>{Math.round(data.market_cap_percentage.eth)}%</NavText>
            <SliderWrapper height="13px" width="55px" background="#2172E5">
              <Slider
                width={Math.round(data.market_cap_percentage.eth)}
                background="#ffffff"
              />
            </SliderWrapper>
          </EthDominance>
        </InnerWrapper>
      )}
    </Wrapper>
  );
};

export default Infographic;
