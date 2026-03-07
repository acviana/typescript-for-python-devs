/**
 * Lesson 4: Union & Intersection Types
 *
 * In this lesson, you'll learn how to work with union types (A | B),
 * narrow them safely using type guards, write discriminated unions,
 * and compose types with intersections (A & B).
 *
 * Prerequisites: Complete Lessons 0, 1, 2, and 3 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Basic Union Types
// =============================================================================
// A union type means "this value can be one of these types."
//
// Syntax:
//   type MyType = TypeA | TypeB;
//
// Python comparison:
//   from typing import Union
//   def fn(x: Union[str, int]) -> str: ...
//   # or in Python 3.10+:
//   def fn(x: str | int) -> str: ...
//
// TODO: Create a type alias called 'StringOrNumber' that is string | number

type StringOrNumber = string | number;

// Then write a function called 'formatValue' that:
// - Takes a parameter 'value' of type StringOrNumber
// - Returns a string in the format "Value: {value}"
// - Has an explicit return type of string
//
// Example:
//   formatValue(42)      → "Value: 42"
//   formatValue("hello") → "Value: hello"

// Imperative Solution
// function formatValue(value: StringOrNumber): string {
//   return `Value: ${value}`;
// }

const formatValue = (value: StringOrNumber): string => `Value: ${value}`;

// TODO: Write your code here
// After completing this exercise, export your type and function like this:
export type { StringOrNumber };
export { formatValue };

// =============================================================================
// Exercise 2: typeof Type Guard
// =============================================================================
// When a value has a union type, TypeScript won't let you use type-specific
// methods until you *narrow* the type by checking which one it is.
//
// The 'typeof' guard works for primitives: "string", "number", "boolean"
//
// Always use === (not ==) in type guards — type narrowing depends on it.
//
// Example:
//   function process(value: string | number) {
//     if (typeof value === "string") {
//       return value.toUpperCase(); // TypeScript knows it's a string here
//     }
//     return value * 2;            // TypeScript knows it's a number here
//   }
//
// TODO: Write a function called 'double' that:
// - Takes a parameter 'value' of type string | number
// - If value is a number, returns value * 2 (a number)
// - If value is a string, returns value repeated twice using .repeat(2) (a string)
// - Has an explicit return type of string | number
//
// Example:
//   double(5)       → 10
//   double("ha")    → "haha"

function double(value: string | number): string | number {
  if (typeof value === "string") {
    return value.repeat(2);
  }
  return value * 2;
}

// TODO: Write your code here
// After completing this exercise, export your function like this:
export { double };

// =============================================================================
// Exercise 3: Union with null
// =============================================================================
// null is a common member of union types. TypeScript forces you to handle
// it explicitly before using the value — no more unexpected null errors!
//
// You can narrow null with a simple if-check, or use ?? from Lesson 1.
//
// Example:
//   function greet(name: string | null): string {
//     if (name === null) return "Hello, stranger!";
//     return `Hello, ${name}!`;
//   }
//
// TODO: Write a function called 'getLength' that:
// - Takes a parameter 'value' of type string | null
// - Returns the length of the string, or 0 if value is null
// - Has an explicit return type of number

// function getLength(value: string | null): number {
//  if (value === null) {
//    return 0;
//  }
//  return value?.length;
// }

const getLength = (value: string | null): number =>
  value === null ? 0 : value.length;

// Then write a function called 'firstChar' that:
// - Takes a parameter 'value' of type string | null
// - Returns the first character of the string, or "?" if value is null or empty
// - Has an explicit return type of string

const firstChar = (value: string | null): string =>
  value === null ? "?" : value === "" ? "?" : value[0];

// Example:
//   getLength("hello") → 5
//   getLength(null)    → 0
//   firstChar("hello") → "h"
//   firstChar(null)    → "?"
//   firstChar("")      → "?"

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { getLength, firstChar };

// =============================================================================
// Exercise 4: 'in' Operator Type Guard
// =============================================================================
// The 'in' operator checks whether a property exists on an object.
// TypeScript uses this to narrow between object types.
//
// Syntax:
//   if ("propertyName" in obj) { ... }
//
// This is useful when two object types share some properties but differ
// in others — like two interfaces from Lesson 3!
//
// TODO: Create two interfaces:
//
// 'Cat' with:
// - name: string
// - purrs: boolean
//
// 'Dog' with:
// - name: string
// - breed: string

interface Cat {
  name: string;
  purrs: boolean;
}

interface Dog {
  name: string;
  breed: string;
}

// Then write a function called 'describeAnimal' that:
// - Takes a parameter 'animal' of type Cat | Dog
// - If the animal is a Cat, returns "{name} is a cat"
// - If the animal is a Dog, returns "{name} is a {breed}"
// - Use the 'in' operator to distinguish them
// - Has an explicit return type of string
//
// Example:
//   describeAnimal({ name: "Whiskers", purrs: true })         → "Whiskers is a cat"
//   describeAnimal({ name: "Rex", breed: "German Shepherd" }) → "Rex is a German Shepherd"

const describeAnimal = (animal: Cat | Dog): string =>
  "purrs" in animal
    ? `${animal.name} is a cat`
    : `${animal.name} is a ${animal.breed}`;

// TODO: Write your code here
// After completing this exercise, export your interfaces and function like this:
export type { Cat, Dog };
export { describeAnimal };

// =============================================================================
// Exercise 5: instanceof Type Guard
// =============================================================================
// The 'instanceof' operator checks whether a value is an instance of a class.
// It works with built-in classes like Error, Date, Map, etc. — no class
// knowledge beyond Python's equivalent of isinstance() needed here.
//
// Syntax:
//   if (value instanceof Error) { ... }
//
// Example:
//   function handle(value: Date | string): string {
//     if (value instanceof Date) {
//       return value.toISOString(); // TypeScript knows it's a Date
//     }
//     return value;                 // TypeScript knows it's a string
//   }
//
// TODO: Write a function called 'formatError' that:
// - Takes a parameter 'value' of type Error | string
// - If value is an Error, returns "Error: {value.message}"
// - If value is a string, returns "Message: {value}"
// - Has an explicit return type of string
//
// Example:
//   formatError(new Error("something broke")) → "Error: something broke"
//   formatError("all good")                   → "Message: all good"

// TODO: Write your code here
// After completing this exercise, export your function like this:
// export { formatError };

// =============================================================================
// Exercise 6: Discriminated Unions
// =============================================================================
// A discriminated union is a union where every member has a shared literal
// property (called a "discriminant" or "tag") that uniquely identifies it.
// TypeScript uses this tag to narrow the type in a switch statement.
//
// This is the idiomatic TypeScript pattern for "one of several shapes."
//
// Syntax:
//   type Shape =
//     | { kind: "circle"; radius: number }
//     | { kind: "square"; side: number };
//
//   function area(s: Shape): number {
//     switch (s.kind) {
//       case "circle": return Math.PI * s.radius ** 2;
//       case "square": return s.side ** 2;
//     }
//   }
//
// TODO: Create three interfaces, each with a 'kind' discriminant:
//
// 'Circle' with:
// - kind: "circle"
// - radius: number
//
// 'Rectangle' with:
// - kind: "rectangle"
// - width: number
// - height: number
//
// 'Triangle' with:
// - kind: "triangle"
// - base: number
// - height: number
//
// Then create a type alias 'Shape' = Circle | Rectangle | Triangle
//
// Then write a function called 'getArea' that:
// - Takes a parameter 'shape' of type Shape
// - Returns the area as a number
// - Uses a switch on shape.kind
// - Has an explicit return type of number
//
// Formulas:
//   Circle:    Math.PI * radius ** 2
//   Rectangle: width * height
//   Triangle:  0.5 * base * height
//
// Example:
//   getArea({ kind: "circle", radius: 5 })              → ~78.54
//   getArea({ kind: "rectangle", width: 4, height: 6 }) → 24
//   getArea({ kind: "triangle", base: 3, height: 8 })   → 12

// TODO: Write your code here
// After completing this exercise, export your types and function like this:
// export type { Circle, Rectangle, Triangle, Shape };
// export { getArea };

// =============================================================================
// Exercise 7: Intersection Types
// =============================================================================
// An intersection type combines multiple types into one. The result must
// satisfy ALL of the combined types.
//
// Syntax:
//   type Combined = TypeA & TypeB;
//
// This is similar to extending interfaces (Lesson 3), but & works with
// any type alias, not just interfaces. Use & when composing type aliases.
//
// Python comparison:
//   # No direct equivalent — closest is multiple inheritance or Protocols
//
// TODO: Create two interfaces:
//
// 'Identifiable' with:
// - id: number
//
// 'Timestamped' with:
// - createdAt: string
// - updatedAt: string
//
// Then create a type alias 'TimestampedRecord' = Identifiable & Timestamped
//
// Then write a function called 'createRecord' that:
// - Takes a parameter 'id' of type number
// - Returns a TimestampedRecord with:
//   - id set to the given id
//   - createdAt set to "2026-01-01"
//   - updatedAt set to "2026-01-01"
// - Has an explicit return type of TimestampedRecord
//
// Example:
//   createRecord(1) → { id: 1, createdAt: "2026-01-01", updatedAt: "2026-01-01" }

// TODO: Write your code here
// After completing this exercise, export your types and function like this:
// export type { Identifiable, Timestamped, TimestampedRecord };
// export { createRecord };

// =============================================================================
// Exercise 8: Comprehensive — Notification System
// =============================================================================
// Let's combine everything: discriminated unions, type guards, and intersection
// types to model a simple notification system.
//
// TODO: Create three interfaces, each with a 'channel' discriminant:
//
// 'EmailNotification' with:
// - channel: "email"
// - to: string      (email address)
// - subject: string
// - body: string
//
// 'SMSNotification' with:
// - channel: "sms"
// - phoneNumber: string
// - message: string
//
// 'PushNotification' with:
// - channel: "push"
// - deviceId: string
// - title: string
// - message: string
//
// Then create a type alias 'Notification' = EmailNotification | SMSNotification | PushNotification
//
// Then write a function called 'formatNotification' that:
// - Takes a parameter 'notification' of type Notification
// - Returns a formatted string based on the channel:
//   - email: "Email to {to}: {subject}"
//   - sms:   "SMS to {phoneNumber}: {message}"
//   - push:  "Push to {deviceId}: {title}"
// - Has an explicit return type of string
//
// Then write a function called 'getRecipient' that:
// - Takes a parameter 'notification' of type Notification
// - Returns the recipient identifier as a string:
//   - email: the 'to' field
//   - sms:   the 'phoneNumber' field
//   - push:  the 'deviceId' field
// - Has an explicit return type of string
//
// Example:
//   formatNotification({ channel: "email", to: "alice@example.com", subject: "Hello", body: "Hi!" })
//     → "Email to alice@example.com: Hello"
//   formatNotification({ channel: "sms", phoneNumber: "555-1234", message: "Your code is 123" })
//     → "SMS to 555-1234: Your code is 123"
//   getRecipient({ channel: "push", deviceId: "device-42", title: "Update", message: "v2 is out" })
//     → "device-42"

// TODO: Write your code here
// After completing this exercise, export your types and functions like this:
// export type { EmailNotification, SMSNotification, PushNotification, Notification };
// export { formatNotification, getRecipient };

// This empty export makes the file a module for TypeScript
export {};
