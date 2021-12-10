import axios from "axios";
import {
  GET_LINE_CHART_DATA_SUCCESS,
  GET_LINE_CHART_DATA_PENDING,
  GET_LINE_CHART_DATA_ERROR,
  GET_BAR_CHART_DATA_SUCCESS,
  GET_BAR_CHART_DATA_PENDING,
  GET_BAR_CHART_DATA_ERROR,
} from "./index";

export const getChartData =
  (activeCurrency, duration, chartType) => async (dispatch, getState) => {
    const todaysDate = new Date() / 1000;
    const durationStartDate = new Date() / 1000 - duration;
    try {
      if (chartType === "price") {
        dispatch({ type: GET_LINE_CHART_DATA_PENDING });
      }
      if (chartType === "volume") {
        dispatch({ type: GET_BAR_CHART_DATA_PENDING });
      }
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=${activeCurrency.name}&from=${durationStartDate}&to=${todaysDate}`
      );
      if (chartType === "price")
        dispatch({
          type: GET_LINE_CHART_DATA_SUCCESS,
          payload: data.prices,
        });
      if (chartType === "volume")
        dispatch({
          type: GET_BAR_CHART_DATA_SUCCESS,
          payload: data.total_volumes,
        });
    } catch (err) {
      if (chartType === "price")
        dispatch({
          type: GET_LINE_CHART_DATA_ERROR,
          payload: err,
        });
      if (chartType === "volume")
        dispatch({
          type: GET_BAR_CHART_DATA_ERROR,
          payload: err,
        });
    }
  };
