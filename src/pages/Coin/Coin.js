import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CoinDescription,
  CoinSummary,
  InteractiveComponent,
} from "components/coin-page";
import { Wrapper, ContentWrapper } from "./Coin.styles";

const Coin = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coin, setCoin] = useState(null);

  const getCoinData = async () => {
    setIsLoading(true);
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${props.match.params.id}?localization=false`
    );
    setIsLoading(false);
    setCoin(data);
  };

  useEffect(() => {
    getCoinData();
    //eslint-disable-next-line
  }, [props.location.pathname]);

  useEffect(() => {
    getCoinData();
  });

  return (
    <Wrapper>
      {coin && (
        <ContentWrapper>
          <CoinSummary coin={coin} />
          <CoinDescription coin={coin} />
          <InteractiveComponent coin={coin} />
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default Coin;
