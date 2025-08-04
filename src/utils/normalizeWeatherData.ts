import { convertToCelsius, convertToKmPerHr } from "./generalUtils"

// normalize the weather data into the object returned below
export const normalizeWeatherData = (data) => {
    return {
        name: data.name,
        temp: convertToCelsius(data.main.temp),
        windSpeed: convertToKmPerHr(data.wind.speed),
        condition: data.weather[0].main,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
    }
}

// normalize 5 day forecast into the object returned below
export const normalizeForecastData = (data) => {
    return data.list
    .filter((_, idx) => idx % 8 === 0)
    .map((item) => ({
        date: new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "short" }),
        icon: item.weather[0].icon,
        temp: Math.round((item.main.temp - 32) * 5 / 9),
        description: item.weather[0].description
    }));
}