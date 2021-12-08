import axios from "axios";
import { getActiveCurrency } from "store/currencies";
import { GET_COINS_SUCCESS, GET_COINS_PENDING, GET_COINS_ERROR, SET_ACTIVE_CATEGORY } from "./index";

export const getCoinsData = () => async (dispatch, getState) => {
  const state = getState()
  const activeCurrency = getActiveCurrency(state)
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
  const state = getState()
  const activeCurrency = getActiveCurrency(state)
  const category = state.coins.activeCategory.categoryId !== "cryptocurrency" ? `&category=${state.coins.activeCategory.categoryId}` : ""
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}${category}&order=${state.coins.activeKey}_${state.coins.activeDirection}&per_page=${state.coins.activeResultsPerPage}&page=${state.coins.pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
}

export const setActiveCategory = (newCategory) => (dispatch, getState) => {
  dispatch({
    type: SET_ACTIVE_CATEGORY,
    payload: newCategory
  })
}