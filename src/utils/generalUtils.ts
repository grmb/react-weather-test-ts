//  general utility functions

// Convert Farenheit to Celsius
export const convertToCelsius = (temp: number) => {
    return Math.round((temp - 32) * 5/9);
};

// Convert wind speed from mph to km/h
export const convertToKmPerHr = (speed: number) => {
    return Math.round(speed * 1.60934);
}