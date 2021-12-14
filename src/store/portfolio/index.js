const initialState = {
  portfolioSearchData: [],
  isLoading: false,
  hasError: false,
  assets: [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      image:
        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
      datePurchased: "12/12/2018",
      amount: "12",
      currentMarketData: {},
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      image:
        "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
      datePurchased: "12/12/2018",
      amount: "100",
      currentMarketData: {},
    },
  ],
};

export const LOAD_ASSET_SEARCH_SUCCESS = "LOAD_ASSET_SEARCH_SUCCESS";
export const LOAD_ASSET_SEARCH_PENDING = "LOAD_ASSET_SEARCH_PENDING";
export const LOAD_ASSET_SEARCH_ERROR = "LOAD_ASSET_SEARCH_ERROR";
export const ADD_PORTFOLIO_ASSET = "ADD_PORTFOLIO_ASSET";
export const REMOVE_PORTFOLIO_ASSET = "REMOVE_PORTFOLIO_ASSET";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS"

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
        savedCoins: action.payload,
      };
    case REMOVE_PORTFOLIO_ASSET:
      return {
        ...state,
        savedCoins: action.payload,
      };
    default:
      return state;
  }
}

export default portfolioReducer;
