import axios from "axios";
import {
  GET_INFOGRAPHIC_DATA_SUCCESS,
  GET_INFOGRAPHIC_DATA_PENDING,
  GET_INFOGRAPHIC_DATA_ERROR,
} from "./index";

export const getInfographicData = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_INFOGRAPHIC_DATA_PENDING });
    const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
    dispatch({
      type: GET_INFOGRAPHIC_DATA_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_INFOGRAPHIC_DATA_ERROR,
      payload: err,
    });
  }
};
