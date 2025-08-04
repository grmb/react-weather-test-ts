import './WeatherDetails.css';

const WeatherDetails = ({ weatherData }) => {
    
    return (
            <div className="weather-details">
                {weatherData  &&
                    <div>
                        <div>
                            <p className="title">Humidity</p>
                            <p className="detail">{weatherData?.humidity ? weatherData?.humidity : "-"}%</p>
                        </div>
                        <div>
                            <p className="title">Wind Speed</p>
                            <p className="detail">{weatherData?.windSpeed ? weatherData?.windSpeed  :  "-"} km/h</p>
                        </div>
                    </div>
                }
                
            </div>
    )
}

export default WeatherDetails

