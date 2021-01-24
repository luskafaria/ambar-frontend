import { ThunkAction } from "redux-thunk";

import fetchWeather from "utils/fetchWeather";

import { RootState } from "..";
import {
  WeatherAction,
  WeatherData,
  WeatherError,
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
  SET_OPENED,
  GET_MAXMIN,
} from "../types";

export const getWeather = (
  lat: number,
  lon: number,
): ThunkAction<void, RootState, null, WeatherAction> => async dispatch => {
  try {
    const response = await fetchWeather(lat, lon);

    if (response.statusText === "error") {
      const responseData: WeatherError = {
        cod: response.status,
        message: response.statusText,
      };
      throw new Error(responseData.message);
    }

    const responseData: WeatherData = response.data;
    dispatch({
      type: GET_WEATHER,
      payload: responseData,
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message,
    });
  }
};

export const getMaxMin = (): WeatherAction => ({
  type: GET_MAXMIN,
});

export const setLoading = (): WeatherAction => ({
  type: SET_LOADING,
});

export const setError = (): WeatherAction => ({
  type: SET_ERROR,
  payload: "",
});

export const setOpened = (city: WeatherData): WeatherAction => ({
  type: SET_OPENED,
  payload: city,
});
