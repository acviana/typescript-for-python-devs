/**
 * Tests for Lesson 1: TypeScript Basics
 * 
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 1: TypeScript Basics', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Variable Type Annotations', () => {
    it('should declare firstName as a string', () => {
      expect(kata.firstName).toBe('Alice');
      expect(typeof kata.firstName).toBe('string');
    });

    it('should declare age as a number', () => {
      expect(kata.age).toBe(30);
      expect(typeof kata.age).toBe('number');
    });

    it('should declare isActive as a boolean', () => {
      expect(kata.isActive).toBe(true);
      expect(typeof kata.isActive).toBe('boolean');
    });
  });

  describe('Exercise 2: Type Inference', () => {
    it('should declare lastName with inferred string type', () => {
      expect(kata.lastName).toBe('Smith');
      expect(typeof kata.lastName).toBe('string');
    });

    it('should declare score with inferred number type', () => {
      expect(kata.score).toBe(95.5);
      expect(typeof kata.score).toBe('number');
    });

    it('should declare isComplete with inferred boolean type', () => {
      expect(kata.isComplete).toBe(false);
      expect(typeof kata.isComplete).toBe('boolean');
    });
  });

  describe('Exercise 3: Array Types', () => {
    it('should declare numbers as an array of numbers', () => {
      expect(kata.numbers).toEqual([1, 2, 3, 4, 5]);
      expect(Array.isArray(kata.numbers)).toBe(true);
    });

    it('should declare colors as an array of strings', () => {
      expect(kata.colors).toEqual(['red', 'green', 'blue']);
      expect(Array.isArray(kata.colors)).toBe(true);
    });
  });

  describe('Exercise 4: Function with Type Annotations', () => {
    it('should add two numbers correctly', () => {
      expect(kata.addNumbers(5, 3)).toBe(8);
      expect(kata.addNumbers(0, 0)).toBe(0);
      expect(kata.addNumbers(-5, 10)).toBe(5);
      expect(kata.addNumbers(1.5, 2.5)).toBe(4);
    });
  });

  describe('Exercise 5: Function with String Manipulation', () => {
    it('should greet with the correct format', () => {
      expect(kata.greet('Alice')).toBe('Hello, Alice!');
      expect(kata.greet('Bob')).toBe('Hello, Bob!');
      expect(kata.greet('TypeScript')).toBe('Hello, TypeScript!');
    });
  });

  describe('Exercise 6: Function with Array Parameter', () => {
    it('should find the maximum number in an array', () => {
      expect(kata.findMax([1, 5, 3, 9, 2])).toBe(9);
      expect(kata.findMax([10])).toBe(10);
      expect(kata.findMax([-5, -1, -10, -3])).toBe(-1);
      expect(kata.findMax([0, 0, 0])).toBe(0);
    });
  });

  describe('Exercise 7: Optional Parameters', () => {
    it('should greet with provided name', () => {
      expect(kata.greetWithDefault('Alice')).toBe('Hello, Alice!');
      expect(kata.greetWithDefault('Bob')).toBe('Hello, Bob!');
    });

    it('should greet with default name when no argument provided', () => {
      expect(kata.greetWithDefault()).toBe('Hello, Guest!');
    });
  });

  describe('Exercise 8: Object Types', () => {
    it('should create person object with correct properties for adult', () => {
      const person = kata.createPerson('Alice', 30);
      expect(person).toEqual({
        name: 'Alice',
        age: 30,
        isAdult: true,
      });
    });

    it('should create person object with correct properties for minor', () => {
      const person = kata.createPerson('Bob', 15);
      expect(person).toEqual({
        name: 'Bob',
        age: 15,
        isAdult: false,
      });
    });

    it('should handle edge case of exactly 18 years old', () => {
      const person = kata.createPerson('Charlie', 18);
      expect(person.isAdult).toBe(true);
    });
  });

  describe('Exercise 9: Working with Tuples', () => {
    it('should return coordinates as a tuple', () => {
      const coords = kata.getCoordinates();
      expect(coords).toEqual([10, 20]);
      expect(Array.isArray(coords)).toBe(true);
      expect(coords.length).toBe(2);
    });
  });
});
