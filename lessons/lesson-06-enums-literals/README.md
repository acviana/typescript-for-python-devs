# Lesson 6: Enums & Literal Types

## Learning Objectives

By the end of this lesson, you will be able to:
- Use string literal types to restrict values to a known set of strings
- Declare numeric enums with custom starting values
- Declare string enums with explicit string values
- Understand when to use an enum vs a literal union type
- Use numeric literal types for constrained number values
- Build template literal types to construct new string types
- Use enums as class property types

## Concepts for Python Developers

### String Literal Types

TypeScript can restrict a value to a specific set of strings at compile time:

**Python:**
```python
from typing import Literal
Direction = Literal["north", "south", "east", "west"]
```

**TypeScript:**
```typescript
type Direction = "north" | "south" | "east" | "west";
```

The key difference: TypeScript enforces this statically. Passing `"up"` is a compile error, not a runtime error.

### Numeric Enums

**Python:**
```python
from enum import Enum

class Priority(Enum):
    LOW = 1
    MEDIUM = 2
    HIGH = 3
```

**TypeScript:**
```typescript
enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}
```

Accessed as `Priority.Low`, `Priority.High`. TypeScript numeric enums also support **reverse lookup**: `Priority[1]` gives `"Low"`.

### String Enums

String enums require explicit string values for each member. Unlike numeric enums, there is no reverse lookup — but the values are human-readable in logs and API responses:

```typescript
enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

// Accessed as:
HttpMethod.Get    // "GET"
HttpMethod.Post   // "POST"
```

**Tip — `const enum`:** TypeScript has a `const enum` variant that inlines values at compile time, producing no runtime object. This is a minor performance optimisation. Use regular `enum` until you have a specific reason to use `const enum`.

### Enums vs Literal Unions — The Big Decision

This is one of the most common style decisions in TypeScript codebases. Both solve the same problem:

```typescript
// Enum approach
enum Suit { Hearts = "hearts", Diamonds = "diamonds", Clubs = "clubs", Spades = "spades" }
getSuitSymbol(Suit.Hearts);  // must use enum member

// Literal union approach
type Suit = "hearts" | "diamonds" | "clubs" | "spades";
getSuitSymbol("hearts");  // plain string works directly
```

| | Enums | Literal Unions |
|---|---|---|
| Syntax | More verbose | Simpler |
| Calling code | Must import & use `Suit.Hearts` | Plain string `"hearts"` works |
| Refactoring | Rename in one place | Must update all string occurrences |
| Runtime object | Yes (can iterate) | No |
| Modern TS preference | Less common | **Preferred in most codebases** |

A good rule of thumb: use literal unions by default; reach for enums when you need to iterate over values at runtime or when you want a clear namespace.

### Numeric Literal Types

Just like string literals, specific numbers can be used as types:

```typescript
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
type HttpSuccessCode = 200 | 201 | 204;

function roll(n: DiceRoll): string { ... }
roll(7);  // ERROR: 7 is not assignable to DiceRoll
```

**Python:**
```python
from typing import Literal
DiceRoll = Literal[1, 2, 3, 4, 5, 6]
```

### Template Literal Types

Template literal types construct new string types by combining existing ones — at the **type level**, not the value level:

```typescript
type Side = "top" | "bottom" | "left" | "right";
type CSSProperty = `margin-${Side}`;
// Result: "margin-top" | "margin-bottom" | "margin-left" | "margin-right"

type EventName = `on${"Click" | "Change" | "Focus"}`;
// Result: "onClick" | "onChange" | "onFocus"
```

Python has no equivalent — this is a TypeScript-specific feature.

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
npm test -- lessons/lesson-06-enums-literals
```

## Tips

- **String enums are usually better than numeric enums** — the values are readable in logs and debuggers; numeric enum values (`0`, `1`, `2`) tell you nothing on their own
- **Prefer literal unions over enums** in most cases — they're simpler and work well with plain strings
- **`const enum` is a compile-time-only optimisation** — don't use it until you understand the tradeoffs (it cannot be used across module boundaries in some configurations)
- **Template literal types are types, not values** — `\`${number}px\`` describes the shape of a string, it does not create one; you still need a regular template literal at runtime
- **Exhaustive switches** — with both enums and literal unions, TypeScript will warn if you miss a case when `noImplicitReturns` is enabled

## Exercises Overview

1. **String Literal Types**: Declare a `Direction` type and implement `getOpposite` with a switch
2. **Numeric Enums**: Declare `Priority` with custom start value; map to human-readable labels
3. **String Enums**: Declare `HttpMethod`; implement `isReadOnly` and `describeMethod`
4. **Enums vs Literal Unions**: Implement the same card suit logic using a literal union; understand the tradeoff
5. **Numeric Literal Types**: Declare `DiceRoll` and `HttpSuccessCode`; implement guard and description functions
6. **Template Literal Types**: Build `CSSUnit` and `EventName` types; implement `formatUnit` and `isEventName`
7. **Enum as a Class Property**: Declare `TaskStatus` enum; use it in a `Task` class with state-transition methods
8. **Comprehensive — Traffic Light**: Combine enum, numeric literal type, and multiple functions to model a state machine

Good luck! Remember to check the tests to understand exactly what's expected.
