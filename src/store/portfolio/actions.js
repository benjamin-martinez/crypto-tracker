import axios from "axios"
import { LOAD_ASSET_SEARCH_SUCCESS, LOAD_ASSET_SEARCH_PENDING, LOAD_ASSET_SEARCH_ERROR, ADD_PORTFOLIO_ASSET, REMOVE_PORTFOLIO_ASSET, CLEAR_SEARCH_RESULTS } from "./index";

export const getSearchResults = (searchTerm) => async (dispatch, getState) => {
    try {
      dispatch({ type: LOAD_ASSET_SEARCH_PENDING });
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
      );
      dispatch({
        type: LOAD_ASSET_SEARCH_SUCCESS,
        payload: data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOAD_ASSET_SEARCH_ERROR,
        payload: err,
      });
    }
  };
  
  export const clearSearchResults = () => (dispatch, getState) => {
    dispatch({
      type: CLEAR_SEARCH_RESULTS,
      payload: [],
    });
  };