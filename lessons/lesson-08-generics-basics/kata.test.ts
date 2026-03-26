/**
 * Tests for Lesson 8: Generics Basics
 *
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 8: Generics Basics', () => {
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
  // Exercise 1: Generic functions
  // ===========================================================================
  describe('Exercise 1: Generic functions', () => {
    describe('identity', () => {
      it('should return a number unchanged', () => {
        expect(kata.identity(42)).toBe(42);
      });

      it('should return a string unchanged', () => {
        expect(kata.identity('hello')).toBe('hello');
      });

      it('should return an array unchanged', () => {
        const arr = [1, 2, 3];
        expect(kata.identity(arr)).toBe(arr);
      });

      it('should return an object unchanged', () => {
        const obj = { name: 'Alice' };
        expect(kata.identity(obj)).toBe(obj);
      });
    });

    describe('wrap', () => {
      it('should wrap a number in an array', () => {
        expect(kata.wrap(42)).toEqual([42]);
      });

      it('should wrap a string in an array', () => {
        expect(kata.wrap('hello')).toEqual(['hello']);
      });

      it('should wrap an array in an array', () => {
        expect(kata.wrap([1, 2])).toEqual([[1, 2]]);
      });
    });
  });

  // ===========================================================================
  // Exercise 2: Generic type aliases
  // ===========================================================================
  describe('Exercise 2: Generic type aliases', () => {
    describe('makePair', () => {
      it('should make a pair of numbers', () => {
        expect(kata.makePair(1, 2)).toEqual({ first: 1, second: 2 });
      });

      it('should make a pair of strings', () => {
        expect(kata.makePair('a', 'b')).toEqual({ first: 'a', second: 'b' });
      });

      it('should make a pair of objects', () => {
        const obj1 = { id: 1 };
        const obj2 = { id: 2 };
        expect(kata.makePair(obj1, obj2)).toEqual({ first: { id: 1 }, second: { id: 2 } });
      });
    });

    describe('getOrDefault', () => {
      it('should return value when it is not null or undefined', () => {
        expect(kata.getOrDefault(42, 0)).toBe(42);
      });

      it('should return default when value is null', () => {
        expect(kata.getOrDefault(null, 0)).toBe(0);
      });

      it('should return default when value is undefined', () => {
        expect(kata.getOrDefault(undefined, 'guest')).toBe('guest');
      });

      it('should return value even if it is falsy (0)', () => {
        expect(kata.getOrDefault(0, 99)).toBe(0);
      });

      it('should return value even if it is falsy (empty string)', () => {
        expect(kata.getOrDefault('', 'default')).toBe('');
      });
    });
  });

  // ===========================================================================
  // Exercise 3: Generic interfaces & classes
  // ===========================================================================
  describe('Exercise 3: Generic interfaces & classes', () => {
    describe('Box', () => {
      it('should hold a number value', () => {
        const box = new kata.Box(42);
        expect(box.value).toBe(42);
      });

      it('should hold a string value', () => {
        const box = new kata.Box('hello');
        expect(box.value).toBe('hello');
      });

      it('should map a number to a number', () => {
        const box = new kata.Box(42);
        expect(box.map((n: number) => n * 2).value).toBe(84);
      });

      it('should map a number to a string', () => {
        const box = new kata.Box(42);
        expect(box.map((n: number) => String(n)).value).toBe('42');
      });

      it('should chain map calls', () => {
        const box = new kata.Box(5);
        expect(box.map((n: number) => n * 2).map((n: number) => n + 1).value).toBe(11);
      });
    });

    describe('Stack', () => {
      it('should start empty', () => {
        const stack = new kata.Stack();
        expect(stack.isEmpty).toBe(true);
        expect(stack.size).toBe(0);
      });

      it('should push items and update size', () => {
        const stack = new kata.Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.size).toBe(2);
        expect(stack.isEmpty).toBe(false);
      });

      it('should peek at the top item without removing it', () => {
        const stack = new kata.Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
        expect(stack.size).toBe(2);
      });

      it('should pop items in LIFO order', () => {
        const stack = new kata.Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(stack.pop()).toBe(3);
        expect(stack.pop()).toBe(2);
        expect(stack.size).toBe(1);
      });

      it('should return undefined when popping an empty stack', () => {
        const stack = new kata.Stack();
        expect(stack.pop()).toBeUndefined();
      });

      it('should return undefined when peeking an empty stack', () => {
        const stack = new kata.Stack();
        expect(stack.peek()).toBeUndefined();
      });

      it('should work with strings', () => {
        const stack = new kata.Stack();
        stack.push('a');
        stack.push('b');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
      });
    });
  });

  // ===========================================================================
  // Exercise 4: Type constraints
  // ===========================================================================
  describe('Exercise 4: Type constraints', () => {
    describe('longest', () => {
      it('should return the longer string', () => {
        expect(kata.longest('cat', 'elephant')).toBe('elephant');
      });

      it('should return the longer array', () => {
        expect(kata.longest([1, 2], [1, 2, 3])).toEqual([1, 2, 3]);
      });

      it('should return the first argument when equal length', () => {
        expect(kata.longest('same', 'size')).toBe('same');
      });

      it('should handle empty strings', () => {
        expect(kata.longest('', 'hello')).toBe('hello');
      });
    });

    describe('getProperty', () => {
      it('should get a string property', () => {
        expect(kata.getProperty({ name: 'Alice', age: 30 }, 'name')).toBe('Alice');
      });

      it('should get a number property', () => {
        expect(kata.getProperty({ name: 'Alice', age: 30 }, 'age')).toBe(30);
      });

      it('should get a boolean property', () => {
        expect(kata.getProperty({ active: true, count: 5 }, 'active')).toBe(true);
      });

      it('should get a nested object property', () => {
        const obj = { data: [1, 2, 3], label: 'nums' };
        expect(kata.getProperty(obj, 'data')).toEqual([1, 2, 3]);
      });
    });
  });

  // ===========================================================================
  // Exercise 5: Multiple type parameters
  // ===========================================================================
  describe('Exercise 5: Multiple type parameters', () => {
    describe('zip', () => {
      it('should zip two arrays of the same length', () => {
        expect(kata.zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
      });

      it('should stop at the shorter array (first shorter)', () => {
        expect(kata.zip([1, 2], ['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b']]);
      });

      it('should stop at the shorter array (second shorter)', () => {
        expect(kata.zip([1, 2, 3], ['a'])).toEqual([[1, 'a']]);
      });

      it('should return empty array if either input is empty', () => {
        expect(kata.zip([], [1, 2, 3])).toEqual([]);
        expect(kata.zip([1, 2, 3], [])).toEqual([]);
      });

      it('should work with mixed types', () => {
        expect(kata.zip([true, false], [1, 2])).toEqual([[true, 1], [false, 2]]);
      });
    });

    describe('mapObject', () => {
      it('should apply fn to each value', () => {
        expect(kata.mapObject({ a: 1, b: 2, c: 3 }, (n: number) => n * 2)).toEqual({ a: 2, b: 4, c: 6 });
      });

      it('should transform value types', () => {
        expect(kata.mapObject({ x: 'hi', y: 'hello' }, (s: string) => s.length)).toEqual({ x: 2, y: 5 });
      });

      it('should return empty object for empty input', () => {
        expect(kata.mapObject({}, (n: number) => n)).toEqual({});
      });
    });
  });

  // ===========================================================================
  // Exercise 6: Generic utility functions
  // ===========================================================================
  describe('Exercise 6: Generic utility functions', () => {
    describe('first', () => {
      it('should return the first element', () => {
        expect(kata.first([1, 2, 3])).toBe(1);
      });

      it('should return undefined for empty array', () => {
        expect(kata.first([])).toBeUndefined();
      });

      it('should work with strings', () => {
        expect(kata.first(['a', 'b', 'c'])).toBe('a');
      });
    });

    describe('last', () => {
      it('should return the last element', () => {
        expect(kata.last([1, 2, 3])).toBe(3);
      });

      it('should return undefined for empty array', () => {
        expect(kata.last([])).toBeUndefined();
      });

      it('should work with a single element', () => {
        expect(kata.last([42])).toBe(42);
      });
    });

    describe('compact', () => {
      it('should remove null values', () => {
        expect(kata.compact([1, null, 2, null, 3])).toEqual([1, 2, 3]);
      });

      it('should remove undefined values', () => {
        expect(kata.compact([1, undefined, 2, undefined])).toEqual([1, 2]);
      });

      it('should remove both null and undefined', () => {
        expect(kata.compact([null, 1, undefined, 2, null])).toEqual([1, 2]);
      });

      it('should keep falsy values that are not null/undefined', () => {
        expect(kata.compact([0, '', false, null, undefined])).toEqual([0, '', false]);
      });

      it('should return empty array if all values are null/undefined', () => {
        expect(kata.compact([null, undefined])).toEqual([]);
      });
    });

    describe('chunk', () => {
      it('should split into equal chunks', () => {
        expect(kata.chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
      });

      it('should handle a remainder chunk', () => {
        expect(kata.chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
      });

      it('should handle chunk size larger than array', () => {
        expect(kata.chunk([1, 2], 5)).toEqual([[1, 2]]);
      });

      it('should return empty array for empty input', () => {
        expect(kata.chunk([], 3)).toEqual([]);
      });

      it('should work with strings', () => {
        expect(kata.chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
      });
    });
  });

  // ===========================================================================
  // Exercise 7: Capstone — Generic Repository
  // ===========================================================================
  describe('Exercise 7: Capstone — Generic Repository', () => {
    it('should start with count 0', () => {
      const repo = new kata.Repository();
      expect(repo.count).toBe(0);
    });

    it('should add items and update count', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      repo.add({ id: 2, name: 'Bob' });
      expect(repo.count).toBe(2);
    });

    it('should find an item by id', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      repo.add({ id: 2, name: 'Bob' });
      expect(repo.findById(1)).toEqual({ id: 1, name: 'Alice' });
      expect(repo.findById(2)).toEqual({ id: 2, name: 'Bob' });
    });

    it('should return undefined for a missing id', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      expect(repo.findById(99)).toBeUndefined();
    });

    it('should return all items', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      repo.add({ id: 2, name: 'Bob' });
      expect(repo.getAll()).toEqual([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]);
    });

    it('getAll should return a copy, not the internal array', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      const all = repo.getAll();
      all.push({ id: 99, name: 'Hacker' });
      expect(repo.count).toBe(1);
    });

    it('should remove an item by id and return true', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      repo.add({ id: 2, name: 'Bob' });
      expect(repo.remove(1)).toBe(true);
      expect(repo.count).toBe(1);
      expect(repo.findById(1)).toBeUndefined();
    });

    it('should return false when removing a non-existent id', () => {
      const repo = new kata.Repository();
      repo.add({ id: 1, name: 'Alice' });
      expect(repo.remove(99)).toBe(false);
      expect(repo.count).toBe(1);
    });

    it('should work with a different item shape', () => {
      const repo = new kata.Repository();
      repo.add({ id: 10, title: 'TypeScript', price: 29 });
      repo.add({ id: 20, title: 'Python', price: 19 });
      expect(repo.findById(10)).toEqual({ id: 10, title: 'TypeScript', price: 29 });
      expect(repo.remove(20)).toBe(true);
      expect(repo.count).toBe(1);
    });
  });
});
