# Lesson 5: Classes & Access Modifiers

## Learning Objectives

By the end of this lesson, you will be able to:
- Define classes with properties, constructors, and methods in TypeScript
- Control member visibility with `public`, `private`, and `protected`
- Use constructor parameter shorthand to eliminate boilerplate
- Enforce immutability with `readonly` on class properties
- Define computed properties with `get`/`set` accessors
- Use `extends` and `super` for class inheritance
- Use `implements` to bind a class to an interface contract

## Concepts for Python Developers

### Class Syntax Comparison

The structure is similar to Python, but with curly braces and explicit types:

**Python:**
```python
class Person:
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age

    def greet(self) -> str:
        return f"Hi, I'm {self.name}"
```

**TypeScript:**
```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

Key differences:
- `self` → `this`
- `__init__` → `constructor`
- Property types must be declared before the constructor (or use shorthand — see Exercise 3)

### Access Modifiers — Enforced, Not Just Convention

Python uses `_name` as a convention for "private", but nothing stops you from accessing it. TypeScript enforces access at **compile time**:

| Modifier | Accessible from | Python equivalent |
|---|---|---|
| `public` | Anywhere (default) | No prefix |
| `private` | Only inside the class | `__name` (name-mangled, but still accessible) |
| `protected` | Class and its subclasses | `_name` (convention only) |

```typescript
class BankAccount {
  private balance: number = 0;  // TypeScript won't let you access this outside

  deposit(amount: number): void {
    this.balance += amount;   // OK — inside the class
  }
}

const acc = new BankAccount();
acc.balance;  // ERROR: Property 'balance' is private
```

### Constructor Shorthand — Very TypeScript-Specific

This is one of the most idiomatic TypeScript patterns. Adding an access modifier to a constructor parameter automatically declares the property and assigns it:

```typescript
// Verbose (equivalent to shorthand below):
class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Idiomatic TypeScript shorthand:
class Point {
  constructor(public x: number, public y: number) {}
}
```

Python has no equivalent — the closest is `dataclasses`, but it works differently.

### Readonly Properties

`readonly` on a class property means it can only be assigned in the constructor:

```typescript
class Config {
  constructor(readonly apiUrl: string) {}  // shorthand + readonly
}

const c = new Config("https://api.example.com");
c.apiUrl = "other";  // ERROR: Cannot assign to 'apiUrl' because it is a read-only property
```

### Getters & Setters

TypeScript uses `get`/`set` keywords (similar to Python's `@property`/`@setter`):

**Python:**
```python
class Temperature:
    @property
    def fahrenheit(self) -> float:
        return self._celsius * 9/5 + 32
```

**TypeScript:**
```typescript
class Temperature {
  get fahrenheit(): number {
    return this._celsius * 9/5 + 32;
  }
}
```

Accessed like a plain property, not called as a method: `t.fahrenheit` not `t.fahrenheit()`.

### Inheritance

```typescript
class Animal {
  constructor(public name: string) {}
  speak(): string { return `${this.name} makes a sound`; }
}

class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);  // must call super() before using 'this'
  }
  speak(): string { return `${this.name} barks`; }  // overrides parent
}
```

Key rules:
- `super()` must be called in the constructor **before** any reference to `this`
- Methods can be overridden simply by redefining them (no decorator needed unlike Python's convention)

### Implementing Interfaces

A class can declare it satisfies an interface with `implements`. TypeScript then verifies the contract:

```typescript
interface Printable {
  print(): string;
}

class Report implements Printable {
  print(): string { return "Report content"; }
}

class Invoice implements Printable {
  print(): string { return "Invoice content"; }
}
```

A class can implement multiple interfaces:
```typescript
class Settings implements Serializable, Resettable { ... }
```

## Instructions

1. Open `kata.ts` and complete each exercise
2. Run tests with `npm run test:watch` to see your progress
3. Each exercise builds on previous concepts
4. Uncomment and update the export lines as you complete each exercise

## Testing Your Work

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended)
npm run test:watch

# Run only this lesson's tests
npm test -- lessons/lesson-05-classes
```

## Tips

- **Constructor shorthand is idiomatic** — prefer `constructor(public x: number)` over declaring and assigning separately
- **`private` is compile-time only** — at runtime (in JavaScript), there is no enforcement. Use `#name` (private class fields) if you need runtime privacy, but that's outside this lesson's scope
- **`super()` must come first** — in a subclass constructor, you cannot reference `this` until after `super()` is called
- **Getters are accessed without `()`** — `t.fahrenheit` not `t.fahrenheit()`; forgetting this is a common mistake
- **`implements` does not inherit** — it only checks the contract; the actual implementation must still be written

## Exercises Overview

1. **Basic Class**: Define a class with properties, a constructor, and a method
2. **Access Modifiers**: Use `private` to hide internal state; expose it only via methods
3. **Constructor Shorthand**: Eliminate boilerplate with parameter property declarations
4. **Readonly Properties**: Combine `readonly` and constructor shorthand for immutable fields
5. **Getters & Setters**: Define computed properties with validation logic
6. **Inheritance**: Extend a base class with `extends` and `super`; override methods
7. **Implementing Interfaces**: Bind a class to an interface contract with `implements`
8. **Comprehensive — Shape Hierarchy**: Combine interfaces, inheritance, readonly, and getters in a realistic scenario

Good luck! Remember to check the tests to understand exactly what's expected.
