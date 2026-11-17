import formatTimeLeft from './formatTimeLeft';
import { describe, expect, it } from 'vitest';

describe('formatTimeLeft', () => {
    it('should format time left correctly', () => {
        expect(formatTimeLeft(80 * 60)).toBe('1h 20m');
        expect(formatTimeLeft(45 * 60)).toBe('45m');
        expect(formatTimeLeft(120 * 60)).toBe('2h');
        expect(formatTimeLeft(0)).toBe('0m');
    });
});
