import {
  WeatherState,
  WeatherAction,
  GET_WEATHER,
  GET_MAXMIN,
  SET_LOADING,
  SET_ERROR,
  SET_OPENED,
} from "../types";

const initialState: WeatherState = {
  data: [],
  loading: false,
  opened: undefined,
  error: "",
  max: undefined,
  min: undefined,
};

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER: {
      if (state.data.length === 0) {
        return {
          ...state,
          data: [
            ...state.data,
            action.payload,
          ],
          loading: false,
          error: "",
        };
      }

      const filteredData = state.data.filter(city => (
        city.lat !== action.payload.lat
      ));

      return {
        ...state,
        data: [
          ...filteredData,
          action.payload,
        ],
        loading: false,
        error: "",
      };
    }

    case GET_MAXMIN: {
      if (state.data.length === 0) {
        return {
          ...state,
        };
      }

      const max = state.data
        .reduce(
          (prev, current) => (
            (prev?.daily[0]?.temp?.max > current?.daily[0]?.temp?.max) ? prev : current),
        );

      const min = state.data
        .reduce(
          (prev, current) => (
            (prev?.daily[0]?.temp?.min < current?.daily[0]?.temp?.min) ? prev : current),
        );

      return {
        ...state,
        max,
        min,
        loading: false,
      };
    }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case SET_OPENED:
      return {
        ...state,
        opened: action.payload,
      };
    default:
      return state;
  }
};
