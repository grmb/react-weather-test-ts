# React Weather App

This React app retrieves the weather data for a specific city.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file created on the root folder.

`VITE_API_KEY` - This is the API key that is required to retrieve live data from OpenWeather (https://openweathermap.org/api). An account is needed to generate the API key.

`VITE_ENABLE_MOCK_DATA` - Setting this to "true" will retrieve the mock data instead of the live data, under '/src/mocks/mock-data'. Setting this to "false" will retrieve the live data from the API using the `VITE_API_KEY`.



## Run Locally

Clone the project

```bash
  git clone https://github.com/grmb/react-weather-test-ts.git
```

Create a .env file on the root folder and add the variables mentioned in Environment Variables.

Go to the project directory

```bash
  cd react-weather-test-ts
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```

Test coverage can be run with

```bash
  npm run coverage
```

