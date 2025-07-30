import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import FormInput from '../../src/components/form-input/FormInput';

describe('FormInput component', () => {
    it('renders input and button', () => {
        render(
            <FormInput 
                searchInput=""
                setSearchInput="{() => {}}"
                fetchWeatherData="{() => {}}"
                error=""
            />
        );

        // expect(screen.getByPlaceholderText(/enter city name/i)).toBeInTheDocument();
        // expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
        screen.debug();
    });

    // it('calls setSearchInput on input change', () => {
    //     const setSearchInput = vi.fn();
    //     render(
    //         <FormInput 
    //             searchInput=""
    //             setSearchInput={setSearchInput}
    //             fetchWeatherData={() => {}}
    //             error=""
    //         />
    //     );

    //     const input = screen.getByPlaceholderText(/enter city name/i);
    //     fireEvent.change(input, { target: { value: 'London' } });

    //     expect(setSearchInput).toHaveBeenCalledWith('London');
    // });

    // it('calls fetchWeatherData on form submit', () => {
    //     const fetchWeatherData = vi.fn();
    //     const searchInput = 'Paris';

    //     render(
    //         <FormInput 
    //             searchInput={searchInput}
    //             setSearchInput={() => {}}
    //             fetchWeatherData={fetchWeatherData}
    //             error=""
    //         />
    //     );

    //     const button = screen.getByRole('button', { name: /search/i });
    //     fireEvent.click(button);

    //     expect(fetchWeatherData).toHaveBeenCalledWith('Paris');
    // });

    // it('renders error message if error prop is provided', () => {
    //     render(
    //         <FormInput 
    //             searchInput=""
    //             setSearchInput={() => {}}
    //             fetchWeatherData={() => {}}
    //             error="City not found"
    //         />
    //     );

    //     expect(screen.getByText(/city not found/i)).toBeInTheDocument();
    // });
});