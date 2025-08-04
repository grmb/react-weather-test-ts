import { describe, expect, it } from 'vitest';
import { convertToCelsius, convertToKmPerHr } from '../../src/utils/generalUtils';

describe("Convert to Celsius", () => {
    it("convert temperature from farenheit to celsius", () => {
        const input = convertToCelsius(212);
        expect(input).toBe(100);
    });
});

describe("Convert to km/h", () => {
    it("convert speed from mph to kph", () => {
        const input = convertToKmPerHr(1);
        expect(input).toBe(2);
    });
})