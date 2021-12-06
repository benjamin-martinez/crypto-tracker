import { TOGGLE_CURRENCY } from "./index";

export const toggleCurrency = (toggled) => (dispatch, getState) => {
    const state = getState()
    const updatedCurrencies = state.currencies.data.map((currency) => {
        console.log(currency.name + "  " + currency.name === toggled.name)
        return {
          ...currency,
          isActive: currency.name === toggled.name,
        };
      });
    dispatch({
        type: TOGGLE_CURRENCY,
        payload: updatedCurrencies
    })
}