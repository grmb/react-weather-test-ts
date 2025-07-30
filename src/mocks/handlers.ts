import { http, HttpResponse } from 'msw'
import weatherResp from "./mock-data/weather-data.json";
import forecastResp from "./mock-data/forecast-data.json";
import { API_CONSTANTS } from "../constants/constants";

export const handlers = [
    http.get(API_CONSTANTS.WEATHER_URL, () => {
        return HttpResponse.json(weatherResp);
    }),

    http.get(API_CONSTANTS.FORECAST_URL, () => {
        return HttpResponse.json(forecastResp);
    }),
]