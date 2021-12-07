import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import {
  BarChart,
  DurationSelector,
  LineChart,
} from "components/coins-page-charts";
import { addCommas, addDecimalsAndShorten, convertDurationToUnix } from "utils";
import { ChartHeaderText, ChartSubText } from "styles/Fonts";
import { Wrapper, TextWrapper, SubWrapper } from "./ChartWrapper.styles";
import { LoadingBarChart, LoadingLineChart } from "components/loading-animations";

const ChartWrapper = (props) => {
  const [activeToken, setActiveToken] = useState("BTC");
  const [activePrice, setActivePrice] = useState("0.00");
  const [activeDate, setActiveDate] = useState("Nov 17, 2021");
  const [tokenPriceHistory, setTokenPriceHistory] = useState([]);
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
  const [isLoading, setIsLoading] = useState(false);
  const activeCurrency = useSelector(getActiveCurrency)

  const getChartData = async (duration) => {
    const todaysDate = new Date() / 1000;
    const durationStartDate = new Date() / 1000 - duration;
    setIsLoading(true);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=${activeCurrency.name}&from=${durationStartDate}&to=${todaysDate}`
      );
      if (props.chartType === "volume") {
        if (duration === 86400) {
          setTokenPriceHistory(data.total_volumes);
          setActivePrice(data.total_volumes[data.total_volumes.length - 1][1]);
          setIsLoading(false);
        } else {
          setTokenPriceHistory(data.total_volumes);
          setIsLoading(false);
        }
      } else if (props.chartType === "price") {
        if (duration === 86400) {
          setTokenPriceHistory(data.prices);
          setActivePrice(data.prices[data.prices.length - 1][1]);
          setIsLoading(false);
        } else {
          setTokenPriceHistory(data.prices);
          setIsLoading(false);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
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
        duration.active && getChartData(convertDurationToUnix(duration.length))
    );
    //eslint-disable-next-line
  }, [durations]);

  useEffect(() => {
    getChartData(convertDurationToUnix("1d"));
    let date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setActiveDate(date);
    //eslint-disable-next-line
  }, []);

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
        {props.chartType === "volume" ? (
          isLoading ? <LoadingBarChart /> : <BarChart totalVolumes={tokenPriceHistory} />
        ) : (
          isLoading ? <LoadingLineChart /> : <LineChart coinPrices={tokenPriceHistory} />
        )}
      </SubWrapper>
    </Wrapper>
  );
};

export default ChartWrapper;
