import './WeatherDetails.css';

function WeatherDetails() {
    
    return (
            <div className="weather-details">
                <div>
                    <div>
                        <p className="title">Humidity</p>
                        <p className="detail">40%</p>
                    </div>
                    <div>
                        <p className="title">Wind Speed</p>
                        <p className="detail">30 km/h</p>
                    </div>
                </div>
            </div>
    )
}

export default WeatherDetails

