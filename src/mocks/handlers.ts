import { http, HttpResponse } from 'msw'
import weatherResp from "./mock-data/weather-data.json";
import forecastResp from "./mock-data/forecast-data.json";
import { API_CONSTANTS } from "../constants/constants";

export const handlers = [
    http.get(API_CONSTANTS.DOMAIN + API_CONSTANTS.WEATHER_ENDPOINT, () => {
        return HttpResponse.json(weatherResp);
    }),

    http.get(API_CONSTANTS.DOMAIN + API_CONSTANTS.FORECAST_ENDPOINT, () => {
        return HttpResponse.json(forecastResp);
    }),
]