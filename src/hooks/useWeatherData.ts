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
    
    const loadWeatherData = (cityName: string) => {
        try {
            fetchWeatherData(cityName)
            .then((resp) => {
                setWeatherData(normalizeWeatherData(resp.data));
            } );
            fetchForecastData(cityName)
            .then((resp) => {
                setForecast(normalizeForecastData(resp.data));
            } );
            setCity(cityName);
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