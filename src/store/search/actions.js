import axios from "axios"
import { GET_SEARCH_COINS_SUCCESS, GET_SEARCH_COINS_ERROR, GET_SEARCH_COINS_PENDING, CLEAR_SEARCH_RESULTS } from "./index"

export const getSearchResults = (searchTerm) => async (dispatch, getState) => {
    try {
        dispatch({ type: GET_SEARCH_COINS_PENDING });
        const { data } = await axios(
            `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
        );
        dispatch({
          type: GET_SEARCH_COINS_SUCCESS,
          payload: data,
        });
      } catch (err) {
          console.log(err)
        dispatch({
          type: GET_SEARCH_COINS_ERROR,
          payload: err,
        });
      }
}

export const clearSearchResults = () => (dispatch, getState) => {
     dispatch({
         type: CLEAR_SEARCH_RESULTS,
         payload: []
     })
}