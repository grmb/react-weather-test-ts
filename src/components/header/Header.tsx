import "./Header.css";


const Header = ({ weatherData }) => {
   
    return (
        <div className="header">
          { weatherData && (<div>
            <h1 className="heading">{weatherData?.name ? weatherData.name : "-"}</h1>
            <p className="temperature">{weatherData?.temp ? weatherData?.temp :"-"}°C</p>
            <img
                className="condition-image"
                 src={`http://openweathermap.org/img/wn/${weatherData.icon}.png`}
                 alt={weatherData?.description || ""}
            />
            <p className="condition">Cloudy</p>
          </div>)
          }
       
        </div>
    )
}

export default Header