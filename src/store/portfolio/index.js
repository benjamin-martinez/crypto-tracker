const initialState = {
    assets: [
        {
            id: "bitcoin",
            name: "Bitcoin",
            symbol: "btc",
            image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            datePurchased: "12/12/2018",
            amount: "12",
            currentMarketData: {}
        },
        {
            id: "ethereum",
            name: "Ethereum",
            symbol: "eth",
            image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            datePurchased: "12/12/2018",
            amount: "100",
            currentMarketData: {}
        }
    ]
}

export const LOAD_ASSET_SEARCH_SUCCESS = "LOAD_ASSET_SEARCH_SUCCESS"
export const LOAD_ASSET_SEARCH_PENDING = "LOAD_ASSET_SEARCH_PENDING"
export const LOAD_ASSET_SEARCH_ERROR = "LOAD_ASSET_SEARCH_ERROR"
export const ADD_PORTFOLIO_ASSET = "ADD_PORTFOLIO_ASSET"
export const REMOVE_PORTFOLIO_ASSET = "REMOVE_PORTFOLIO_ASSET"

function portfolioReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_PORTFOLIO_ASSET:
            return {
                ...state,
                savedCoins: action.payload
            };
        case REMOVE_PORTFOLIO_ASSET:
            return {
                ...state,
                savedCoins: action.payload
            };
        default:
            return state
    }
}

export default portfolioReducer