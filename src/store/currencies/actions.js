import { TOGGLE_CURRENCY } from "./index";

export const toggleCurrency = (toggled) => (dispatch, getState) => {
    const state = getState()
    const updatedCurrencies = state.currencies.data.map((currency) => {
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