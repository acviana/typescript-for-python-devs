# Lesson 1: TypeScript Basics

Welcome to your first TypeScript lesson! In this lesson, you'll learn the fundamental building blocks of TypeScript's type system.

## Learning Objectives

By the end of this lesson, you will understand:

1. **Basic Type Annotations** - How to explicitly declare types for variables
2. **Type Inference** - How TypeScript can automatically determine types
3. **Primitive Types** - Working with string, number, and boolean
4. **Array Types** - Declaring arrays with specific element types
5. **Function Signatures** - Adding types to parameters and return values
6. **Optional Parameters** - Making function parameters optional
7. **Object Types** - Defining the shape of objects

## Concepts for Python Developers

If you're coming from Python, here are some familiar concepts:

| Python | TypeScript | Example |
|--------|------------|---------|
| `def greet(name: str) -> str:` | `function greet(name: string): string` | Function with type hints |
| `numbers: list[int] = [1, 2, 3]` | `const numbers: number[] = [1, 2, 3]` | Typed arrays |
| `name: str = "Alice"` | `const name: string = "Alice"` | Type annotations |
| `def func(x: int = 0):` | `function func(x: number = 0)` | Default parameters |
| `def func(x: int \| None):` | `function func(x?: number)` | Optional parameters |

## Key Differences from Python

1. **Types are checked at compile-time** - TypeScript catches errors before your code runs
2. **More explicit about mutability** - Use `const` for immutable bindings, `let` for mutable
3. **No dynamic typing by default** - While possible with `any`, it's discouraged
4. **Structural typing** - Types are compatible if their structure matches (duck typing++)

## Instructions

1. Open `kata.ts` in this directory
2. Read through the exercises and comments
3. Fill in the code where you see `// TODO:`
4. Run `npm run test:watch` from the project root
5. Watch the tests pass as you complete each exercise!

## Testing Your Work

All tests should pass when you've completed the exercises. You can:

- **Run tests once**: `npm test`
- **Run in watch mode**: `npm run test:watch` (recommended)
- **Check types only**: `npm run type-check`

## Tips

- **Let TypeScript infer when possible** - You don't always need explicit annotations
- **Read the test file** - It shows you exactly what's expected
- **Use your editor** - Hover over variables to see their inferred types
- **Check the errors** - TypeScript errors tell you exactly what's wrong

## Exercises Overview

1. **Variable declarations** - Practice basic type annotations
2. **addNumbers** - Simple arithmetic with typed parameters
3. **greet** - String manipulation with type safety
4. **findMax** - Working with typed arrays
5. **greetWithDefault** - Using optional and default parameters
6. **createPerson** - Defining and using object types

Ready? Open `kata.ts` and let's get started!
