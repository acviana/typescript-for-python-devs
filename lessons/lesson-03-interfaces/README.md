# Lesson 3: Interfaces & Type Aliases

## Learning Objectives

By the end of this lesson, you will be able to:
- Define custom types using interfaces
- Create type aliases for complex types
- Understand when to use interfaces vs type aliases
- Extend interfaces to create new types
- Work with optional and readonly properties
- Define function types using interfaces

## Concepts for Python Developers

### Interfaces vs Python's Duck Typing

In Python, you rely on duck typing - "if it walks like a duck and quacks like a duck, it's a duck." TypeScript's interfaces formalize this concept by explicitly defining what properties and methods an object should have.

**Python (duck typing):**
```python
def greet_user(user):
    # We just assume user has a 'name' attribute
    return f"Hello, {user.name}!"

# Any object with a 'name' works
class User:
    def __init__(self, name):
        self.name = name
```

**TypeScript (interfaces):**
```typescript
interface User {
  name: string;
}

function greetUser(user: User): string {
  return `Hello, ${user.name}!`;
}
```

### Type Aliases vs TypedDict

TypeScript's type aliases are similar to Python's `TypedDict` (from `typing`), but more flexible:

**Python:**
```python
from typing import TypedDict

class User(TypedDict):
    name: str
    age: int
```

**TypeScript:**
```typescript
type User = {
  name: string;
  age: number;
};
```

## Key Differences from Python

1. **Structural Typing**: TypeScript uses structural typing (shape matters), not nominal typing (name matters)
2. **Compile-time Only**: Interfaces and types exist only at compile time - they're erased in JavaScript
3. **No Runtime Validation**: Unlike Python's dataclasses or Pydantic, TypeScript types don't validate at runtime

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

# Run tests with UI
npm run test:ui
```

## Tips

- **Interfaces vs Types**: Use interfaces for object shapes that might be extended; use types for unions, primitives, or tuples
- **Optional Properties**: Use `?` to mark properties as optional: `age?: number`
- **Readonly Properties**: Use `readonly` to prevent reassignment: `readonly id: string`
- **Extending Interfaces**: Use `extends` to create new interfaces based on existing ones
- **Function Types**: Both interfaces and types can define function signatures

## Exercises Overview

1. **Basic Interface**: Define a simple interface for a product
2. **Type Alias**: Create a type alias for a union type
3. **Optional Properties**: Work with optional properties in interfaces
4. **Readonly Properties**: Use readonly to prevent mutations
5. **Extending Interfaces**: Create new interfaces by extending existing ones
6. **Function Type with Interface**: Define a function signature using an interface
7. **Type Alias for Function**: Create a type alias for a function signature
8. **Complex Type Composition**: Combine multiple types and interfaces

Good luck! Remember to check the tests to understand exactly what's expected.
