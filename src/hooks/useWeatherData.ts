import { useState, useEffect } from "react";
import { fetchWeatherData, fetchForecastData } from "../services/weatherApi";
import { normalizeForecastData, normalizeWeatherData } from "../utils/normalizeWeatherData";
import { isEmpty } from "lodash";

export const useWeatherData = (defaultCity = "Singapore") => {
    const [weatherData, setWeatherData] = useState({});
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState(defaultCity);
    const [searchInput, setSearchInput] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const loadWeatherData = async (cityName: string) => {
        setIsLoading(true);
        setError("");
        try {
            const rawWeatherData = await fetchWeatherData(cityName);
            const rawForecastData = await fetchForecastData(cityName);
            setCity(cityName);
            if (!isEmpty(rawWeatherData) && !isEmpty(rawForecastData)) {
                setWeatherData(normalizeWeatherData(rawWeatherData));
                setForecast(normalizeForecastData(rawForecastData));
            } else {
                throw new Error("Either weather or forecast data are empty.");
            }
        } catch (err) {
            console.log(err);
            setError("Could not fetch weather data, please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        loadWeatherData(city);
    }, [city])

    return {
        city,
        searchInput,
        setSearchInput,
        weatherData,
        forecast,
        error,
        isLoading,
        fetchWeatherData: loadWeatherData
    }
}