import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { setBothChartDurations, setCurrentPriceAndVolume } from "store/charts/action";
import {
  BarChart,
  DurationSelector,
  LineChart,
} from "components/coins-page-charts";
import { useWindowSize } from "hooks";
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
  LoadingSpinner,
} from "components/loading-animations";

const ChartWrapper = (props) => {
  const dispatch = useDispatch();
  const [activeDate, setActiveDate] = useState("Nov 17, 2021");
  const durations = useSelector((state) => state.charts.durations);
  const activeCurrency = useSelector(getActiveCurrency);
  const currentPrice = useSelector(state => state.charts.currentPrice)
  const currentVolume = useSelector(state => state.charts.currentVolume)

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

    dispatch(setCurrentPriceAndVolume(activeCurrency))
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
          {`${currentSymbol}${isVolumeChart ? addDecimalsAndShorten(currentVolume) :  addCommas(currentPrice)}`}
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