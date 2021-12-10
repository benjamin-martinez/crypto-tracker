const initialState = {
  data: [],
  isLoading: false,
  error: null,
  hasError: false,
  keys: [
    {
      keyId: "market_cap",
      name: "Market Cap",
    },
    {
      keyId: "volume",
      name: "Volume",
    },
  ],
  directions: [
    {
      directionId: "desc",
      name: "Top",
    },
    {
      directionId: "asc",
      name: "Bottom",
    },
  ],
  categories: [
    {
      categoryId: "cryptocurrency",
      name: "Cryptocurrencies",
    },
    {
      categoryId: "decentralized-finance-defi",
      name: "DeFi",
    },
    {
      categoryId: "non-fungible-tokens-nft",
      name: "NFTs",
    },
    {
      categoryId: "metaverse",
      name: "Metaverse",
    },
  ],
  resultsPerPage: [10, 25, 50, 100],
  activeCategory: {
    categoryId: "cryptocurrency",
    name: "Cryptocurrencies",
  },
  activeDirection: {
    directionId: "desc",
    name: "Top",
  },
  activeKey: {
    keyId: "market_cap",
    name: "Market Cap",
  },
  pageNum: 1,
  activeResultsPerPage: 25,
};

export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const SET_ACTIVE_DIRECTION = "SET_ACTIVE_DIRECTION";
export const SET_ACTIVE_KEY = "SET_ACTIVE_KEY";
export const SET_ACTIVE_RESULTS_PER_PAGE = "SET_ACTIVE_RESULTS_PER_PAGE";
export const INCREMENT_PAGE_NUM = "INCREMENT_PAGE_NUM";
export const DECREMENT_PAGE_NUM = "DECREMENT_PAGE_NUM";

function coinsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case GET_COINS_PENDING:
      return {
        ...state,
        data: action.payload,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        hasError: true,
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        pageNum: 1,
        activeCategory: action.payload,
      };
    case SET_ACTIVE_DIRECTION:
      return {
        ...state,
        activeDirection: action.payload,
      };
    case SET_ACTIVE_KEY:
      return {
        ...state,
        activeKey: action.payload,
      };
    case SET_ACTIVE_RESULTS_PER_PAGE:
      return {
        ...state,
        activeResultsPerPage: action.payload,
      };
    case INCREMENT_PAGE_NUM:
      return {
        ...state,
        pageNum: action.payload,
      };
    case DECREMENT_PAGE_NUM:
      return {
        ...state,
        pageNum: action.payload,
      };
    default:
      return state;
  }
}

export default coinsReducer;

