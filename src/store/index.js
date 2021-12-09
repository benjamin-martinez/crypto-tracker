import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinsReducer from "./coins";
import currenciesReducer from "./currencies";
import portfolioReducer from "./portfolio";

const reducers = combineReducers({
    currencies: currenciesReducer,
    coins: coinsReducer,
    portfolio: portfolioReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

