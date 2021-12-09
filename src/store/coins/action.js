import axios from "axios";
import { getActiveCurrency } from "store/currencies";
import {
  GET_COINS_SUCCESS,
  GET_COINS_PENDING,
  GET_COINS_ERROR,
  SET_ACTIVE_CATEGORY,
  SET_ACTIVE_DIRECTION,
  SET_ACTIVE_KEY,
  SET_ACTIVE_RESULTS_PER_PAGE,
  INCREMENT_PAGE_NUM,
  DECREMENT_PAGE_NUM
} from "./index";

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState();
  const activeCurrency = getActiveCurrency(state);
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}&order=${state.coins.activeKey}_${state.coins.activeDirection}&per_page=${state.coins.activeResultsPerPage}&page=${state.coins.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};

export const getCoinsDataByCategory = () => async (dispatch, getState) => {
  const state = getState();
  const activeCurrency = getActiveCurrency(state);
  const category =
    state.coins.activeCategory.categoryId !== "cryptocurrency"
      ? `&category=${state.coins.activeCategory.categoryId}`
      : "";
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}${category}&order=${state.coins.activeKey.keyId}_${state.coins.activeDirection.directionId}&per_page=${state.coins.activeResultsPerPage}&page=${state.coins.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    dispatch({
      type: GET_COINS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COINS_ERROR,
      payload: err,
    });
  }
};

export const setActiveCategory = (newCategory) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_CATEGORY,
    payload: newCategory,
  });
};

export const setActiveDirection = (newDirection) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_DIRECTION,
    payload: newDirection,
  });
};

export const setActiveKey = (newKey) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_KEY,
    payload: newKey,
  });
};

export const setActiveResultsPerPage = (num) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_RESULTS_PER_PAGE,
    payload: num,
  });
};

export const incrementPageNum = () => (dispatch, getState) => {
  const state = getState();
  dispatch({
    type: INCREMENT_PAGE_NUM,
    payload: state.coins.pageNum + 1,
  });
};

export const decrementPageNum = () => (dispatch, getState) => {
  const state = getState();
  if (state.coins.pageNum > 1) {
    dispatch({
      type: DECREMENT_PAGE_NUM,
      payload: state.coins.pageNum - 1,
    });
  }
};
