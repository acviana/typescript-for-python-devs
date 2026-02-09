# Agent Instructions for TypeScript Tutorial Project

This document provides guidance for AI coding agents working on this TypeScript tutorial project.

## Project Overview

This is a hands-on TypeScript tutorial designed for Python developers. It uses a "kata" approach where each lesson is a self-contained module with:
- A README explaining concepts
- A kata.ts file with TODO exercises
- A kata.test.ts file with tests to validate solutions

## Project Structure

```
typescript-tutorial/
├── package.json              # Dependencies: typescript, vitest, @vitest/ui
├── tsconfig.json             # TypeScript config (strict mode, ES2022)
├── vitest.config.ts          # Test configuration
├── README.md                 # Main getting started guide
├── agents.md                 # This file
└── lessons/
    └── lesson-XX-topic/
        ├── README.md         # Lesson objectives, concepts, tips
        ├── kata.ts           # Exercises with TODO markers
        └── kata.test.ts      # Test suite
```

## Testing Framework

- **Test Runner:** Vitest (Jest-compatible API)
- **Commands:**
  - `npm test` - Run all tests once
  - `npm run test:watch` - Watch mode (auto-rerun)
  - `npm run test:ui` - Visual test UI
  - `npm run type-check` - TypeScript compiler check only

## Creating New Lessons

When adding a new lesson (e.g., Lesson 2), follow this pattern:

### 1. Create Directory Structure
```bash
mkdir -p lessons/lesson-02-topic-name
```

### 2. Create README.md
Include:
- **Learning Objectives** - What concepts will be learned
- **Concepts for Python Developers** - Comparisons to Python
- **Key Differences** - TypeScript-specific behaviors
- **Instructions** - How to complete the lesson
- **Testing Your Work** - How to run tests
- **Tips** - Best practices and gotchas
- **Exercises Overview** - Brief description of each exercise

### 3. Create kata.ts
Structure:
- Header comment explaining the lesson
- Exercises grouped by concept (Exercise 1, 2, 3, etc.)
- Each exercise has:
  - A comment block explaining the concept
  - Clear TODO markers for where to write code
  - Example usage/expected behavior
  - Export statement immediately after TODO section (commented as example)

**Important conventions:**
- Use `// TODO: Write your code here` markers
- Number exercises clearly
- Include explanatory comments about TypeScript concepts
- Add examples in comments
- Keep exercises progressively more challenging
- **Export pattern:** Each exercise should have a commented export example immediately after the TODO, like:
  ```typescript
  // TODO: Write your code here
  // After completing this exercise, export your function like this:
  // export { functionName };
  ```
- This provides immediate feedback as learners complete each exercise, rather than having all exports at the bottom

### 4. Create kata.test.ts
Structure:
```typescript
import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson N: Topic Name', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  describe('Exercise 1: Concept Name', () => {
    it('should test specific behavior', () => {
      expect(kata.functionName(input)).toBe(expected);
    });
    
    // Multiple test cases
    it('should handle edge case', () => {
      // ...
    });
  });
  
  // More exercises...
});
```

### 5. Update Main README.md
Add the new lesson to the "Lessons" section and progress tracker.

## Lesson Topics Roadmap

Based on Python developer needs, suggested progression:

0. **Lesson 0: JavaScript Syntax Fundamentals** ✅ (Complete)
   - Variables (const/let/var), strings, arrays, objects, operators, ternary

1. **Lesson 1: JavaScript Functions & Operators** ✅ (Complete)
   - Functions, nullish coalescing, destructuring, loops, spread

2. **Lesson 2: TypeScript Basics** ✅ (Complete)
   - Basic types, functions, arrays, objects, tuples

3. **Lesson 3: Interfaces & Type Aliases** ✅ (Complete)
   - Interface definitions, type aliases, extending interfaces

4. **Lesson 4: Union & Intersection Types**
   - Union types, intersection types, type guards, discriminated unions

5. **Lesson 5: Classes & Access Modifiers**
   - Class syntax, public/private/protected, constructors, inheritance

6. **Lesson 6: Enums & Literal Types**
   - Enum types, const enums, string/numeric literals, template literals

7. **Lesson 7: Array Methods with Types**
   - map, filter, reduce, find with proper typing

8. **Lesson 8: Generics Basics**
   - Generic functions, generic interfaces, type constraints

9. **Lesson 9: Advanced Generics**
   - Conditional types, mapped types, utility types

10. **Lesson 10: Async/Await & Promises**
    - Promise types, async functions, error handling

11. **Lesson 11: Working with Node.js APIs**
    - File system, path operations, typed Node modules

## Design Principles

### For Learners
- **Incremental complexity** - Start simple, build up
- **Sequential progression** - Each lesson assumes completion of prior lessons
- **No concept out-of-order** - Don't use concepts before they're taught
- **Clear instructions** - No ambiguity about what to implement
- **Immediate feedback** - Tests show progress instantly
- **Python comparisons** - Help translate existing knowledge
- **Practical examples** - Real-world use cases

### For Code Quality
- **Type safety** - All exercises should demonstrate proper typing
- **No `any` abuse** - Teach proper typing, not shortcuts
- **Strict mode** - tsconfig.json enforces strict TypeScript
- **Best practices** - Model good TypeScript patterns

## TypeScript Configuration Notes

**tsconfig.json settings:**
- `strict: true` - All strict checks enabled
- `noUnusedLocals: true` - Catch unused variables
- `noUnusedParameters: true` - Catch unused parameters
- `target: ES2022` - Modern JavaScript features
- `lib: ["ES2022", "DOM"]` - Support for console, etc.

**Important:** The test files use dynamic imports to handle incomplete kata.ts files gracefully.

## Testing Guidelines

- **Test completeness** - Cover happy path, edge cases, type correctness
- **Clear test names** - Describe what's being tested
- **Good error messages** - Help learners understand failures
- **Grouped by exercise** - Use describe blocks for organization

## Common Tasks

### Adding a new lesson
1. Create lesson directory and files
2. Write README with objectives
3. Write kata.ts with TODO exercises
4. Write kata.test.ts with comprehensive tests
5. Update main README.md
6. Test that all tests run (and fail initially)
7. Commit changes

### Fixing a lesson
1. Read the lesson's README to understand objectives
2. Check kata.ts for the exercise structure
3. Review kata.test.ts to understand requirements
4. Make fixes
5. Run `npm test` to verify
6. Commit with descriptive message

### Verifying setup
```bash
npm run type-check  # TypeScript compilation
npm test            # All tests run
npm run test:watch  # Watch mode works
```

## Git Conventions

- **Meaningful commits** - Describe what and why
- **Lesson-based changes** - Group related changes together
- **Test changes** - Run tests before committing

## Notes for AI Agents

- Always check existing lessons for patterns before creating new ones
- Maintain consistency in style and structure across lessons
- Keep Python developer perspective in mind
- Test files should work even when kata.ts is incomplete (uses dynamic imports)
- Remember to update progress tracker in main README.md
- The user learns one lesson at a time - don't create all lessons at once
