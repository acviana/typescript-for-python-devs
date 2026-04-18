import { describe, it, expect } from 'vitest';
import { generatePassword, PasswordOptions } from './puzzle';

describe('Puzzle 2: Password Generator', () => {
  const hasUppercase = (str: string): boolean => /[A-Z]/.test(str);
  const hasLowercase = (str: string): boolean => /[a-z]/.test(str);
  const hasNumber = (str: string): boolean => /[0-9]/.test(str);
  const hasSymbol = (str: string): boolean => /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(str);

  describe('basic generation', () => {
    it('should generate password of correct length', () => {
      const password = generatePassword(10, {
        includeUppercase: false,
        includeNumbers: false,
        includeSymbols: false,
      });
      expect(password).toHaveLength(10);
    });

    it('should only include lowercase when all options are false', () => {
      const password = generatePassword(8, {
        includeUppercase: false,
        includeNumbers: false,
        includeSymbols: false,
      });
      expect(hasLowercase(password)).toBe(true);
      expect(hasUppercase(password)).toBe(false);
      expect(hasNumber(password)).toBe(false);
      expect(hasSymbol(password)).toBe(false);
    });
  });

  describe('character type requirements', () => {
    it('should include uppercase when requested', () => {
      const password = generatePassword(8, {
        includeUppercase: true,
        includeNumbers: false,
        includeSymbols: false,
      });
      expect(hasUppercase(password)).toBe(true);
      expect(hasLowercase(password)).toBe(true);
    });

    it('should include numbers when requested', () => {
      const password = generatePassword(8, {
        includeUppercase: false,
        includeNumbers: true,
        includeSymbols: false,
      });
      expect(hasNumber(password)).toBe(true);
      expect(hasLowercase(password)).toBe(true);
    });

    it('should include symbols when requested', () => {
      const password = generatePassword(8, {
        includeUppercase: false,
        includeNumbers: false,
        includeSymbols: true,
      });
      expect(hasSymbol(password)).toBe(true);
      expect(hasLowercase(password)).toBe(true);
    });

    it('should include all types when all options are true', () => {
      const password = generatePassword(12, {
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: true,
      });
      expect(hasUppercase(password)).toBe(true);
      expect(hasLowercase(password)).toBe(true);
      expect(hasNumber(password)).toBe(true);
      expect(hasSymbol(password)).toBe(true);
    });
  });

  describe('validation errors', () => {
    it('should throw error when length is less than required types (uppercase)', () => {
      expect(() =>
        generatePassword(1, {
          includeUppercase: true,
          includeNumbers: false,
          includeSymbols: false,
        })
      ).toThrow();
    });

    it('should throw error when length is less than required types (all options)', () => {
      expect(() =>
        generatePassword(3, {
          includeUppercase: true,
          includeNumbers: true,
          includeSymbols: true,
        })
      ).toThrow();
    });

    it('should accept minimum valid length', () => {
      expect(() =>
        generatePassword(4, {
          includeUppercase: true,
          includeNumbers: true,
          includeSymbols: true,
        })
      ).not.toThrow();
    });
  });

  describe('randomness', () => {
    it('should generate different passwords on multiple calls', () => {
      const passwords = new Set();
      for (let i = 0; i < 10; i++) {
        passwords.add(
          generatePassword(8, {
            includeUppercase: true,
            includeNumbers: true,
            includeSymbols: true,
          })
        );
      }
      // Very unlikely all 10 would be the same
      expect(passwords.size).toBeGreaterThan(1);
    });
  });

  describe('edge cases', () => {
    it('should handle length 1 with no extra options', () => {
      const password = generatePassword(1, {
        includeUppercase: false,
        includeNumbers: false,
        includeSymbols: false,
      });
      expect(password).toHaveLength(1);
      expect(hasLowercase(password)).toBe(true);
    });

    it('should handle large passwords', () => {
      const password = generatePassword(100, {
        includeUppercase: true,
        includeNumbers: true,
        includeSymbols: true,
      });
      expect(password).toHaveLength(100);
      expect(hasUppercase(password)).toBe(true);
      expect(hasLowercase(password)).toBe(true);
      expect(hasNumber(password)).toBe(true);
      expect(hasSymbol(password)).toBe(true);
    });
  });
});
