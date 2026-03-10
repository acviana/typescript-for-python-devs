/**
 * Tests for Lesson 5: Classes & Access Modifiers
 *
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 5: Classes & Access Modifiers', () => {
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
  // Exercise 1: Basic Class
  // ===========================================================================
  describe('Exercise 1: Basic Class', () => {
    it('should create a Person with name and age', () => {
      const p = new kata.Person('Alice', 30);
      expect(p.name).toBe('Alice');
      expect(p.age).toBe(30);
    });

    it('should greet correctly', () => {
      const p = new kata.Person('Alice', 30);
      expect(p.greet()).toBe("Hi, I'm Alice and I'm 30 years old");
    });

    it('should greet with different name and age', () => {
      const p = new kata.Person('Bob', 25);
      expect(p.greet()).toBe("Hi, I'm Bob and I'm 25 years old");
    });

    it('should allow name and age to be read publicly', () => {
      const p = new kata.Person('Carol', 40);
      expect(p.name).toBe('Carol');
      expect(p.age).toBe(40);
    });
  });

  // ===========================================================================
  // Exercise 2: Access Modifiers
  // ===========================================================================
  describe('Exercise 2: Access Modifiers', () => {
    it('should start at count 0', () => {
      const c = new kata.Counter();
      expect(c.getCount()).toBe(0);
    });

    it('should increment count', () => {
      const c = new kata.Counter();
      c.increment();
      expect(c.getCount()).toBe(1);
    });

    it('should decrement count', () => {
      const c = new kata.Counter();
      c.increment();
      c.increment();
      c.decrement();
      expect(c.getCount()).toBe(1);
    });

    it('should handle multiple increments and decrements', () => {
      const c = new kata.Counter();
      c.increment();
      c.increment();
      c.increment();
      c.decrement();
      expect(c.getCount()).toBe(2);
    });

    it('should only be controllable via its public methods', () => {
      const c = new kata.Counter();
      c.increment();
      c.increment();
      c.decrement();
      c.increment();
      // The only way to observe count is through getCount() — private enforces this at compile time
      expect(c.getCount()).toBe(2);
    });
  });

  // ===========================================================================
  // Exercise 3: Constructor Parameter Shorthand
  // ===========================================================================
  describe('Exercise 3: Constructor Parameter Shorthand', () => {
    it('should create a Rectangle with width and height', () => {
      const r = new kata.Rectangle(4, 6);
      expect(r.width).toBe(4);
      expect(r.height).toBe(6);
    });

    it('should calculate area', () => {
      expect(new kata.Rectangle(4, 6).area()).toBe(24);
      expect(new kata.Rectangle(5, 5).area()).toBe(25);
      expect(new kata.Rectangle(3, 7).area()).toBe(21);
    });

    it('should calculate perimeter', () => {
      expect(new kata.Rectangle(4, 6).perimeter()).toBe(20);  // 2*(4+6)
      expect(new kata.Rectangle(5, 5).perimeter()).toBe(20);  // 2*(5+5)
      expect(new kata.Rectangle(3, 8).perimeter()).toBe(22);  // 2*(3+8)
    });

    it('should describe itself', () => {
      expect(new kata.Rectangle(4, 6).describe()).toBe('Rectangle: 4x6');
      expect(new kata.Rectangle(10, 3).describe()).toBe('Rectangle: 10x3');
    });
  });

  // ===========================================================================
  // Exercise 4: Readonly Properties
  // ===========================================================================
  describe('Exercise 4: Readonly Properties', () => {
    it('should create a Product with id, name, price', () => {
      const p = new kata.Product(1, 'Widget', 100);
      expect(p.id).toBe(1);
      expect(p.name).toBe('Widget');
      expect(p.price).toBe(100);
    });

    it('should return the correct label', () => {
      const p = new kata.Product(1, 'Widget', 100);
      expect(p.getLabel()).toBe('Widget - $100');
    });

    it('should apply a discount correctly', () => {
      const p = new kata.Product(1, 'Widget', 100);
      p.applyDiscount(20);
      expect(p.price).toBe(80);
    });

    it('should update the label after discount', () => {
      const p = new kata.Product(1, 'Widget', 100);
      p.applyDiscount(20);
      expect(p.getLabel()).toBe('Widget - $80');
    });

    it('should apply a 10% discount', () => {
      const p = new kata.Product(2, 'Gadget', 200);
      p.applyDiscount(10);
      expect(p.price).toBe(180);
    });

    it('should retain id and name after price mutation', () => {
      const p = new kata.Product(1, 'Widget', 100);
      p.applyDiscount(50);
      // readonly enforces this at compile time — id and name never change
      expect(p.id).toBe(1);
      expect(p.name).toBe('Widget');
      expect(p.price).toBe(50);
    });
  });

  // ===========================================================================
  // Exercise 5: Getters & Setters
  // ===========================================================================
  describe('Exercise 5: Getters & Setters', () => {
    it('should return celsius via getter', () => {
      const t = new kata.Temperature(100);
      expect(t.celsius).toBe(100);
    });

    it('should convert to fahrenheit — boiling point', () => {
      const t = new kata.Temperature(100);
      expect(t.fahrenheit).toBeCloseTo(212, 5);
    });

    it('should convert to fahrenheit — freezing point', () => {
      const t = new kata.Temperature(0);
      expect(t.fahrenheit).toBeCloseTo(32, 5);
    });

    it('should convert to fahrenheit — body temperature', () => {
      const t = new kata.Temperature(37);
      expect(t.fahrenheit).toBeCloseTo(98.6, 1);
    });

    it('should update celsius via setter', () => {
      const t = new kata.Temperature(100);
      t.celsius = 0;
      expect(t.celsius).toBe(0);
      expect(t.fahrenheit).toBeCloseTo(32, 5);
    });

    it('should throw when setting below absolute zero', () => {
      const t = new kata.Temperature(20);
      expect(() => {
        t.celsius = -300;
      }).toThrow('Temperature cannot be below absolute zero');
    });

    it('should allow setting exactly at absolute zero', () => {
      const t = new kata.Temperature(20);
      expect(() => {
        t.celsius = -273.15;
      }).not.toThrow();
      expect(t.celsius).toBe(-273.15);
    });
  });

  // ===========================================================================
  // Exercise 6: Inheritance
  // ===========================================================================
  describe('Exercise 6: Inheritance', () => {
    describe('Animal (base class)', () => {
      it('should have a name', () => {
        const a = new kata.Animal('Beast');
        expect(a.name).toBe('Beast');
      });

      it('should speak generically', () => {
        const a = new kata.Animal('Beast');
        expect(a.speak()).toBe('Beast makes a sound');
      });

      it('should have a toString', () => {
        const a = new kata.Animal('Beast');
        expect(a.toString()).toBe('Animal: Beast');
      });
    });

    describe('Dog', () => {
      it('should inherit name from Animal', () => {
        const d = new kata.Dog('Rex', 'Labrador');
        expect(d.name).toBe('Rex');
      });

      it('should have a breed', () => {
        const d = new kata.Dog('Rex', 'Labrador');
        expect(d.breed).toBe('Labrador');
      });

      it('should bark', () => {
        expect(new kata.Dog('Rex', 'Labrador').speak()).toBe('Rex barks');
        expect(new kata.Dog('Bella', 'Poodle').speak()).toBe('Bella barks');
      });

      it('should have a toString', () => {
        expect(new kata.Dog('Rex', 'Labrador').toString()).toBe('Dog: Rex (Labrador)');
      });

      it('should be an instance of Animal', () => {
        const d = new kata.Dog('Rex', 'Labrador');
        expect(d instanceof kata.Animal).toBe(true);
      });
    });

    describe('Cat', () => {
      it('should meow', () => {
        expect(new kata.Cat('Luna', true).speak()).toBe('Luna meows');
      });

      it('should show indoor in toString', () => {
        expect(new kata.Cat('Luna', true).toString()).toBe('Cat: Luna (indoor)');
      });

      it('should show outdoor in toString', () => {
        expect(new kata.Cat('Tom', false).toString()).toBe('Cat: Tom (outdoor)');
      });

      it('should be an instance of Animal', () => {
        const c = new kata.Cat('Luna', true);
        expect(c instanceof kata.Animal).toBe(true);
      });
    });
  });

  // ===========================================================================
  // Exercise 7: Implementing Interfaces
  // ===========================================================================
  describe('Exercise 7: Implementing Interfaces', () => {
    it('should create UserSettings with theme and language', () => {
      const s = new kata.UserSettings('dark', 'fr');
      expect(s.theme).toBe('dark');
      expect(s.language).toBe('fr');
    });

    it('should serialize to JSON-like string', () => {
      const s = new kata.UserSettings('dark', 'fr');
      expect(s.serialize()).toBe('{"theme":"dark","language":"fr"}');
    });

    it('should serialize light/en settings', () => {
      const s = new kata.UserSettings('light', 'en');
      expect(s.serialize()).toBe('{"theme":"light","language":"en"}');
    });

    it('should reset to defaults', () => {
      const s = new kata.UserSettings('dark', 'fr');
      s.reset();
      expect(s.theme).toBe('light');
      expect(s.language).toBe('en');
    });

    it('should serialize correctly after reset', () => {
      const s = new kata.UserSettings('dark', 'fr');
      s.reset();
      expect(s.serialize()).toBe('{"theme":"light","language":"en"}');
    });
  });

  // ===========================================================================
  // Exercise 8: Comprehensive — Shape Hierarchy
  // ===========================================================================
  describe('Exercise 8: Comprehensive — Shape Hierarchy', () => {
    describe('Circle', () => {
      it('should have kind "circle"', () => {
        expect(new kata.Circle(5).kind).toBe('circle');
      });

      it('should calculate area', () => {
        expect(new kata.Circle(5).area()).toBeCloseTo(78.539, 2);
        expect(new kata.Circle(1).area()).toBeCloseTo(Math.PI, 5);
      });

      it('should calculate perimeter (circumference)', () => {
        expect(new kata.Circle(5).perimeter()).toBeCloseTo(31.416, 2);
        expect(new kata.Circle(1).perimeter()).toBeCloseTo(2 * Math.PI, 5);
      });

      it('should describe itself', () => {
        expect(new kata.Circle(5).describe()).toBe('Circle with radius 5');
      });
    });

    describe('Square', () => {
      it('should have kind "square"', () => {
        expect(new kata.Square(4).kind).toBe('square');
      });

      it('should calculate area', () => {
        expect(new kata.Square(4).area()).toBe(16);
        expect(new kata.Square(7).area()).toBe(49);
      });

      it('should calculate perimeter', () => {
        expect(new kata.Square(4).perimeter()).toBe(16);
        expect(new kata.Square(7).perimeter()).toBe(28);
      });

      it('should describe itself', () => {
        expect(new kata.Square(4).describe()).toBe('Square with side 4');
      });
    });

    describe('RightTriangle', () => {
      it('should have kind "triangle"', () => {
        expect(new kata.RightTriangle(3, 4).kind).toBe('triangle');
      });

      it('should calculate area', () => {
        expect(new kata.RightTriangle(3, 4).area()).toBe(6);
        expect(new kata.RightTriangle(6, 8).area()).toBe(24);
      });

      it('should calculate perimeter (base + height + hypotenuse)', () => {
        // 3-4-5 right triangle
        expect(new kata.RightTriangle(3, 4).perimeter()).toBeCloseTo(12, 5);
        // 6-8-10 right triangle
        expect(new kata.RightTriangle(6, 8).perimeter()).toBeCloseTo(24, 5);
      });

      it('should describe itself', () => {
        expect(new kata.RightTriangle(3, 4).describe()).toBe(
          'Right triangle with base 3 and height 4'
        );
      });
    });
  });
});
