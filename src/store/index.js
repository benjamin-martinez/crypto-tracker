import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinsReducer from "./coins";
import coinReducer from "./coin";
import currenciesReducer from "./currencies";
import portfolioReducer from "./portfolio";
import searchReducer from "./search";
import chartsReducer from "./charts";

const reducers = combineReducers({
    currencies: currenciesReducer,
    coins: coinsReducer,
    coin: coinReducer,
    portfolio: portfolioReducer,
    search: searchReducer,
    charts: chartsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

