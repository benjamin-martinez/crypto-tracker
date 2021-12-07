import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import coinsReducer from "./coins";
import currenciesReducer from "./currencies";

const reducers = combineReducers({
    currencies: currenciesReducer,
    coins: coinsReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

