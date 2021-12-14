const initialState = {
  data: [],
  isLoading: false,
  hasError: false,
  error: "",
  activeSearchLocation: "",
};

export const GET_SEARCH_COINS_SUCCESS = "GET_SEARCH_COINS_SUCCESS";
export const GET_SEARCH_COINS_PENDING = "GET_SEARCH_COINS_PENDING";
export const GET_SEARCH_COINS_ERROR = "GET_SEARCH_COINS_ERROR";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const SET_ACTIVE_SEARCH_LOCATION = "SET_ACTIVE_SEARCH_LOCATION";

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_SEARCH_COINS_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_SEARCH_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: false,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        data: action.payload,
      };
    case SET_ACTIVE_SEARCH_LOCATION:
      return {
        ...state,
        activeSearchLocation: action.payload
      };
    default:
      return state;
  }
}

export default searchReducer;
