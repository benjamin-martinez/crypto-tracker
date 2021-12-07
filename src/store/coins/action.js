import axios from "axios";
import { getActiveCurrency } from "store/currencies";
import { GET_COINS_SUCCESS, GET_COINS_PENDING, GET_COINS_ERROR } from "./index";

export const getCoinsData = (pageNum, sortBy) => async (dispatch, getState) => {
  const state = getState()
  const activeCurrency = getActiveCurrency(state)
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}&order=market_cap_desc&per_page=25&page=${pageNum}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
