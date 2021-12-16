import axios from "axios";
import { convertDurationToUnix } from "utils";
import {
  GET_LINE_CHART_DATA_SUCCESS,
  GET_LINE_CHART_DATA_PENDING,
  GET_LINE_CHART_DATA_ERROR,
  GET_BAR_CHART_DATA_SUCCESS,
  GET_BAR_CHART_DATA_PENDING,
  GET_BAR_CHART_DATA_ERROR,
  SET_ACTIVE_CHART_OPTION,
  SET_ACTIVE_PRICE_CHART_DURATION,
  SET_ACTIVE_VOLUME_CHART_DURATION,
} from "./index";

export const getChartData =
  (activeCurrency, duration, chartType) => async (dispatch, getState) => {
    const todaysDate = new Date() / 1000;
    const durationStartDate =
      new Date() / 1000 - convertDurationToUnix(duration);
    const state = getState();
    const activeChartOption = state.charts.activeChartOption;
    try {
      if (chartType === "price") {
        dispatch({ type: GET_LINE_CHART_DATA_PENDING });
      }
      if (chartType === "volume") {
        dispatch({ type: GET_BAR_CHART_DATA_PENDING });
      }
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${activeChartOption.id}/market_chart/range?vs_currency=${activeCurrency.name}&from=${durationStartDate}&to=${todaysDate}`
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
      console.log(err);
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

export const setActiveChartOption = (selection) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_CHART_OPTION,
    payload: selection,
  });
};

export const setActiveVolumeChartDuration =
  (selection) => (dispatch, getState) => {
    dispatch({
      type: SET_ACTIVE_VOLUME_CHART_DURATION,
      payload: selection,
    });
  };

export const setActivePriceChartDuration =
  (selection) => (dispatch, getState) => {
    dispatch({
      type: SET_ACTIVE_PRICE_CHART_DURATION,
      payload: selection,
    });
  };
