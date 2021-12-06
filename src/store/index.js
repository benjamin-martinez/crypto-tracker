import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import currenciesReducer from "./currencies";

const reducers = combineReducers({
    currencies: currenciesReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))