/**
 * Tests for Lesson 0: JavaScript Syntax Fundamentals
 * 
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 0: JavaScript Syntax Fundamentals', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Variable Declarations', () => {
    it('should declare MY_CONSTANT with value 42', () => {
      expect(kata.MY_CONSTANT).toBe(42);
    });

    it('should declare counter and increment it to 1', () => {
      expect(kata.counter).toBe(1);
    });

    it('should use const for MY_CONSTANT (immutable)', () => {
      // This test just verifies the export exists - TypeScript enforces const
      expect(kata.MY_CONSTANT).toBeDefined();
    });
  });

  describe('Exercise 2: String Templates & Concatenation', () => {
    it('should create greeting using template literal', () => {
      expect(kata.greeting).toBe("Hello, Alice!");
    });

    it('should create farewell using concatenation', () => {
      expect(kata.farewell).toBe("Goodbye, Bob!");
    });

    it('should create multi-line poem', () => {
      expect(kata.poem).toContain("Roses are red");
      expect(kata.poem).toContain("Violets are blue");
      // Check that it's actually multi-line (contains newline)
      expect(kata.poem).toMatch(/Roses are red[\n\r]+Violets are blue/);
    });
  });

  describe('Exercise 3: Array Indexing & Methods', () => {
    it('should create fruits array with three elements', () => {
      expect(kata.fruits).toEqual(["apple", "banana", "cherry"]);
      expect(kata.fruits).toHaveLength(3);
    });

    it('should get first fruit', () => {
      expect(kata.firstFruit).toBe("apple");
    });

    it('should get last fruit using length property', () => {
      expect(kata.lastFruit).toBe("cherry");
    });

    it('should get fruit count', () => {
      expect(kata.fruitCount).toBe(3);
    });

    it('should slice first 2 fruits', () => {
      expect(kata.someFruits).toEqual(["apple", "banana"]);
      expect(kata.someFruits).toHaveLength(2);
    });
  });

  describe('Exercise 4: Object Property Access', () => {
    it('should create person object with correct properties', () => {
      expect(kata.person).toBeDefined();
      expect(kata.person.firstName).toBe("John");
      expect(kata.person.lastName).toBe("Doe");
      expect(kata.person.age).toBe(30);
      expect(kata.person["favorite-color"]).toBe("blue");
    });

    it('should get firstName using dot notation', () => {
      expect(kata.personFirstName).toBe("John");
    });

    it('should get favorite-color using bracket notation', () => {
      expect(kata.favoriteColor).toBe("blue");
    });

    it('should get age using bracket notation with variable', () => {
      expect(kata.personAge).toBe(30);
    });
  });

  describe('Exercise 5: Equality Operators', () => {
    it('should show loose equality performs type coercion', () => {
      expect(kata.looseEqual1).toBe(true);   // "5" == 5
      expect(kata.looseEqual2).toBe(true);   // 0 == false
    });

    it('should show strict equality does not coerce types', () => {
      expect(kata.strictEqual1).toBe(false); // "5" === 5
      expect(kata.strictEqual2).toBe(false); // 0 === false
    });

    it('should demonstrate why === is preferred', () => {
      // This test emphasizes the difference
      expect(kata.looseEqual1).not.toBe(kata.strictEqual1);
      expect(kata.looseEqual2).not.toBe(kata.strictEqual2);
    });
  });

  describe('Exercise 6: Logical Operators', () => {
    it('should evaluate AND operator correctly', () => {
      expect(kata.andResult).toBe(false); // true && false
    });

    it('should evaluate OR operator correctly', () => {
      expect(kata.orResult).toBe(true);   // true || false
    });

    it('should evaluate NOT operator correctly', () => {
      expect(kata.notResult).toBe(false); // !true
    });

    it('should evaluate combined AND expression', () => {
      expect(kata.combinedAnd).toBe(true); // 5 > 3 && 10 < 20
    });

    it('should evaluate combined OR expression', () => {
      expect(kata.combinedOr).toBe(true);  // 5 > 10 || 10 < 20
    });
  });

  describe('Exercise 7: Ternary Operator', () => {
    it('should evaluate simple ternary condition', () => {
      expect(kata.simpleCondition).toBe("yes"); // 10 > 5 ? "yes" : "no"
    });

    it('should evaluate weather status ternary', () => {
      expect(kata.weatherStatus).toBe("warm"); // temp > 70 ? "warm" : "cold"
    });

    it('should evaluate nested ternary for grade', () => {
      expect(kata.grade).toBe("B"); // score >= 90 ? "A" : score >= 80 ? "B" : "C"
    });
  });
});
