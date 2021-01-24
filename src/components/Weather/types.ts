import { WeatherData } from "store/types";

export interface WeatherProps {
  cityWeatherData?: WeatherData;
  isOpened: boolean;
}
