import './FormInput.css';

const FormInput = ({ searchInput, setSearchInput, fetchWeatherData, error }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        fetchWeatherData(searchInput);
    }
    return (
        <>
            <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Enter city name"
                  className="search-input"
                />
                <button type="submit" className="search-btn">Search</button>  
            </form>
            {error && <p className="error">{error}</p>}
        </>
          
          
    )
}

export default FormInput