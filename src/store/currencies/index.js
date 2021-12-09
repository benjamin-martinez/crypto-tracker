const intitialState = {
    data: [
        {
            name: "usd",
            isActive: true,
            symbol: "$"
        },
        {
            name: "eur",
            isActive: false,
            symbol: "€",
        },
        {
            name: "gbp",
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