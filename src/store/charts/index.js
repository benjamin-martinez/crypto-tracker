const initialState = {
    data: null,
    isLoading: false,
    hasError: false
}


export const GET_COIN_MARKET_DATA_ERROR = "GET_COIN_MARKET_DATA_ERROR"
export const GET_COIN_MARKET_DATA_PENDING = "GET_COIN_MARKET_DATA_PENDING"
export const GET_COIN_MARKET_DATA_SUCCESS = "GET_COIN_MARKET_DATA_SUCCESS"

function chartsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COIN_MARKET_DATA_ERROR:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                hasError: true
            }
        case GET_COIN_MARKET_DATA_PENDING:
            return {
                ...state,
                data: action.payload,
                isLoading: true,
                hasError: false
            }
        case GET_COIN_MARKET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                hasError: false
            }
        default:
    }
}

export default chartsReducer