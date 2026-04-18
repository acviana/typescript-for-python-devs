import { describe, it, expect } from 'vitest';
import { isValidNumber } from './puzzle';

describe('Puzzle 1: Number Validator', () => {
  describe('valid numbers', () => {
    it('should accept single digit', () => {
      expect(isValidNumber('5')).toBe(true);
    });

    it('should accept multi-digit number', () => {
      expect(isValidNumber('123')).toBe(true);
    });

    it('should accept zero', () => {
      expect(isValidNumber('0')).toBe(true);
    });

    it('should accept large valid number within safe range', () => {
      expect(isValidNumber('9007199254740991')).toBe(true);
    });
  });

  describe('empty input', () => {
    it('should reject empty string', () => {
      expect(isValidNumber('')).toBe(false);
    });
  });

  describe('leading zeros', () => {
    it('should reject leading zeros on multi-digit number', () => {
      expect(isValidNumber('007')).toBe(false);
    });

    it('should reject leading zeros on single digit', () => {
      expect(isValidNumber('00')).toBe(false);
    });

    it('should accept zero itself', () => {
      expect(isValidNumber('0')).toBe(true);
    });
  });

  describe('non-numeric characters', () => {
    it('should reject decimal point', () => {
      expect(isValidNumber('12.5')).toBe(false);
    });

    it('should reject negative sign', () => {
      expect(isValidNumber('-5')).toBe(false);
    });

    it('should reject positive sign', () => {
      expect(isValidNumber('+5')).toBe(false);
    });

    it('should reject letters', () => {
      expect(isValidNumber('abc')).toBe(false);
    });

    it('should reject mixed alphanumeric', () => {
      expect(isValidNumber('12a34')).toBe(false);
    });

    it('should reject spaces', () => {
      expect(isValidNumber('12 34')).toBe(false);
    });

    it('should reject empty with spaces', () => {
      expect(isValidNumber('   ')).toBe(false);
    });
  });

  describe('range validation', () => {
    it('should reject number above safe integer max', () => {
      expect(isValidNumber('9007199254740992')).toBe(false);
    });

    it('should reject very large number', () => {
      expect(isValidNumber('9999999999999999999')).toBe(false);
    });
  });

  describe('edge cases', () => {
    it('should handle single digits', () => {
      for (let i = 0; i <= 9; i++) {
        expect(isValidNumber(String(i))).toBe(true);
      }
    });

    it('should reject whitespace padding', () => {
      expect(isValidNumber(' 123')).toBe(false);
      expect(isValidNumber('123 ')).toBe(false);
    });
  });
});
