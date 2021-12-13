import { getActiveCurrency } from "store/currencies";

const initialState = {
  data: {},
  isFetched: false,
  isLoading: false,
  hasError: false,
  error: "",
};

export const GET_INFOGRAPHIC_DATA_ERROR = "GET_INFOGRAPHIC_DATA_ERROR";
export const GET_INFOGRAPHIC_DATA_PENDING = "GET_INFOGRAPHIC_DATA_PENDING";
export const GET_INFOGRAPHIC_DATA_SUCCESS = "GET_INFOGRAPHIC_DATA_SUCCESS";

function infographicReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOGRAPHIC_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        hasError: true,
        isFetched: false
      };
    case GET_INFOGRAPHIC_DATA_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
      };
    case GET_INFOGRAPHIC_DATA_SUCCESS:
        console.log(action.payload)
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: false,
        isFetched: true
      };
    default:
      return state;
  }
}

export default infographicReducer;

export const getNumCoins = (state) => state.infographic.data.active_cryptocurrencies;

export const getNumExchanges = (state) => state.infographic.data.markets

export const getDominance = (state) => state.infographic.data.market_cap_percentage

export const getMarketCap = (state) => state.infographic.data.total_market_cap[getActiveCurrency(state).name]

export const getMarketCapChange = (state) => state.infographic.data[`market_cap_change_percentage_24h_${getActiveCurrency(state).name}`]

export const getVolume = (state) => state.infographic.data.total_volume[getActiveCurrency(state).name]
