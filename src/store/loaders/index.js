const initialState = {
  isLoadingCoinPage: false,
};

export const LOADING_COIN_PAGE_ACTIVE = "LOADING_COIN_PAGE_ACTIVE";
export const LOADING_COIN_PAGE_INACTIVE = "LOADING_COIN_PAGE_INACTIVE";

function loadersReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_COIN_PAGE_ACTIVE:
      return {
        ...state,
        isLoadingCoinPage: true,
      };
    case LOADING_COIN_PAGE_INACTIVE:
      return {
        ...state,
        isLoadingCoinPage: true,
      };
    default:
      return {
        ...state,
      };
  }
}

export default loadersReducer;