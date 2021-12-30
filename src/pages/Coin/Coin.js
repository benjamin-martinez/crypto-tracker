import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCoinData } from "store/coin/actions";
import { getActiveCurrency } from "store/currencies";
import {
  CoinDescription,
  CoinSummary,
  InteractiveComponent,
} from "components/coin-page";
import { Wrapper, ContentWrapper } from "./Coin.styles";
import LoadingCoinPage from "components/loading-animations/LoadingCoinPage";

const Coin = (props) => {
  const activeCurrency = useSelector(getActiveCurrency);
  const isLoading = useSelector((state) => state.coin.isLoading);
  const coin = useSelector((state) => state.coin.data);
  const dispatch = useDispatch();

  useEffect(() => {}, [activeCurrency]);

  useEffect(() => {
    dispatch(getCoinData(props.match.params.id));
    //eslint-disable-next-line
  }, [props.location.pathname]);

  return (
    <Wrapper>
      {coin.id ? (
        <ContentWrapper>
          <CoinSummary coin={coin} isLoading={isLoading} />
          <CoinDescription coin={coin} isLoading={isLoading} />
          <InteractiveComponent coin={coin} isLoading={isLoading} />
        </ContentWrapper>
      ) : (
        <LoadingCoinPage />
      )}
    </Wrapper>
  );
};

export default Coin;
