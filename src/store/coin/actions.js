import axios from "axios"
import { GET_COIN_DATA_SUCCESS, GET_COIN_DATA_PENDING, GET_COIN_DATA_ERROR } from "./index"

export const getCoinData = (searchTerm) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_COIN_DATA_PENDING });
        const { data } = await axios(
          `https://api.coingecko.com/api/v3/coins/${searchTerm}?localization=false`
        );
        console.log(data)
        dispatch({
          type: GET_COIN_DATA_SUCCESS,
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: GET_COIN_DATA_ERROR,
          payload: err,
        });
      }
} 