import coinsReducer, { GET_COINS_ERROR } from "store/coins";

const initialState = {
  data: {},
  isLoading: false,
  hasError: "",
  error: "",
};

export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";

function coinReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        hasError: true,
      };
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GET_COIN_DATA_SUCCESS:
        console.log("hit")
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
}

export default coinReducer