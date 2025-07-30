import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import Forecast from '../../src/components/forecast/Forecast';



describe("Forecast", () => {

  it('renders the Forecast component', () => {
    render(<Forecast />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})