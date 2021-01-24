import { AxiosResponse } from "axios";

import { API_KEY } from "constants/api";
import api from "settings/api/api";
import { WeatherData } from "store/types";

export default function fetchWeather(
  lat: number,
  lon: number,
): Promise<AxiosResponse<WeatherData>> {
  return api.get<WeatherData>("/onecall", {
    params: {
      lat,
      lon,
      lang: "pt_br",
      units: "metric",
      exclude: "minutely,hourly,alerts, current",
      appid: API_KEY,
    },
  });
}
