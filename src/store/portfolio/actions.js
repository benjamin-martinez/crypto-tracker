import axios from "axios";
import { convertDateToDaysSince } from "utils";
import {
  LOAD_ASSET_SEARCH_SUCCESS,
  LOAD_ASSET_SEARCH_PENDING,
  LOAD_ASSET_SEARCH_ERROR,
  ADD_PORTFOLIO_ASSET,
  REMOVE_PORTFOLIO_ASSET,
  SELECT_AMOUNT,
  CLEAR_SEARCH_RESULTS,
  SELECT_ASSET_FROM_RESULTS,
  LOAD_ASSETS_HISTORICAL_DATA_ERROR,
  LOAD_ASSETS_HISTORICAL_DATA_PENDING,
  LOAD_ASSETS_HISTORICAL_DATA_SUCCESS,
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
  const daysSince = convertDateToDaysSince(asset.datePurchased);
  const { data } = await axios(
    `https://api.coingecko.com/api/v3/coins/${asset.data.id}/market_chart?vs_currency=${activeCurrency.name}&days=${daysSince}`
  );
  const { prices } = data;
  const [, first] = prices[0];
  const [, last] = prices[prices.length - 1];
  const someOtherData = await axios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${activeCurrency.name}&ids=${asset.data.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  );
  const {
    max_supply,
    circulating_supply,
    price_change_percentage_24h,
    current_price,
  } = someOtherData.data[0];
  asset = {
    ...asset,
    first,
    last,
    max_supply,
    circulating_supply,
    price_change_percentage_24h,
    current_price,
  };
  const newAssets = [...assets, asset];
  dispatch({
    type: ADD_PORTFOLIO_ASSET,
    payload: newAssets,
  });
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

export const loadHistoricalCoinData =
  (activeCurrency) => async (dispatch, getState) => {
    const state = getState();
    const savedCoins = state.portfolio.assets;
    let loadedCoins = savedCoins;
    dispatch({
      type: LOAD_ASSETS_HISTORICAL_DATA_PENDING,
    });
    try {
      const newAssets = await Promise.all(
        loadedCoins.map(async (coin) => {
          const daysSince = convertDateToDaysSince(coin.datePurchased);
          const { data } = await axios(
            `https://api.coingecko.com/api/v3/coins/${coin.data.id}/market_chart?vs_currency=${activeCurrency.name}&days=${daysSince}`
          );
          const { prices } = data;
          const [, first] = prices[0];
          const [, last] = prices[prices.length - 1];
          const someOtherData = await axios(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin.data.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
          );
          const {
            max_supply,
            circulating_supply,
            price_change_percentage_24h,
            current_price,
          } = someOtherData.data[0];
          return {
            ...coin,
            first,
            last,
            max_supply,
            circulating_supply,
            price_change_percentage_24h,
            current_price,
          };
        })
      );
      dispatch({
        type: LOAD_ASSETS_HISTORICAL_DATA_SUCCESS,
        payload: newAssets,
      });
    } catch (err) {
      dispatch({
        type: LOAD_ASSETS_HISTORICAL_DATA_ERROR,
        payload: err,
      });
    }
  };
