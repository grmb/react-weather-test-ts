import { useEffect } from 'react'
import './App.css'
import Forecast from './components/forecast/Forecast'
import FormInput from './components/form-input/FormInput'
import Header from './components/header/Header'
import WeatherDetails from './components/weather-details/WeatherDetails'
import { useWeatherData } from './hooks/useWeatherData'

const App = () => {

  const {
   searchInput,
   setSearchInput,
   weatherData,
   forecast,
   error,
   isLoading,
   fetchWeatherData,
  } = useWeatherData("Singapore");

  if(isLoading) return <div className="wrapper">loading...</div>
  return (
    <div className="container">
      <FormInput searchInput={searchInput} setSearchInput={setSearchInput} fetchWeatherData={fetchWeatherData} error={error}/>
      <Header weatherData={weatherData}/>
      <WeatherDetails weatherData={weatherData} />
      <Forecast forecast={forecast}/>
    </div>
  )
}

export default App
