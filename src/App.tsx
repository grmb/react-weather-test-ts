import './App.css'
import Forecast from './components/forecast/Forecast'
import FormInput from './components/form-input/FormInput'
import Header from './components/header/Header'
import WeatherDetails from './components/weather-details/WeatherDetails'

function App() {

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
