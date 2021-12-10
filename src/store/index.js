import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinsReducer from "./coins";
import coinReducer from "./coin";
import currenciesReducer from "./currencies";
import portfolioReducer from "./portfolio";
import searchReducer from "./search";

const reducers = combineReducers({
    currencies: currenciesReducer,
    coins: coinsReducer,
    coin: coinReducer,
    portfolio: portfolioReducer,
    search: searchReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

