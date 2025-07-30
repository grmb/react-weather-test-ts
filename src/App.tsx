import { useEffect } from 'react'
import './App.css'
import Forecast from './components/forecast/Forecast'
import FormInput from './components/form-input/FormInput'
import Header from './components/header/Header'
import WeatherDetails from './components/weather-details/WeatherDetails'
import { fetchWeatherData, fetchForecastData} from './services/weatherApi'

function App() {

  const loadWeather = async (cityName = "Tokyo") => {
    try {
      const rawWeatherData = await fetchWeatherData(cityName);
      const rawForecastData = await fetchForecastData(cityName);
    } catch (err) {
      console.log(err);
    } 
  }
  
  loadWeather();
  return (
    <div className="container">
      <FormInput searchInput={"searchInput"} setSearchInput={"setSearchInput"} fetchWeatherData={"fetchWeatherData"} error={"error"}/>
      <Header />
      <WeatherDetails />
      <Forecast />
    </div>
  )
}

export default App
