import { API_CONSTANTS } from "../constants/constants";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: API_CONSTANTS.DOMAIN, // Replace with your API base URL
  timeout: 5000, // Optional: request timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchWeatherData = async (cityName) => {
   return apiClient.get(API_CONSTANTS.WEATHER_ENDPOINT +`?q=${cityName}&appid=${apiKey}&units=imperial`)
};

export const fetchForecastData = async (cityName) => {
   return apiClient.get(API_CONSTANTS.FORECAST_ENDPOINT +`?q=${cityName}&appid=${apiKey}&units=imperial`)
};