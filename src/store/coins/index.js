const initialState = {
    data: [],
    isLoading: false,
    error: null,
    hasError: false,
    key: ["market_cap", "volume"],
    directions: ["desc", "asc"],
    categories: [
        {
            categoryId: "cryptocurrency",
            name: "Cryptocurrencies"
        },
        {
            categoryId: "decentralized-finance-defi",
            name: "DeFi"
        },
        {
            categoryId: "non-fungible-tokens-nft",
            name: "NFTs"
        },
        {
            categoryId: "metaverse",
            name: "Metaverse"
        } 
    ],
    resultsPerPage: [10, 25, 50, 100],
    activeCategory: {
        categoryId: "cryptocurrency",
        name: "Cryptocurrencies"
    },
    activeDirection: "desc",
    activeKey: "market_cap",
    pageNum: 1,
    activeResultsPerPage: 25
}

export const GET_COINS_PENDING = "GET_COINS_PENDING";
export const GET_COINS_SUCCESS = "GET_COINS_SUCCESS";
export const GET_COINS_ERROR = "GET_COINS_ERROR";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY"

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
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        default:
            return state
    }
}

export default coinsReducer

export const getFilteredCoins = (state, { direction, key }) => {
    let coins = state.coins.data
    console.log(coins)

    // if (direction === "asc") {
    //     return coins.sort((a,b) => a[key] - b[key])
    // }
    // else {
    //     return coins.sort((a,b) => b[key] - a[key])
    // }
}


