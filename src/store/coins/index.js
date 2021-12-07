const initialState = {
    data: [],
    isLoading: false,
    error: null,
    hasError: false
}

export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";

function coinsReducer(state=initialState, action) {
    switch (action.type) {
        case GET_COINS_ERROR: 
            return {
                ...state,
                isLoading: false,
                hasError: true,
                error: action.payload
            }
        case GET_COINS_PENDING:
            return {
                ...state,
                data: action.payload,
                isLoading: true,
                hasError: false,
                error: null
            }
        case GET_COINS_SUCCESS: 
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                hasError: true
            }
        default:
            return state
    }
}

export default coinsReducer

export const getCoinsMarketCapAsc = (state, { direction, key }) => state.coins.data.sort((a,b) => a.market_cap_rank - b.market_cap_rank)

export const getCoinsMarketCapDesc = (state) => state.coins.data.sort((a,b) => b.market_cap_rank - a.market_cap_rank)

export const getCoinsVolumeAsc = () => {}

export const getCoinsVolumeDesc = () => {}

export const getCoinsNameAsc = () => {}

export const getCoinsNameDesc = () => {}

export const getCoins1HrAsc = () => {}

export const getCoins1HrDesc = () => {}

export const getCoins24HrAsc = () => {}

export const getCoins24HrDesc = () => {}

export const getCoins7DAsc = () => {}

export const getCoins7DDesc = () => {}

export const getCoinsVolOverMarcCapAsc = () => {}

export const getCoinsVolOverMarcCapDesc = () => {}

export const getCoinsCircOverTotalSupplyAsc = () => {}

export const getCoinsCircOverTotalSupplyDesc = () => {}