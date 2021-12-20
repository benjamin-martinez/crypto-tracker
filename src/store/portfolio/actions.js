import axios from "axios";
import {
  LOAD_ASSET_SEARCH_SUCCESS,
  LOAD_ASSET_SEARCH_PENDING,
  LOAD_ASSET_SEARCH_ERROR,
  ADD_PORTFOLIO_ASSET,
  REMOVE_PORTFOLIO_ASSET,
  SELECT_AMOUNT,
  SELECT_DATE,
  CLEAR_SEARCH_RESULTS,
  SELECT_ASSET_FROM_RESULTS,
  LOAD_ASSETS_HISTORICAL_DATA_ERROR,
  LOAD_ASSETS_HISTORICAL_DATA_PENDING,
  LOAD_ASSETS_HISTORICAL_DATA_SUCCESS,
  LOAD_ASSETS_CURRENT_DATA_ERROR,
  LOAD_ASSETS_CURRENT_DATA_PENDING,
  LOAD_ASSETS_CURRENT_DATA_SUCCESS,
} from "./index";

export const getSearchResults = (searchTerm) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOAD_ASSET_SEARCH_PENDING });
    const { data } = await axios(
      `https://crypto-app-server.herokuapp.com/coins/${searchTerm}`
    );
    dispatch({
      type: LOAD_ASSET_SEARCH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOAD_ASSET_SEARCH_ERROR,
      payload: err,
    });
  }
};

export const selectAssetFromResults = (selection) => (dispatch, getState) => {
  dispatch({
    type: SELECT_ASSET_FROM_RESULTS,
    payload: selection,
  });
};

export const selectAmount = (amount) => (dispatch, getState) => {
  dispatch({
    type: SELECT_AMOUNT,
    payload: amount,
  });
};

export const addAsset = (asset) => async (dispatch, getState) => {
  const state = getState();
  const activeCurrency = state.currencies.data.find((el) => el.isActive);
  const assets = state.portfolio.assets;
  const newAssets = [...assets, asset];
  dispatch({
    type: ADD_PORTFOLIO_ASSET,
    payload: newAssets,
  });
  await loadHistoricalCoinData(activeCurrency)
  await loadCurrentCoinMarketData(activeCurrency)
};

export const removeAsset = (asset) => (dispatch, getState) => {
  const state = getState();
  const assets = state.portfolio.assets;
  dispatch({
    type: REMOVE_PORTFOLIO_ASSET,
    payload: assets.filter((el) => el.id !== asset.id),
  });
};

export const selectDate = (date) => (dispatch, getState) => {
  dispatch({
    type: SELECT_AMOUNT,
    payload: date,
  });
};

export const clearSearchResults = () => (dispatch, getState) => {
  dispatch({
    type: CLEAR_SEARCH_RESULTS,
    payload: [],
  });
};

//change name to loadHistoricalCoinData
export const loadHistoricalCoinData =
  (activeCurrency) => async (dispatch, getState) => {
    const state = getState();
    const savedCoins = state.portfolio.assets;
    const ids = savedCoins.map((asset) => asset.data.id);
    const idStrings = ids.toString().replaceAll(",", "%2C");

    let loadedCoins = savedCoins;
    dispatch({ type: LOAD_ASSETS_HISTORICAL_DATA_PENDING });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}&ids=${idStrings}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );
      loadedCoins = loadedCoins.map((coin) => {
        const currentMarketData = data.find((el) => el.id === coin.data.id);
        return {
          ...coin,
          currentMarketData,
        };
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: LOAD_ASSETS_HISTORICAL_DATA_ERROR,
        payload: loadedCoins,
      });
    }

    dispatch({
      type: LOAD_ASSETS_HISTORICAL_DATA_SUCCESS,
      payload: loadedCoins,
    });
  };

//load current coin market data
export const loadCurrentCoinMarketData =
  (activeCurrency) => async (dispatch, getState) => {
    const state = getState();
    let loadedCoins = state.portfolio.assets;

    dispatch({ type: LOAD_ASSETS_CURRENT_DATA_PENDING });
    loadedCoins = await Promise.all(
      [...state.portfolio.assets].map(async (asset) => {
        try {
          const date = asset.datePurchased;
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${asset.data.id}/market_chart?vs_currency=${activeCurrency.name}&days=23`
          );
          return {
            ...asset,
            historicalMarketData: data,
          };
        } catch (err) {
          console.log(err);
          return asset;
        }
      })
    );
    dispatch({
      type: LOAD_ASSETS_CURRENT_DATA_SUCCESS,
      payload: loadedCoins,
    });
  };
