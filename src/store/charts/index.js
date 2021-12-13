const initialState = {
  lineData: {},
  barData: {},
  isLineLoading: false,
  isBarLoading: false,
  hasError: false,
  error: ""
};

export const GET_LINE_CHART_DATA_ERROR = "GET_LINE_CHART_DATA_ERROR";
export const GET_LINE_CHART_DATA_PENDING = "GET_LINE_CHART_DATA_PENDING";
export const GET_LINE_CHART_DATA_SUCCESS = "GET_LINE_CHART_DATA_SUCCESS";
export const GET_BAR_CHART_DATA_ERROR = "GET_BAR_CHART_DATA_ERROR";
export const GET_BAR_CHART_DATA_PENDING = "GET_BAR_CHART_DATA_PENDING";
export const GET_BAR_CHART_DATA_SUCCESS = "GET_BAR_CHART_DATA_SUCCESS";
export const SET_LINE_LOADING = "SET_LINE_LOADING";
export const SET_BAR_LOADING = "SET_BAR_LOADING";

function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LINE_CHART_DATA_ERROR:
      return {
        ...state,
        isLineLoading: false,
        hasError: true,
      };
    case GET_LINE_CHART_DATA_PENDING:
      return {
        ...state,
        isLineLoading: true,
        hasError: false,
      };
    case GET_LINE_CHART_DATA_SUCCESS:
      return {
        ...state,
        lineData: action.payload,
        isLineLoading: false,
        hasError: false,
      };
    case GET_BAR_CHART_DATA_ERROR:
      return {
        ...state,
        isBarLoading: false,
        hasError: true,
      };
    case GET_BAR_CHART_DATA_PENDING:
      return {
        ...state,
        isBarLoading: true,
        hasError: false,
      };
    case GET_BAR_CHART_DATA_SUCCESS:
      return {
        ...state,
        barData: action.payload,
        isBarLoading: false,
        hasError: false,
      };
    default:
      return state;
  }
}

export default chartsReducer;
