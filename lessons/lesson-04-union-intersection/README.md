# Lesson 4: Union & Intersection Types

## Learning Objectives

By the end of this lesson, you will be able to:
- Declare union types to represent values that can be one of several types
- Narrow union types safely using type guards
- Use `typeof`, `in`, and `instanceof` to distinguish between types at runtime
- Write discriminated unions for exhaustive, safe branching
- Combine types with intersection (`&`) to compose complex shapes

## Concepts for Python Developers

### Union Types vs Python's `Union`

Python has `Union` from the `typing` module (or `X | Y` in Python 3.10+):

**Python:**
```python
from typing import Union

def format_value(value: Union[str, int]) -> str:
    return f"Value: {value}"
```

**TypeScript:**
```typescript
type StringOrNumber = string | number;

function formatValue(value: StringOrNumber): string {
  return `Value: ${value}`;
}
```

The key difference: TypeScript *enforces* that you check which type you have before using type-specific methods. Python's type hints are optional and not enforced at runtime.

### Type Narrowing — Why It's Necessary

In Python, you can call any method on any value and only find out at runtime if it fails. TypeScript catches this at compile time:

```typescript
function double(value: string | number) {
  return value * 2;        // ERROR: can't multiply a string
  return value.repeat(2);  // ERROR: numbers don't have .repeat()
}
```

You must *narrow* the type first:

```typescript
function double(value: string | number) {
  if (typeof value === "number") {
    return value * 2;      // TypeScript knows it's a number here
  }
  return value.repeat(2);  // TypeScript knows it's a string here
}
```

### Type Guards — The Three Tools

| Guard | Syntax | Use when |
|-------|--------|----------|
| `typeof` | `typeof x === "string"` | Distinguishing primitives (`string`, `number`, `boolean`) |
| `in` | `"property" in x` | Distinguishing object shapes by presence of a property |
| `instanceof` | `x instanceof ClassName` | Distinguishing class instances (built-ins like `Error`, `Date`) |

### Discriminated Unions vs Plain Unions

A plain union requires `typeof` or `in` guards, which can be fragile:

```typescript
type Shape = { radius: number } | { width: number; height: number };
// How do you know which one you have? You have to check for a property.
```

A **discriminated union** adds a literal `kind` field to each member, making branching exhaustive and safe:

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape) {
  switch (shape.kind) {      // TypeScript narrows automatically
    case "circle":    return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
  }
}
```

This is the idiomatic TypeScript pattern for modelling "one of several things."

### Intersection Types vs `extends`

Both combine types, but differently:

```typescript
// extends — only works with interfaces
interface Timestamped extends Identifiable {
  createdAt: string;
}

// & intersection — works with any type alias too
type TimestampedRecord = Identifiable & Timestamped;
type StringAndSerializable = string & { serialize(): string }; // valid
```

Use `&` when you need to combine type aliases, or when you want to compose without creating a new named interface.

## Instructions

1. Open `kata.ts` and complete each exercise
2. Run tests with `npm run test:watch` to see your progress
3. Each exercise builds on previous concepts
4. Export your solutions after completing each exercise

## Testing Your Work

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended)
npm run test:watch

# Run only this lesson's tests
npm test -- lessons/lesson-04-union-intersection
```

## Tips

- **Always use `===`** in type guards, never `==` — type narrowing depends on exact type checks
- **Exhaustive switches**: With discriminated unions, TypeScript will warn you if you miss a case (with `noImplicitReturns` enabled)
- **Order matters in unions**: `null | string` and `string | null` are equivalent, but check for `null` first in your logic to avoid surprises
- **`&` doesn't merge conflicts**: If two types in an intersection have the same property with different types, the result is `never` for that property

## Exercises Overview

1. **Basic Union Types**: Declare a union type and write a function that accepts it
2. **`typeof` Type Guard**: Narrow `string | number` using `typeof`
3. **Union with `null`**: Handle nullable values safely
4. **`in` Operator Guard**: Distinguish object shapes by property presence
5. **`instanceof` Guard**: Distinguish built-in class instances (`Error`)
6. **Discriminated Unions**: Use a `kind` field and `switch` for safe branching
7. **Intersection Types**: Combine two interfaces with `&`
8. **Comprehensive — Notification System**: Combine everything in a realistic scenario

Good luck! Remember to check the tests to understand exactly what's expected.
