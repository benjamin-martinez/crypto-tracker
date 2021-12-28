import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import {
  BarChart,
  DurationSelector,
  LineChart,
} from "components/coins-page-charts";
import { addCommas, addDecimalsAndShorten } from "utils";
import { ChartHeaderText, ChartSubText } from "styles/Fonts";
import {
  Wrapper,
  TextWrapper,
  SubWrapper,
  ErrorWrapper,
} from "./ChartWrapper.styles";
import {
  LoadingBarChart,
  LoadingLineChart,
} from "components/loading-animations";

const ChartWrapper = (props) => {
  const dispatch = useDispatch();
  const [activeToken, setActiveToken] = useState("BTC");
  const [activePrice, setActivePrice] = useState("0.00");
  const [activeDate, setActiveDate] = useState("Nov 17, 2021");
  const durations = useSelector((state) => state.charts.durations);
  const activeCurrency = useSelector(getActiveCurrency);

  function handleRDurationClick(duration) {
    dispatch(props.setActiveChartDuration(duration));
  }

  useEffect(() => {
    let date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setActiveDate(date);
    //eslint-disable-next-line
  }, []);

  const isVolumeChart = props.chartType === "volume";
  const isPriceChart = props.chartType === "price"
  const showBarChart = !props.isLoading && props.chartHistory.length
  const showLineChart = !props.isLoading && props.chartHistory.length
  const showLoadingLineChart = isVolumeChart && props.isLoading;
  const showLoadingBarChart = isPriceChart && props.isLoading;
  const currentSymbol = activeCurrency.symbol;

  return !props.hasError ? (
    <Wrapper>
      <TextWrapper>
        <ChartSubText>
          {props.activeChartOption.symbol.toUpperCase()}{" "}
          {isVolumeChart && "Volume"}
        </ChartSubText>
        <ChartHeaderText>
          {`${currentSymbol}${isVolumeChart ? addDecimalsAndShorten(activePrice) :  addCommas(activePrice)}`}
        </ChartHeaderText>
        <ChartSubText>{activeDate}</ChartSubText>
      </TextWrapper>
      <DurationSelector
        durations={durations}
        activeChartDuration={props.activeChartDuration}
        handleRDurationClick={handleRDurationClick}
      />
      <SubWrapper>
          {showLoadingLineChart && <LoadingLineChart />}
          {showLoadingBarChart && <LoadingBarChart />}
        
          {isVolumeChart && showBarChart && <BarChart totalVolumes={props.chartHistory} />}
          {isPriceChart && showLineChart &&  <LineChart coinPrices={props.chartHistory} />}
      </SubWrapper>
    </Wrapper>
  ) : (
    <ErrorWrapper>
      <ChartSubText>There was an error retreiving chart data</ChartSubText>
    </ErrorWrapper>
  );
};

export default ChartWrapper;