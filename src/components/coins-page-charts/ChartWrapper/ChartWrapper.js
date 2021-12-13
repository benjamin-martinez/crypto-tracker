import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getChartData } from "store/charts/action";
import { getActiveCurrency } from "store/currencies";
import {
  BarChart,
  DurationSelector,
  LineChart,
} from "components/coins-page-charts";
import { addCommas, addDecimalsAndShorten, convertDurationToUnix } from "utils";
import { ChartHeaderText, ChartSubText } from "styles/Fonts";
import { Wrapper, TextWrapper, SubWrapper } from "./ChartWrapper.styles";
import {
  LoadingBarChart,
  LoadingLineChart,
} from "components/loading-animations";

const ChartWrapper = (props) => {
  const dispatch = useDispatch();
  const [activeToken, setActiveToken] = useState("BTC");
  const [activePrice, setActivePrice] = useState("0.00");
  const [activeDate, setActiveDate] = useState("Nov 17, 2021");
  const [isPriceSet, setIsPriceSet] = useState(false)
  const tokenPriceHistory = useSelector((state) => state.charts.lineData);
  const tokenVolumeHistory = useSelector((state) => state.charts.barData);
  const [durations, setDurations] = useState([
    {
      length: "1d",
      active: true,
    },
    {
      length: "1w",
      active: false,
    },
    {
      length: "1m",
      active: false,
    },
    {
      length: "3m",
      active: false,
    },
    {
      length: "6m",
      active: false,
    },
    {
      length: "1y",
      active: false,
    },
  ]);
  const activeCurrency = useSelector(getActiveCurrency);
  const isLineLoading = useSelector((state) => state.charts.isLineLoading);
  const isBarLoading = useSelector((state) => state.charts.isBarLoading);
  const handleDurationClick = (duration) => {
    const tempArr = durations.map((dur) => {
      return {
        ...dur,
        active: dur.length === duration.length,
      };
    });
    setDurations(tempArr);
  };
  useEffect(() => {
    durations.map(
      (duration) =>
        duration.active &&
        dispatch(
          getChartData(
            activeCurrency,
            convertDurationToUnix(duration.length),
            props.chartType
          )
        )
    );
    //eslint-disable-next-line
  }, [durations]);

  useEffect(() => {
    dispatch(
      getChartData(activeCurrency, convertDurationToUnix("1d"), props.chartType)
    );
    let date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setActiveDate(date);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(
      getChartData(activeCurrency, convertDurationToUnix("1d"), props.chartType)
    );
    let date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setActiveDate(date);
    //eslint-disable-next-line
  }, [activeCurrency]);

  useEffect(() => {

    if (props.chartType === "volume" && tokenVolumeHistory.length > 0 && !isPriceSet) {
      setActivePrice(tokenVolumeHistory[tokenVolumeHistory.length - 1][1]);
      setIsPriceSet(true);
    }
    if (props.chartType === "price" && tokenPriceHistory.length > 0 && !isPriceSet)
      setActivePrice(tokenPriceHistory[tokenPriceHistory.length - 1][1]);
      setIsPriceSet(true);
  }, [tokenVolumeHistory, tokenPriceHistory]);

  return (
    <Wrapper>
      <TextWrapper>
        <ChartSubText>
          {activeToken} {props.chartType === "volume" && "Volume"}
        </ChartSubText>
        <ChartHeaderText>
          {props.chartType === "volume"
            ? activeCurrency.symbol + addDecimalsAndShorten(activePrice)
            : activeCurrency.symbol + addCommas(activePrice)}
        </ChartHeaderText>
        <ChartSubText>{activeDate}</ChartSubText>
      </TextWrapper>
      <DurationSelector
        durations={durations}
        handleDurationClick={handleDurationClick}
      />
      <SubWrapper>
        {props.chartType === "volume"
          ? isBarLoading && <LoadingBarChart />
          : isLineLoading && <LoadingLineChart />}
        {props.chartType === "volume"
          ? !isBarLoading &&
            tokenVolumeHistory &&
            !!tokenVolumeHistory.length && (
              <BarChart totalVolumes={tokenVolumeHistory} />
            )
          : !isLineLoading &&
            tokenPriceHistory &&
            !!tokenPriceHistory.length && (
              <LineChart coinPrices={tokenPriceHistory} />
            )}
      </SubWrapper>
    </Wrapper>
  );
};

export default ChartWrapper;
