import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import WeatherDetails from '../../src/components/weather-details/WeatherDetails'



describe("WeatherDetails", () => {

  it('renders the WeatherDetails component', () => {
    render(<WeatherDetails />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})