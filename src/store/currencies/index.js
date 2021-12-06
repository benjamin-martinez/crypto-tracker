const intitialState = {
    data: [
        {
            name: "USD",
            isActive: true,
            symbol: "$"
        },
        {
            name: "EUR",
            isActive: false,
            symbol: "€",
        },
        {
            name: "GBP",
            isActive: false,
            symbol: "£",
        }
    ]
}

export const TOGGLE_CURRENCY = "TOGGLE_CURRENCY"

function currenciesReducer(state = intitialState, action) {
    switch (action.type) {
        case TOGGLE_CURRENCY:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}

export default currenciesReducer

export const getActiveCurrency = (state) => state.currencies.data.find(el => el.isActive)