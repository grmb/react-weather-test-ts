import { API_CONSTANTS } from "../constants/constants";


const apiKey = import.meta.env.VITE_API_KEY;

export const fetchWeatherData = async (cityName) => {
    const apiWeatherUrl = `${API_CONSTANTS.WEATHER_URL}?q=${cityName}&appid=${apiKey}&units=imperial`;
    const resp = await fetch(apiWeatherUrl);

    if (!resp.ok) {
        console.log(resp);
        throw new Error("Weather data fetch failed.");
    }

    return resp.json();
};

export const fetchForecastData = async (cityName) => {
    const apiForecastUrl = `${API_CONSTANTS.FORECAST_URL}?q=${cityName}&appid=${apiKey}&units=imperial`;
    const resp = await fetch(apiForecastUrl);

    if(!resp.ok) {
        throw new Error("Forecast data fetch failed.");
    }

    return resp.json()
}