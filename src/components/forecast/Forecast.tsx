import "./Forecast.css";

function Forecast() {
    return (
        <div className="forecast">
        <h2 className="forecast-header">5-Day Forecast</h2>
        <div className="forecast-days">
          {/* { forecast.length > 0 && (
            <>
                {forecast.map((day, index) => (
                <div key={index} className="forecast-day">
                  <p>
                    {day.date}
                  </p> 
                  <img
                    src={`http://openweathermap.org/img/wn/${day.icon}.png`}
                    alt={day.description}
                  />
                  <p>{day.temp}°C</p>
                </div>
              ))}
          </>
          )
           
          } */}
          
        </div>
        </div>
    )
}

export default Forecast