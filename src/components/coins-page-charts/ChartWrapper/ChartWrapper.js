import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActiveCurrency } from "store/currencies";
import { setBothChartDurations } from "store/charts/action";
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
} from "components/loading-animations";

const ChartWrapper = (props) => {
  const dispatch = useDispatch();
  const [activeToken, setActiveToken] = useState("BTC");
  const [activePrice, setActivePrice] = useState("0.00");
  const [activeDate, setActiveDate] = useState("Nov 17, 2021");
  const durations = useSelector((state) => state.charts.durations);
  const { width: screenWidth } = useWindowSize();
  const activeCurrency = useSelector(getActiveCurrency);

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
    //eslint-disable-next-line
  }, []);

  const getWidth = () => {
    if( screenWidth > 900) return 520;
    if( screenWidth > 450) return 312;
    return 234;
  }

  const getHeight = () => {
    if( screenWidth > 900) return 220;
    if( screenWidth > 450) return 132;
    return 132;
  }

  return !props.hasError ? (
    <Wrapper visible={props.visible} responsive={props.responsive}>
      <TextWrapper>
        <ChartSubText>
          {props.activeChartOption.symbol.toUpperCase()}{" "}
          {props.chartType === "volume" && "Volume"}
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
        activeChartDuration={props.activeChartDuration}
        handleRDurationClick={handleRDurationClick}
      />
      <SubWrapper>
        {props.chartType === "volume"
          ? props.isLoading && <LoadingBarChart />
          : props.isLoading && <LoadingLineChart />}
        {props.chartType === "volume"
          ? !props.isLoading &&
            props.chartHistory.length && (
              <BarChart totalVolumes={props.chartHistory} getHeight={getHeight} getWidth={getWidth} />
            )
          : !props.isLoading &&
            props.chartHistory.length && (
              <LineChart coinPrices={props.chartHistory} getHeight={getHeight} getWidth={getWidth} />
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
