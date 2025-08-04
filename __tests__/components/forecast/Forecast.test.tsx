import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import Forecast from '../../../src/components/forecast/Forecast';
import { forecastDataSample } from '../../constants/test-constants';



describe("Forecast", () => {

  it('renders the Forecast component', () => {
    render(<Forecast forecast={forecastDataSample}/>)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})