/**
 * Tests for Lesson 3: Interfaces & Type Aliases
 * 
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 3: Interfaces & Type Aliases', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Basic Interface', () => {
    it('should format product correctly', () => {
      const product = { id: 1, name: "Laptop", price: 999, inStock: true };
      expect(kata.formatProduct(product)).toBe("Laptop ($999)");
    });

    it('should format another product correctly', () => {
      const product = { id: 2, name: "Mouse", price: 25, inStock: false };
      expect(kata.formatProduct(product)).toBe("Mouse ($25)");
    });
  });

  describe('Exercise 2: Type Alias for Union Types', () => {
    it('should return correct message for pending status', () => {
      expect(kata.getStatusMessage("pending")).toBe("Application is being reviewed");
    });

    it('should return correct message for approved status', () => {
      expect(kata.getStatusMessage("approved")).toBe("Application approved");
    });

    it('should return correct message for rejected status', () => {
      expect(kata.getStatusMessage("rejected")).toBe("Application rejected");
    });
  });

  describe('Exercise 3: Optional Properties', () => {
    it('should return email when present', () => {
      const user = { id: 1, username: "alice", email: "alice@example.com" };
      expect(kata.displayContact(user)).toBe("alice@example.com");
    });

    it('should return phone when email is absent but phone is present', () => {
      const user = { id: 2, username: "bob", phone: "555-1234" };
      expect(kata.displayContact(user)).toBe("555-1234");
    });

    it('should return "No contact info" when both email and phone are absent', () => {
      const user = { id: 3, username: "charlie" };
      expect(kata.displayContact(user)).toBe("No contact info");
    });

    it('should prefer email over phone when both are present', () => {
      const user = { id: 4, username: "diana", email: "diana@example.com", phone: "555-5678" };
      expect(kata.displayContact(user)).toBe("diana@example.com");
    });
  });

  describe('Exercise 4: Readonly Properties', () => {
    it('should create config with correct values', () => {
      const config = kata.createConfig("https://api.example.com", 5000, 3);
      expect(config.apiUrl).toBe("https://api.example.com");
      expect(config.timeout).toBe(5000);
      expect(config.retryAttempts).toBe(3);
    });

    it('should allow modifying retryAttempts', () => {
      const config = kata.createConfig("https://api.example.com", 5000, 3);
      config.retryAttempts = 5;
      expect(config.retryAttempts).toBe(5);
    });
  });

  describe('Exercise 5: Extending Interfaces', () => {
    it('should describe dog correctly', () => {
      const dog = { name: "Max", age: 3, breed: "Labrador", isGoodBoy: true };
      expect(kata.describeDog(dog)).toBe("Max is a 3 year old Labrador");
    });

    it('should describe another dog correctly', () => {
      const dog = { name: "Bella", age: 5, breed: "Poodle", isGoodBoy: true };
      expect(kata.describeDog(dog)).toBe("Bella is a 5 year old Poodle");
    });
  });

  describe('Exercise 6: Function Type with Interface', () => {
    it('should calculate addition correctly', () => {
      const add = (a: number, b: number) => a + b;
      expect(kata.calculate(5, 3, add)).toBe(8);
    });

    it('should calculate subtraction correctly', () => {
      const subtract = (a: number, b: number) => a - b;
      expect(kata.calculate(10, 4, subtract)).toBe(6);
    });

    it('should calculate multiplication correctly', () => {
      const multiply = (a: number, b: number) => a * b;
      expect(kata.calculate(7, 6, multiply)).toBe(42);
    });
  });

  describe('Exercise 7: Type Alias for Function', () => {
    it('should transform strings to uppercase', () => {
      const toUpper = (s: string) => s.toUpperCase();
      expect(kata.transformStrings(["hello", "world"], toUpper)).toEqual(["HELLO", "WORLD"]);
    });

    it('should transform strings with custom function', () => {
      const addExclamation = (s: string) => s + "!";
      expect(kata.transformStrings(["hi", "bye"], addExclamation)).toEqual(["hi!", "bye!"]);
    });

    it('should handle empty array', () => {
      const toUpper = (s: string) => s.toUpperCase();
      expect(kata.transformStrings([], toUpper)).toEqual([]);
    });
  });

  describe('Exercise 8: Complex Type Composition', () => {
    it('should calculate order total correctly', () => {
      const order = {
        orderId: "ORD-123",
        items: [
          { productId: 1, quantity: 2, price: 10 },
          { productId: 2, quantity: 1, price: 20 }
        ],
        paymentMethod: "credit-card" as const,
        totalAmount: 40
      };
      expect(kata.calculateOrderTotal(order)).toBe(40);
    });

    it('should calculate order total with multiple items', () => {
      const order = {
        orderId: "ORD-456",
        items: [
          { productId: 1, quantity: 3, price: 15 },
          { productId: 2, quantity: 2, price: 25 },
          { productId: 3, quantity: 1, price: 100 }
        ],
        paymentMethod: "paypal" as const,
        totalAmount: 195
      };
      expect(kata.calculateOrderTotal(order)).toBe(195);
    });

    it('should handle empty order', () => {
      const order = {
        orderId: "ORD-789",
        items: [],
        paymentMethod: "bank-transfer" as const,
        totalAmount: 0
      };
      expect(kata.calculateOrderTotal(order)).toBe(0);
    });
  });
});
