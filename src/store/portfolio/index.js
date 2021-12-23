const initialState = {
  portfolioSearchData: [],
  isLoading: false,
  hasError: false,
  addAssetSelection: {},
  selectionDate: "",
  selectionAmount: 0,
  isLoadingHistoricalData: false,
  historicalDataHasError: false,
  isLoadingCurrentData: false,
  currentDataHasError: false,
  assets: [
    {
      data: {
        id: "bitcoin",
        name: "Bitcoin",
        symbol: "btc",
        large:
          "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      },
      amount: 12,
      datePurchased: "12-12-2018",
    },
    {
      data: {
        id: "ethereum",
        name: "Ethereum",
        symbol: "eth",
        large:
          "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      },
      amount: 12,
      datePurchased: "12-12-2018",
    },
  ],
};

export const LOAD_ASSET_SEARCH_SUCCESS = "LOAD_ASSET_SEARCH_SUCCESS";
export const LOAD_ASSET_SEARCH_PENDING = "LOAD_ASSET_SEARCH_PENDING";
export const LOAD_ASSET_SEARCH_ERROR = "LOAD_ASSET_SEARCH_ERROR";
export const ADD_PORTFOLIO_ASSET = "ADD_PORTFOLIO_ASSET";
export const REMOVE_PORTFOLIO_ASSET = "REMOVE_PORTFOLIO_ASSET";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";
export const SELECT_ASSET_FROM_RESULTS = "SELECT_ASSET_FROM_RESULTS";
export const SELECT_DATE = "SELECT_DATE";
export const SELECT_AMOUNT = "SELECT_AMOUNT";
export const LOAD_ASSETS_HISTORICAL_DATA_ERROR = "LOAD_ASSETS_HISTORICAL_DATA_ERROR";
export const LOAD_ASSETS_HISTORICAL_DATA_PENDING = "LOAD_ASSETS_HISTORICAL_DATA_PENDING";
export const LOAD_ASSETS_HISTORICAL_DATA_SUCCESS = "LOAD_ASSETS_HISTORICAL_DATA_SUCCESS";
export const LOAD_ASSETS_CURRENT_DATA_ERROR = "LOAD_ASSETS_CURRENT_DATA_ERROR";
export const LOAD_ASSETS_CURRENT_DATA_PENDING = "LOAD_ASSETS_CURRENT_DATA_PENDING";
export const LOAD_ASSETS_CURRENT_DATA_SUCCESS = "LOAD_ASSETS_CURRENT_DATA_SUCCESS";

function portfolioReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ASSET_SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case LOAD_ASSET_SEARCH_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case LOAD_ASSET_SEARCH_SUCCESS:
      return {
        ...state,
        portfolioSearchData: action.payload,
        isLoading: false,
        hasError: false,
      };
    case CLEAR_SEARCH_RESULTS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_PORTFOLIO_ASSET:
      return {
        ...state,
        assets: action.payload,
      };
    case REMOVE_PORTFOLIO_ASSET:
      return {
        ...state,
        assets: action.payload,
      };
    case SELECT_ASSET_FROM_RESULTS:
      return {
        ...state,
        addAssetSelection: action.payload,
      };
    case SELECT_AMOUNT:
      return {
        ...state,
        selectionAmount: action.payload,
      };
    case SELECT_DATE:
      return {
        ...state,
        selectionDate: action.payload,
      };
    case LOAD_ASSETS_HISTORICAL_DATA_ERROR:
      return {
        ...state,
        assets: action.payload,
        isLoadingHistoricalData: false,
        historicalDataHasError: true,
      };
    case LOAD_ASSETS_HISTORICAL_DATA_PENDING:
      return {
        ...state,
        assets: action.payload,
        isLoadingHistoricalData: true,
        historicalDataHasError: false,
      };
    case LOAD_ASSETS_HISTORICAL_DATA_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        assets: action.payload,
        isLoadingHistoricalData: false,
        historicalDataHasError: false,
      };
      case LOAD_ASSETS_CURRENT_DATA_ERROR:
      return {
        ...state,
        assets: action.payload,
        isLoadingCurrentData: false,
        currentDataHasError: true,
      };
    case LOAD_ASSETS_CURRENT_DATA_PENDING:
      return {
        ...state,
        assets: action.payload,
        isLoadingCurrentData: true,
        currentDataHasError: false,
      };
    case LOAD_ASSETS_CURRENT_DATA_SUCCESS:
      return {
        ...state,
        assets: action.payload,
        isLoadingCurrentData: false,
        currentDataHasError: false,
      };
    default:
      return state;
  }
}

export default portfolioReducer;
