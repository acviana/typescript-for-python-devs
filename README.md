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

## Lessons

### Lesson 1: TypeScript Basics
**Location:** `lessons/lesson-01-basics/`

**Topics covered:**
- Type annotations for primitives (string, number, boolean)
- Type inference
- Arrays and tuples
- Object types
- Function signatures
- Optional parameters

**To start:**
1. Read `lessons/lesson-01-basics/README.md`
2. Open `lessons/lesson-01-basics/kata.ts`
3. Complete the TODOs
4. Run `npm run test:watch` to see your progress

### Lesson 2: Interfaces & Type Aliases
**Location:** `lessons/lesson-02-interfaces/`

**Topics covered:**
- Defining interfaces
- Creating type aliases
- Optional and readonly properties
- Extending interfaces
- Function types
- Complex type composition

**To start:**
1. Read `lessons/lesson-02-interfaces/README.md`
2. Open `lessons/lesson-02-interfaces/kata.ts`
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

- [ ] Lesson 1: TypeScript Basics
- [ ] Lesson 2: Interfaces & Type Aliases

Happy learning!
