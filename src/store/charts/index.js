const initialState = {
  chartOptions: [
    {
      name: "Bitcoin",
      symbol: "btc",
      id: "bitcoin",
    },
    {
      name: "Ethereum",
      symbol: "eth",
      id: "ethereum",
    },
  ],
  activeChartOption: {
    name: "Bitcoin",
    symbol: "btc",
    id: "bitcoin",
  },
  durations: ["1d", "1w", "1m", "3m", "6m", "1y"],
  activePriceChartDuration: "1d",
  activeVolumeChartDuration: "1d",
  priceChartHistory: {},
  volumeChartHistory: {},
  currentPrice: 0,
  currentVolume: 0,
  priceChartIsLoading: false,
  volumeChartIsLoading: false,
  hasError: false,
  error: "",
};

export const GET_LINE_CHART_DATA_ERROR = "GET_LINE_CHART_DATA_ERROR";
export const GET_LINE_CHART_DATA_PENDING = "GET_LINE_CHART_DATA_PENDING";
export const GET_LINE_CHART_DATA_SUCCESS = "GET_LINE_CHART_DATA_SUCCESS";
export const GET_BAR_CHART_DATA_ERROR = "GET_BAR_CHART_DATA_ERROR";
export const GET_BAR_CHART_DATA_PENDING = "GET_BAR_CHART_DATA_PENDING";
export const GET_BAR_CHART_DATA_SUCCESS = "GET_BAR_CHART_DATA_SUCCESS";
export const SET_LINE_LOADING = "SET_LINE_LOADING";
export const SET_BAR_LOADING = "SET_BAR_LOADING";
export const SET_ACTIVE_CHART_OPTION = "SET_ACTIVE_CHART_OPTION";
export const SET_ACTIVE_VOLUME_CHART_DURATION =
  "SET_ACTIVE_VOLUME_CHART_DURATION";
export const SET_ACTIVE_PRICE_CHART_DURATION =
  "SET_ACTIVE_PRICE_CHART_DURATION";
export const SET_BOTH_CHART_DURATIONS = "SET_BOTH_CHART_DURATIONS";
export const SET_CURRENT_PRICE_AND_VOLUME = "SET_CURRENT_PRICE_AND_VOLUME";

function chartsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LINE_CHART_DATA_ERROR:
      return {
        ...state,
        priceChartIsLoading: false,
        hasError: true,
      };
    case GET_LINE_CHART_DATA_PENDING:
      return {
        ...state,
        priceChartIsLoading: true,
        hasError: false,
      };
    case GET_LINE_CHART_DATA_SUCCESS:
      return {
        ...state,
        priceChartHistory: action.payload,
        priceChartIsLoading: false,
        hasError: false,
      };
    case GET_BAR_CHART_DATA_ERROR:
      return {
        ...state,
        volumeChartIsLoading: false,
        hasError: true,
      };
    case GET_BAR_CHART_DATA_PENDING:
      return {
        ...state,
        volumeChartIsLoading: true,
        hasError: false,
      };
    case GET_BAR_CHART_DATA_SUCCESS:
      return {
        ...state,
        volumeChartHistory: action.payload,
        volumeChartIsLoading: false,
        hasError: false,
      };
    case SET_ACTIVE_CHART_OPTION:
      return {
        ...state,
        activeChartOption: action.payload,
      };
    case SET_ACTIVE_PRICE_CHART_DURATION:
      return {
        ...state,
        activePriceChartDuration: action.payload,
      };
    case SET_ACTIVE_VOLUME_CHART_DURATION:
      return {
        ...state,
        activeVolumeChartDuration: action.payload,
      };
    case SET_BOTH_CHART_DURATIONS:
      return {
        ...state,
        activePriceChartDuration: action.payload,
        activeVolumeChartDuration: action.payload,
      };
    case SET_CURRENT_PRICE_AND_VOLUME: 
    return {
      ...state,
      currentPrice: action.payload.price,
      currentVolume: action.payload.volume
    }
    default:
      return state;
  }
}

export default chartsReducer;
