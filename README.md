# TypeScript Tutorial: Learn by Doing

Welcome! This is a hands-on TypeScript tutorial designed for experienced Python developers who want to learn TypeScript through progressively challenging exercises (katas).

## Philosophy

Each lesson is a self-contained module with:
- **Clear learning objectives** - Know what you're learning
- **Commented exercises** - Understand what to implement
- **Automated tests** - Verify your solutions work correctly

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- Your favorite code editor (VS Code recommended for TypeScript)

### Installation

```bash
npm install
```

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with UI
npm run test:ui

# Type-check your code without running tests
npm run type-check
```

## Important: Lesson Order

**Complete lessons sequentially!** Each lesson builds on concepts from previous lessons:

Lesson 0 → Lesson 1 → Lesson 2 → Lesson 3 → Lesson 4

Don't skip ahead - you'll need the fundamentals from earlier lessons.

## Lessons

### Lesson 0: JavaScript Syntax Fundamentals
**Location:** `lessons/lesson-00-syntax-fundamentals/`

**Topics covered:**
- Variable declarations (const, let, var)
- String templates and concatenation
- Array indexing and basic methods
- Object property access
- Equality operators (== vs ===)
- Logical operators (&&, ||, !)
- Ternary operator

**To start:**
1. Read `lessons/lesson-00-syntax-fundamentals/README.md`
2. Open `lessons/lesson-00-syntax-fundamentals/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

### Lesson 1: JavaScript Functions & Operators
**Location:** `lessons/lesson-01-functions-operators/`

**Topics covered:**
- Function declarations and arrow functions
- Nullish coalescing (??) and optional chaining (?.)
- Destructuring objects and arrays
- Loops (for, for...of, for...in, forEach)
- Spread operator (...)
- Combining multiple concepts

**To start:**
1. Read `lessons/lesson-01-functions-operators/README.md`
2. Open `lessons/lesson-01-functions-operators/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

### Lesson 2: TypeScript Basics
**Location:** `lessons/lesson-02-typescript-basics/`

**Topics covered:**
- Type annotations for primitives (string, number, boolean)
- Type inference
- Arrays and tuples
- Object types
- Function signatures
- Optional parameters

**To start:**
1. Read `lessons/lesson-02-typescript-basics/README.md`
2. Open `lessons/lesson-02-typescript-basics/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

### Lesson 3: Interfaces & Type Aliases
**Location:** `lessons/lesson-03-interfaces/`

**Topics covered:**
- Defining interfaces
- Creating type aliases
- Optional and readonly properties
- Extending interfaces
- Function types
- Complex type composition

**To start:**
1. Read `lessons/lesson-03-interfaces/README.md`
2. Open `lessons/lesson-03-interfaces/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

### Lesson 4: Union & Intersection Types
**Location:** `lessons/lesson-04-union-intersection/`

**Topics covered:**
- Union types (`string | number`)
- Type narrowing with `typeof`, `in`, and `instanceof`
- Union with `null` — handling nullable values safely
- Discriminated unions (tagged unions with a `kind` field)
- Intersection types (`TypeA & TypeB`)
- Combining all concepts in a realistic scenario

**To start:**
1. Read `lessons/lesson-04-union-intersection/README.md`
2. Open `lessons/lesson-04-union-intersection/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

## Learning Tips

1. **Read the error messages** - TypeScript's compiler errors are your friend. They tell you exactly what's wrong.

2. **Use type inference** - You don't always need to write type annotations. TypeScript can often infer types automatically.

3. **Start simple** - Focus on getting tests to pass first. Refine your solution afterward.

4. **Type-check frequently** - Run `npm run type-check` to catch type errors without running tests.

5. **Compare to Python** - Many TypeScript concepts have Python equivalents:
   - Type annotations: Similar to Python type hints
   - Interfaces: Like Python Protocols or TypedDict
   - Generics: Like Python's TypeVar and Generic
   - Union types: Like Python's Union from typing

## Next Steps

After completing a lesson:
- Review your solution
- Try refactoring to make it more type-safe
- Explore the TypeScript documentation for deeper understanding
- Move to the next lesson when ready

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play) - Try code in browser
- [Vitest Documentation](https://vitest.dev/)

## Progress Tracking

- [ ] Lesson 0: JavaScript Syntax Fundamentals
- [ ] Lesson 1: JavaScript Functions & Operators
- [ ] Lesson 2: TypeScript Basics
- [ ] Lesson 3: Interfaces & Type Aliases
- [ ] Lesson 4: Union & Intersection Types

Happy learning!
