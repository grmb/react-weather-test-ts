import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react'
import Header from '../../../src/components/header/Header'


describe("Header", () => {
  it('renders the Header component', () => {
    render(<Header />)
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})