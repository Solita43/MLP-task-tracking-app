import formatTimeLeft from './formatTimeLeft';
import { describe, expect, it } from 'vitest';

describe('formatTimeLeft', () => {
    it('shows hours and minutes', () => { 
        expect(formatTimeLeft(80 * 60)).toBe('1h 20m'); })

    it('shows only minutes under an hour', () => { 
        expect(formatTimeLeft(45 * 60)).toBe('45m');})

    it('shows only hours on an exact hour', () => { 
        expect(formatTimeLeft(120 * 60)).toBe('2h');})

    it('shows 0m at zero', () => { 
        expect(formatTimeLeft(0)).toBe('0m');})
    
    it('shows 0m for negative values', () => { 
        expect(formatTimeLeft(-100)).toBe('0m');})

    it('rounds to the nearest minute', () => {
        expect(formatTimeLeft(61)).toBe('1m');
        expect(formatTimeLeft(119)).toBe('2m');
    });
});
