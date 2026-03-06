/**
 * Tests for Lesson 4: Union & Intersection Types
 *
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 4: Union & Intersection Types', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Basic Union Types', () => {
    it('should format a number value', () => {
      expect(kata.formatValue(42)).toBe("Value: 42");
    });

    it('should format a string value', () => {
      expect(kata.formatValue("hello")).toBe("Value: hello");
    });

    it('should format zero', () => {
      expect(kata.formatValue(0)).toBe("Value: 0");
    });

    it('should format an empty string', () => {
      expect(kata.formatValue("")).toBe("Value: ");
    });
  });

  describe('Exercise 2: typeof Type Guard', () => {
    it('should double a number', () => {
      expect(kata.double(5)).toBe(10);
      expect(kata.double(0)).toBe(0);
      expect(kata.double(-3)).toBe(-6);
    });

    it('should double a string by repeating it', () => {
      expect(kata.double("ha")).toBe("haha");
      expect(kata.double("abc")).toBe("abcabc");
    });

    it('should return a number when given a number', () => {
      expect(typeof kata.double(5)).toBe("number");
    });

    it('should return a string when given a string', () => {
      expect(typeof kata.double("x")).toBe("string");
    });
  });

  describe('Exercise 3: Union with null', () => {
    describe('getLength', () => {
      it('should return string length', () => {
        expect(kata.getLength("hello")).toBe(5);
        expect(kata.getLength("typescript")).toBe(10);
      });

      it('should return 0 for null', () => {
        expect(kata.getLength(null)).toBe(0);
      });

      it('should return 0 for empty string', () => {
        expect(kata.getLength("")).toBe(0);
      });
    });

    describe('firstChar', () => {
      it('should return first character of a string', () => {
        expect(kata.firstChar("hello")).toBe("h");
        expect(kata.firstChar("typescript")).toBe("t");
      });

      it('should return "?" for null', () => {
        expect(kata.firstChar(null)).toBe("?");
      });

      it('should return "?" for empty string', () => {
        expect(kata.firstChar("")).toBe("?");
      });
    });
  });

  describe('Exercise 4: in Operator Type Guard', () => {
    it('should describe a cat', () => {
      const cat = { name: "Whiskers", purrs: true };
      expect(kata.describeAnimal(cat)).toBe("Whiskers is a cat");
    });

    it('should describe a cat that does not purr', () => {
      const cat = { name: "Shadow", purrs: false };
      expect(kata.describeAnimal(cat)).toBe("Shadow is a cat");
    });

    it('should describe a dog with its breed', () => {
      const dog = { name: "Rex", breed: "German Shepherd" };
      expect(kata.describeAnimal(dog)).toBe("Rex is a German Shepherd");
    });

    it('should describe another dog', () => {
      const dog = { name: "Bella", breed: "Poodle" };
      expect(kata.describeAnimal(dog)).toBe("Bella is a Poodle");
    });
  });

  describe('Exercise 5: instanceof Type Guard', () => {
    it('should format an Error object', () => {
      const err = new Error("something broke");
      expect(kata.formatError(err)).toBe("Error: something broke");
    });

    it('should format an Error with a different message', () => {
      const err = new Error("file not found");
      expect(kata.formatError(err)).toBe("Error: file not found");
    });

    it('should format a plain string', () => {
      expect(kata.formatError("all good")).toBe("Message: all good");
    });

    it('should format an empty string', () => {
      expect(kata.formatError("")).toBe("Message: ");
    });
  });

  describe('Exercise 6: Discriminated Unions', () => {
    it('should calculate circle area', () => {
      const circle = { kind: "circle" as const, radius: 5 };
      expect(kata.getArea(circle)).toBeCloseTo(78.539, 2);
    });

    it('should calculate rectangle area', () => {
      const rect = { kind: "rectangle" as const, width: 4, height: 6 };
      expect(kata.getArea(rect)).toBe(24);
    });

    it('should calculate triangle area', () => {
      const tri = { kind: "triangle" as const, base: 3, height: 8 };
      expect(kata.getArea(tri)).toBe(12);
    });

    it('should calculate area of a unit circle', () => {
      const circle = { kind: "circle" as const, radius: 1 };
      expect(kata.getArea(circle)).toBeCloseTo(Math.PI, 5);
    });

    it('should calculate area of a square (rectangle with equal sides)', () => {
      const square = { kind: "rectangle" as const, width: 5, height: 5 };
      expect(kata.getArea(square)).toBe(25);
    });
  });

  describe('Exercise 7: Intersection Types', () => {
    it('should create a record with the correct id', () => {
      const record = kata.createRecord(1);
      expect(record.id).toBe(1);
    });

    it('should create a record with timestamps', () => {
      const record = kata.createRecord(42);
      expect(record.createdAt).toBe("2026-01-01");
      expect(record.updatedAt).toBe("2026-01-01");
    });

    it('should create a record satisfying both interfaces', () => {
      const record = kata.createRecord(7);
      expect(record).toEqual({
        id: 7,
        createdAt: "2026-01-01",
        updatedAt: "2026-01-01",
      });
    });
  });

  describe('Exercise 8: Comprehensive — Notification System', () => {
    describe('formatNotification', () => {
      it('should format an email notification', () => {
        const n = {
          channel: "email" as const,
          to: "alice@example.com",
          subject: "Hello",
          body: "Hi there!",
        };
        expect(kata.formatNotification(n)).toBe("Email to alice@example.com: Hello");
      });

      it('should format an SMS notification', () => {
        const n = {
          channel: "sms" as const,
          phoneNumber: "555-1234",
          message: "Your code is 123",
        };
        expect(kata.formatNotification(n)).toBe("SMS to 555-1234: Your code is 123");
      });

      it('should format a push notification', () => {
        const n = {
          channel: "push" as const,
          deviceId: "device-42",
          title: "Update available",
          message: "v2 is out",
        };
        expect(kata.formatNotification(n)).toBe("Push to device-42: Update available");
      });
    });

    describe('getRecipient', () => {
      it('should return email address for email notification', () => {
        const n = {
          channel: "email" as const,
          to: "bob@example.com",
          subject: "Test",
          body: "Body",
        };
        expect(kata.getRecipient(n)).toBe("bob@example.com");
      });

      it('should return phone number for SMS notification', () => {
        const n = {
          channel: "sms" as const,
          phoneNumber: "555-9876",
          message: "Hello",
        };
        expect(kata.getRecipient(n)).toBe("555-9876");
      });

      it('should return device ID for push notification', () => {
        const n = {
          channel: "push" as const,
          deviceId: "device-99",
          title: "Alert",
          message: "Something happened",
        };
        expect(kata.getRecipient(n)).toBe("device-99");
      });
    });
  });
});
