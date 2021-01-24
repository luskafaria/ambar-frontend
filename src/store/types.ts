export const GET_WEATHER = "GET_WEATHER";
export const GET_MAXMIN = "GET_MAXMIN";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";
export const SET_OPENED = "SET_OPENED";

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  name?: string;
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherData;
  daily: DailyWeatherData[];
}

export interface CurrentWeatherData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export interface DailyWeatherData {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface WeatherError {
  cod: number;
  message: string;
}

export interface WeatherState {
  data: WeatherData[];
  loading: boolean;
  error: string;
  opened?: WeatherData;
  max?: WeatherData;
  min?: WeatherData;
}

interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface GetMaxMinAction {
  type: typeof GET_MAXMIN;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

interface SetOpened {
  type: typeof SET_OPENED;
  payload: WeatherData;
}

export type WeatherAction =
  GetWeatherAction | SetLoadingAction | SetErrorAction | SetOpened | GetMaxMinAction;

export interface City extends CityCoords {
  name?: string;
}

export interface CityCoords {
  lat: number;
  lon: number;
}
