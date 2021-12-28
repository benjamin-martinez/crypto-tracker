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
  const { width: screenWidth } = useWindowSize();
  const activeCurrency = useSelector(getActiveCurrency);
  const currentPrice = useSelector(state => state.charts.currentPrice)
  const currentVolume = useSelector(state => state.charts.currentVolume)

  function handleRDurationClick(duration) {
    if (screenWidth > 900) dispatch(props.setActiveChartDuration(duration));
    else dispatch(setBothChartDurations(duration));
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

  return !props.hasError ? (
    <Wrapper visible={props.visible} responsive={props.responsive}>
      <TextWrapper>
        <ChartSubText>
          {props.activeChartOption.symbol.toUpperCase()}{" "}
          {props.chartType === "volume" && "Volume"}
        </ChartSubText>
        <ChartHeaderText>
          {props.chartType === "volume" 
            ? activeCurrency.symbol + addDecimalsAndShorten(currentVolume)
            : activeCurrency.symbol + addCommas(currentPrice) }
        </ChartHeaderText>
        <ChartSubText>{activeDate}</ChartSubText>
      </TextWrapper>
      <DurationSelector
        durations={durations}
        activeChartDuration={props.activeChartDuration}
        handleRDurationClick={handleRDurationClick}
      />
      <SubWrapper>
        {props.chartType === "volume"
          ? props.isLoading && <LoadingSpinner />
          : props.isLoading && <LoadingSpinner />}
        {props.chartType === "volume"
          ? !props.isLoading &&
            props.chartHistory.length && (
              <BarChart totalVolumes={props.chartHistory} />
            )
          : !props.isLoading &&
            props.chartHistory.length && (
              <LineChart coinPrices={props.chartHistory}  />
            )}
      </SubWrapper>
    </Wrapper>
  ) : (
    <ErrorWrapper>
      <ChartSubText>There was an error retreiving chart data</ChartSubText>
    </ErrorWrapper>
  );
};

export default ChartWrapper;
