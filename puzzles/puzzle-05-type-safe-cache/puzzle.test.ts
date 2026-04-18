import { describe, it, expect, beforeEach } from 'vitest';
import { Cache } from './puzzle';

describe('Puzzle 5: Type-Safe Cache', () => {
  describe('with string keys', () => {
    let cache: Cache<string, number>;

    beforeEach(() => {
      cache = new Cache<string, number>();
    });

    it('should store and retrieve a value', () => {
      cache.set('key', 42);
      expect(cache.get('key')).toBe(42);
    });

    it('should return undefined for missing key', () => {
      expect(cache.get('missing')).toBeUndefined();
    });

    it('should check if key exists', () => {
      cache.set('exists', 1);
      expect(cache.has('exists')).toBe(true);
      expect(cache.has('missing')).toBe(false);
    });

    it('should overwrite existing value', () => {
      cache.set('key', 1);
      cache.set('key', 2);
      expect(cache.get('key')).toBe(2);
    });

    it('should delete existing key and return true', () => {
      cache.set('key', 42);
      expect(cache.delete('key')).toBe(true);
      expect(cache.has('key')).toBe(false);
    });

    it('should return false when deleting non-existent key', () => {
      expect(cache.delete('missing')).toBe(false);
    });

    it('should clear all entries', () => {
      cache.set('a', 1);
      cache.set('b', 2);
      cache.clear();
      expect(cache.get('a')).toBeUndefined();
      expect(cache.get('b')).toBeUndefined();
      expect(cache.has('a')).toBe(false);
      expect(cache.has('b')).toBe(false);
    });
  });

  describe('with number keys', () => {
    let cache: Cache<number, string>;

    beforeEach(() => {
      cache = new Cache<number, string>();
    });

    it('should store and retrieve with number keys', () => {
      cache.set(1, 'one');
      cache.set(2, 'two');
      expect(cache.get(1)).toBe('one');
      expect(cache.get(2)).toBe('two');
    });

    it('should treat different numbers as different keys', () => {
      cache.set(1, 'one');
      cache.set(2, 'two');
      expect(cache.get(1)).toBe('one');
      expect(cache.has(2)).toBe(true);
    });

    it('should work with large numbers', () => {
      cache.set(999999, 'big');
      expect(cache.get(999999)).toBe('big');
    });
  });

  describe('with object values', () => {
    interface User {
      name: string;
      age: number;
    }

    let cache: Cache<string, User>;

    beforeEach(() => {
      cache = new Cache<string, User>();
    });

    it('should store and retrieve objects', () => {
      const user: User = { name: 'Alice', age: 30 };
      cache.set('user1', user);
      expect(cache.get('user1')).toEqual(user);
    });

    it('should store different objects', () => {
      cache.set('a', { name: 'Alice', age: 30 });
      cache.set('b', { name: 'Bob', age: 25 });
      expect(cache.get('a')?.name).toBe('Alice');
      expect(cache.get('b')?.name).toBe('Bob');
    });
  });

  describe('complex scenarios', () => {
    it('should handle mixed operations', () => {
      const cache = new Cache<string, number>();

      cache.set('a', 1);
      cache.set('b', 2);
      cache.set('c', 3);

      expect(cache.get('a')).toBe(1);
      expect(cache.has('b')).toBe(true);

      cache.delete('b');
      expect(cache.has('b')).toBe(false);

      cache.set('a', 10);  // overwrite
      expect(cache.get('a')).toBe(10);

      cache.clear();
      expect(cache.get('a')).toBeUndefined();
      expect(cache.get('c')).toBeUndefined();
    });

    it('should work with array values', () => {
      const cache = new Cache<number, number[]>();

      cache.set(1, [1, 2, 3]);
      cache.set(2, [4, 5, 6]);

      expect(cache.get(1)).toEqual([1, 2, 3]);
      expect(cache.get(2)).toEqual([4, 5, 6]);
    });
  });

  describe('edge cases', () => {
    it('should handle empty string key', () => {
      const cache = new Cache<string, number>();
      cache.set('', 42);
      expect(cache.get('')).toBe(42);
      expect(cache.has('')).toBe(true);
    });

    it('should handle zero as key', () => {
      const cache = new Cache<number, string>();
      cache.set(0, 'zero');
      expect(cache.get(0)).toBe('zero');
      expect(cache.has(0)).toBe(true);
    });

    it('should handle undefined as value', () => {
      const cache = new Cache<string, number | undefined>();
      cache.set('key', undefined);
      expect(cache.get('key')).toBeUndefined();
      // Note: can't distinguish between "key has undefined" and "key doesn't exist"
      // This is a known limitation - test assumes we treat them the same
      expect(cache.has('key')).toBe(true);
    });
  });
});
