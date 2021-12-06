import axios from "axios";
import { getActiveCurrency } from "store/currencies";
import { GET_COINS_SUCCESS, GET_COINS_PENDING, GET_COINS_ERROR } from "./index";

export const getData = (pageNum) => async (dispatch, getState) => {
  const state = getState()
  const activeCurrency = getActiveCurrency(state)
  try {
    dispatch({ type: GET_COINS_PENDING });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}&order=market_cap_desc&per_page=10&page=${pageNum}&sparkline=true`
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
