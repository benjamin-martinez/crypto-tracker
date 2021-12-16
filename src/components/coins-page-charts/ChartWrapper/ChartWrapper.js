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

  return !props.hasError ? (
    <Wrapper>
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
              <BarChart totalVolumes={props.chartHistory} />
            )
          : !props.isLoading &&
            props.chartHistory.length && (
              <LineChart coinPrices={props.chartHistory} />
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
