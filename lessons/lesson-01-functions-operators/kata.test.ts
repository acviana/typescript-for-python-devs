/**
 * Tests for Lesson 1: JavaScript Functions & Operators
 * 
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 1: JavaScript Functions & Operators', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Function Declarations & Arrow Functions', () => {
    it('should add numbers with regular function', () => {
      expect(kata.addNumbers(5, 3)).toBe(8);
      expect(kata.addNumbers(10, -5)).toBe(5);
    });

    it('should multiply numbers with arrow function', () => {
      expect(kata.multiplyNumbers(4, 5)).toBe(20);
      expect(kata.multiplyNumbers(7, 3)).toBe(21);
    });

    it('should square a number with implicit return', () => {
      expect(kata.square(5)).toBe(25);
      expect(kata.square(10)).toBe(100);
    });

    it('should greet person with arrow function', () => {
      expect(kata.greetPerson("Alice")).toBe("Hello, Alice!");
      expect(kata.greetPerson("Bob")).toBe("Hello, Bob!");
    });
  });

  describe('Exercise 2: Nullish Coalescing & Optional Chaining', () => {
    it('should return value or default using ??', () => {
      expect(kata.getValueOrDefault("test")).toBe("test");
      expect(kata.getValueOrDefault(null)).toBe("default");
      expect(kata.getValueOrDefault(undefined)).toBe("default");
    });

    it('should handle 0 and empty string correctly with ??', () => {
      expect(kata.getValueOrDefault(0)).toBe(0);
      expect(kata.getValueOrDefault("")).toBe("");
      expect(kata.getValueOrDefault(false)).toBe(false);
    });

    it('should safely access nested user city', () => {
      const user1 = { address: { city: "NYC" } };
      const user2 = { address: {} };
      const user3 = {};
      
      expect(kata.getUserCity(user1)).toBe("NYC");
      expect(kata.getUserCity(user2)).toBeUndefined();
      expect(kata.getUserCity(user3)).toBeUndefined();
    });

    it('should return count or zero', () => {
      expect(kata.getCountOrZero(5)).toBe(5);
      expect(kata.getCountOrZero(0)).toBe(0);  // 0 is valid, not "missing"
      expect(kata.getCountOrZero(null)).toBe(0);
      expect(kata.getCountOrZero(undefined)).toBe(0);
    });
  });

  describe('Exercise 3: Destructuring Objects & Arrays', () => {
    it('should extract first two elements', () => {
      const result = kata.getFirstTwo([10, 20, 30, 40]);
      expect(result).toEqual({ first: 10, second: 20 });
    });

    it('should format person info using destructuring', () => {
      const person = { firstName: "John", lastName: "Doe", age: 30 };
      expect(kata.getPersonInfo(person)).toBe("John Doe is 30 years old");
    });

    it('should split array into head and tail', () => {
      const result = kata.splitArray([1, 2, 3, 4, 5]);
      expect(result).toEqual({ head: 1, tail: [2, 3, 4, 5] });
    });

    it('should handle single element array', () => {
      const result = kata.splitArray([42]);
      expect(result).toEqual({ head: 42, tail: [] });
    });
  });

  describe('Exercise 4: Loops', () => {
    it('should sum array using for...of', () => {
      expect(kata.sumArray([1, 2, 3, 4, 5])).toBe(15);
      expect(kata.sumArray([10, 20, 30])).toBe(60);
      expect(kata.sumArray([])).toBe(0);
    });

    it('should count object properties using for...in', () => {
      expect(kata.countProperties({ a: 1, b: 2, c: 3 })).toBe(3);
      expect(kata.countProperties({ x: 10 })).toBe(1);
      expect(kata.countProperties({})).toBe(0);
    });

    it('should double array values using forEach', () => {
      expect(kata.doubleArray([1, 2, 3])).toEqual([2, 4, 6]);
      expect(kata.doubleArray([5, 10, 15])).toEqual([10, 20, 30]);
      expect(kata.doubleArray([])).toEqual([]);
    });

    it('should find first occurrence using traditional for loop', () => {
      expect(kata.findFirst([1, 2, 3, 4, 5], 3)).toBe(2);
      expect(kata.findFirst([10, 20, 30], 20)).toBe(1);
      expect(kata.findFirst([1, 2, 3], 99)).toBe(-1);
    });
  });

  describe('Exercise 5: Spread Operator', () => {
    it('should copy array using spread', () => {
      const original = [1, 2, 3];
      const copy = kata.copyArray(original);
      expect(copy).toEqual([1, 2, 3]);
      expect(copy).not.toBe(original); // Should be different reference
    });

    it('should merge arrays using spread', () => {
      expect(kata.mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
      expect(kata.mergeArrays([], [1, 2])).toEqual([1, 2]);
      expect(kata.mergeArrays([1], [])).toEqual([1]);
    });

    it('should add property to object using spread', () => {
      const result = kata.addProperty({ a: 1 }, "b", 2);
      expect(result).toEqual({ a: 1, b: 2 });
      
      const result2 = kata.addProperty({}, "x", 10);
      expect(result2).toEqual({ x: 10 });
    });

    it('should update person properties using spread', () => {
      const person = { name: "Alice", age: 30, city: "NYC" };
      const result = kata.updatePerson(person, { age: 31, city: "LA" });
      expect(result).toEqual({ name: "Alice", age: 31, city: "LA" });
      expect(result).not.toBe(person); // Should be new object
    });
  });

  describe('Exercise 6: Comprehensive Exercise', () => {
    it('should process users with all cities', () => {
      const users = [
        { name: "Alice", age: 30, city: "NYC" },
        { name: "Bob", age: 25, city: "LA" }
      ];
      const result = kata.processUsers(users);
      expect(result).toEqual([
        "Alice (30) from NYC",
        "Bob (25) from LA"
      ]);
    });

    it('should handle missing city with default', () => {
      const users = [
        { name: "Alice", age: 30, city: "NYC" },
        { name: "Charlie", age: 35 }  // No city
      ];
      const result = kata.processUsers(users);
      expect(result).toEqual([
        "Alice (30) from NYC",
        "Charlie (35) from Unknown"
      ]);
    });

    it('should process empty array', () => {
      const result = kata.processUsers([]);
      expect(result).toEqual([]);
    });

    it('should handle all users without cities', () => {
      const users = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 }
      ];
      const result = kata.processUsers(users);
      expect(result).toEqual([
        "Alice (30) from Unknown",
        "Bob (25) from Unknown"
      ]);
    });
  });
});
