/**
 * Tests for Lesson 7: Array Methods with Types
 *
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 7: Array Methods with Types', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  // ===========================================================================
  // Exercise 1: map
  // ===========================================================================
  describe('Exercise 1: map', () => {
    describe('double', () => {
      it('should double all numbers', () => {
        expect(kata.double([1, 2, 3])).toEqual([2, 4, 6]);
      });

      it('should handle negative numbers', () => {
        expect(kata.double([-1, 0, 2])).toEqual([-2, 0, 4]);
      });

      it('should return an empty array for empty input', () => {
        expect(kata.double([])).toEqual([]);
      });
    });

    describe('toStrings', () => {
      it('should convert numbers to strings', () => {
        expect(kata.toStrings([1, 2, 3])).toEqual(['1', '2', '3']);
      });

      it('should handle zero and negatives', () => {
        expect(kata.toStrings([0, -1, 42])).toEqual(['0', '-1', '42']);
      });
    });

    describe('pluckNames', () => {
      it('should extract names from people array', () => {
        const people = [
          { name: 'Alice', age: 30 },
          { name: 'Bob', age: 25 },
        ];
        expect(kata.pluckNames(people)).toEqual(['Alice', 'Bob']);
      });

      it('should return empty array for empty input', () => {
        expect(kata.pluckNames([])).toEqual([]);
      });
    });
  });

  // ===========================================================================
  // Exercise 2: filter
  // ===========================================================================
  describe('Exercise 2: filter', () => {
    describe('evens', () => {
      it('should return only even numbers', () => {
        expect(kata.evens([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
      });

      it('should return empty array if no evens', () => {
        expect(kata.evens([1, 3, 5])).toEqual([]);
      });

      it('should handle empty input', () => {
        expect(kata.evens([])).toEqual([]);
      });
    });

    describe('longStrings', () => {
      it('should return strings with length >= minLength', () => {
        expect(kata.longStrings(['hi', 'hello', 'hey', 'howdy'], 4)).toEqual(['hello', 'howdy']);
      });

      it('should include strings exactly at minLength', () => {
        expect(kata.longStrings(['cat', 'dog', 'fish'], 3)).toEqual(['cat', 'dog', 'fish']);
      });

      it('should return empty array if none qualify', () => {
        expect(kata.longStrings(['hi', 'no'], 10)).toEqual([]);
      });
    });

    describe('activeUsers', () => {
      it('should return only active users', () => {
        const users = [
          { name: 'Alice', active: true },
          { name: 'Bob', active: false },
          { name: 'Carol', active: true },
        ];
        expect(kata.activeUsers(users)).toEqual([
          { name: 'Alice', active: true },
          { name: 'Carol', active: true },
        ]);
      });

      it('should return empty array if no active users', () => {
        const users = [{ name: 'Bob', active: false }];
        expect(kata.activeUsers(users)).toEqual([]);
      });
    });
  });

  // ===========================================================================
  // Exercise 3: find & findIndex
  // ===========================================================================
  describe('Exercise 3: find & findIndex', () => {
    describe('findFirst', () => {
      it('should return the first number greater than target', () => {
        expect(kata.findFirst([1, 2, 3, 4], 2)).toBe(3);
      });

      it('should return undefined if no number is greater', () => {
        expect(kata.findFirst([1, 2, 3], 10)).toBeUndefined();
      });

      it('should return the first match, not all matches', () => {
        expect(kata.findFirst([5, 10, 15], 4)).toBe(5);
      });
    });

    describe('findUserByName', () => {
      const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Carol' },
      ];

      it('should find a user by name', () => {
        expect(kata.findUserByName(users, 'Bob')).toEqual({ id: 2, name: 'Bob' });
      });

      it('should return undefined if user not found', () => {
        expect(kata.findUserByName(users, 'Dave')).toBeUndefined();
      });
    });

    describe('indexOfFirst', () => {
      it('should return the index of the first number greater than target', () => {
        expect(kata.indexOfFirst([1, 2, 3, 4], 2)).toBe(2);
      });

      it('should return -1 if no match', () => {
        expect(kata.indexOfFirst([1, 2, 3], 10)).toBe(-1);
      });

      it('should return 0 if first element matches', () => {
        expect(kata.indexOfFirst([5, 1, 2], 3)).toBe(0);
      });
    });
  });

  // ===========================================================================
  // Exercise 4: reduce to a number
  // ===========================================================================
  describe('Exercise 4: reduce to a number', () => {
    describe('sum', () => {
      it('should sum all numbers', () => {
        expect(kata.sum([1, 2, 3, 4])).toBe(10);
      });

      it('should return 0 for empty array', () => {
        expect(kata.sum([])).toBe(0);
      });

      it('should handle negative numbers', () => {
        expect(kata.sum([-1, -2, 3])).toBe(0);
      });
    });

    describe('product', () => {
      it('should multiply all numbers', () => {
        expect(kata.product([1, 2, 3, 4])).toBe(24);
      });

      it('should return 1 for empty array', () => {
        expect(kata.product([])).toBe(1);
      });

      it('should handle zero', () => {
        expect(kata.product([1, 2, 0, 4])).toBe(0);
      });
    });

    describe('max', () => {
      it('should return the largest number', () => {
        expect(kata.max([3, 1, 4, 1, 5, 9, 2, 6])).toBe(9);
      });

      it('should handle a single element', () => {
        expect(kata.max([42])).toBe(42);
      });

      it('should handle negative numbers', () => {
        expect(kata.max([-3, -1, -4])).toBe(-1);
      });
    });
  });

  // ===========================================================================
  // Exercise 5: reduce to an object
  // ===========================================================================
  describe('Exercise 5: reduce to an object', () => {
    describe('countOccurrences', () => {
      it('should count word occurrences', () => {
        expect(
          kata.countOccurrences(['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'])
        ).toEqual({ apple: 3, banana: 2, cherry: 1 });
      });

      it('should return empty object for empty array', () => {
        expect(kata.countOccurrences([])).toEqual({});
      });

      it('should count single occurrences', () => {
        expect(kata.countOccurrences(['a', 'b', 'c'])).toEqual({ a: 1, b: 1, c: 1 });
      });
    });

    describe('groupByFirstLetter', () => {
      it('should group words by first letter', () => {
        expect(
          kata.groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry', 'cherry'])
        ).toEqual({
          a: ['apple', 'avocado'],
          b: ['banana', 'blueberry'],
          c: ['cherry'],
        });
      });

      it('should return empty object for empty array', () => {
        expect(kata.groupByFirstLetter([])).toEqual({});
      });

      it('should handle single word', () => {
        expect(kata.groupByFirstLetter(['mango'])).toEqual({ m: ['mango'] });
      });
    });
  });

  // ===========================================================================
  // Exercise 6: Chaining methods
  // ===========================================================================
  describe('Exercise 6: Chaining methods', () => {
    describe('sumOfDoubledEvens', () => {
      it('should filter evens, double them, and sum', () => {
        expect(kata.sumOfDoubledEvens([1, 2, 3, 4, 5])).toBe(12);
      });

      it('should return 0 if no evens', () => {
        expect(kata.sumOfDoubledEvens([1, 3, 5])).toBe(0);
      });

      it('should return 0 for empty array', () => {
        expect(kata.sumOfDoubledEvens([])).toBe(0);
      });
    });

    describe('namesOfAdults', () => {
      it('should return uppercased names of people aged 18 or over', () => {
        const people = [
          { name: 'alice', age: 17 },
          { name: 'bob', age: 25 },
          { name: 'carol', age: 18 },
        ];
        expect(kata.namesOfAdults(people)).toEqual(['BOB', 'CAROL']);
      });

      it('should return empty array if no adults', () => {
        const people = [{ name: 'alice', age: 10 }];
        expect(kata.namesOfAdults(people)).toEqual([]);
      });
    });
  });

  // ===========================================================================
  // Exercise 7: Typed callbacks
  // ===========================================================================
  describe('Exercise 7: Typed callbacks', () => {
    describe('filterWith', () => {
      it('should filter numbers using a predicate', () => {
        expect(kata.filterWith([1, 2, 3, 4], (n: number) => n > 2)).toEqual([3, 4]);
      });

      it('should filter strings using a predicate', () => {
        expect(kata.filterWith(['a', 'bb', 'ccc'], (s: string) => s.length > 1)).toEqual(['bb', 'ccc']);
      });
    });

    describe('mapWith', () => {
      it('should transform numbers to strings', () => {
        expect(kata.mapWith([1, 2, 3], (n: number) => n.toString())).toEqual(['1', '2', '3']);
      });

      it('should transform objects to strings', () => {
        const people = [{ name: 'Alice' }, { name: 'Bob' }];
        expect(kata.mapWith(people, (p: { name: string }) => p.name)).toEqual(['Alice', 'Bob']);
      });
    });

    describe('pipeline', () => {
      it('should filter then map', () => {
        expect(
          kata.pipeline([1, 2, 3, 4], (n: number) => n % 2 === 0, (n: number) => n * 10)
        ).toEqual([20, 40]);
      });

      it('should return empty array if filter removes everything', () => {
        expect(
          kata.pipeline([1, 3, 5], (n: number) => n % 2 === 0, (n: number) => n * 10)
        ).toEqual([]);
      });
    });
  });

  // ===========================================================================
  // Exercise 8: Capstone — Product Catalogue
  // ===========================================================================
  describe('Exercise 8: Capstone — Product Catalogue', () => {
    const catalogue = [
      { id: 1, name: 'Laptop',    category: 'electronics', price: 999,  inStock: true  },
      { id: 2, name: 'T-Shirt',   category: 'clothing',    price: 25,   inStock: true  },
      { id: 3, name: 'Phone',     category: 'electronics', price: 699,  inStock: false },
      { id: 4, name: 'Bread',     category: 'food',        price: 3,    inStock: true  },
      { id: 5, name: 'Headphones',category: 'electronics', price: 149,  inStock: false },
    ];

    it('should return only in-stock products', () => {
      const result = kata.getInStock(catalogue);
      expect(result).toHaveLength(3);
      expect(result.map((p: any) => p.name)).toEqual(['Laptop', 'T-Shirt', 'Bread']);
    });

    it('should return only electronics', () => {
      const result = kata.getByCategory(catalogue, 'electronics');
      expect(result).toHaveLength(3);
      expect(result.map((p: any) => p.name)).toEqual(['Laptop', 'Phone', 'Headphones']);
    });

    it('should return only food', () => {
      const result = kata.getByCategory(catalogue, 'food');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Bread');
    });

    it('should format products as display strings', () => {
      const result = kata.toDisplayStrings([
        { id: 1, name: 'Laptop', category: 'electronics', price: 999, inStock: true },
        { id: 4, name: 'Bread',  category: 'food',        price: 3,   inStock: true },
      ]);
      expect(result).toEqual(['Laptop — $999', 'Bread — $3']);
    });

    it('should calculate total price', () => {
      expect(kata.totalPrice(catalogue)).toBe(1875);
    });

    it('should return 0 for empty catalogue', () => {
      expect(kata.totalPrice([])).toBe(0);
    });

    it('should summarise the catalogue', () => {
      expect(kata.catalogueSummary(catalogue)).toEqual({
        total: 5,
        inStock: 3,
        outOfStock: 2,
      });
    });

    it('should summarise an empty catalogue', () => {
      expect(kata.catalogueSummary([])).toEqual({
        total: 0,
        inStock: 0,
        outOfStock: 0,
      });
    });
  });
});
