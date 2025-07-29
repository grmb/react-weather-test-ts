import "./Header.css";


function Header() {
   
    return (
        <div className="header">
          <div>
            <h1 className="heading">Tokyo</h1>
            <p className="temperature">30°C</p>
            <img
                className="condition-image"
                 src=""
                 alt=""
            />
            <p className="condition">Cloudy</p>
          </div>
          
       
        </div>
    )
}

export default Header