# Lesson 0: JavaScript Syntax Fundamentals

Welcome to your first lesson! Before diving into TypeScript's type system, you need to understand the core JavaScript syntax that TypeScript is built upon.

## Learning Objectives

By the end of this lesson, you will understand:

1. **Variable Declarations** - The difference between `const`, `let`, and `var`
2. **String Templates** - Modern string formatting and concatenation
3. **Array Basics** - Indexing and essential array methods
4. **Object Access** - Working with object properties
5. **Equality Operators** - Understanding `==` vs `===`
6. **Logical Operators** - Boolean logic with `&&`, `||`, and `!`
7. **Ternary Operator** - Concise conditional expressions

## For Python Developers

If you're coming from Python, here are the key syntax differences:

### Variable Declarations

| Python | JavaScript/TypeScript | Notes |
|--------|----------------------|-------|
| `x = 10` | `let x = 10;` | Mutable binding |
| `x = 10` | `const x = 10;` | Immutable binding (recommended) |
| N/A | `var x = 10;` | Old style, avoid |

**Key difference:** Python has one way to declare variables (all mutable). JavaScript has three, and you should prefer `const` for immutability.

### String Formatting

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `f"Hello, {name}!"` | `` `Hello, ${name}!` `` |
| `"Hello, " + name` | `"Hello, " + name` |
| `"""multi\nline"""` | `` `multi\nline` `` |

**Key difference:** JavaScript uses backticks (`` ` ``) for template literals, similar to Python's f-strings.

### Arrays (Python Lists)

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `arr.append(x)` | `arr.push(x)` |
| `arr.pop()` | `arr.pop()` |
| `len(arr)` | `arr.length` |
| `arr[start:end]` | `arr.slice(start, end)` |
| `arr[0]` | `arr[0]` |
| `arr[-1]` | `arr[arr.length - 1]` |

**Key difference:** No negative indexing in JavaScript! Use `arr[arr.length - 1]` instead of `arr[-1]`.

### Objects (Python Dicts)

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `user["name"]` | `user["name"]` or `user.name` |
| `user[key]` | `user[key]` |
| `user.get("name", "default")` | `user.name ?? "default"` |

**Key difference:** JavaScript objects support both bracket and dot notation. Dot notation is preferred when the key is known.

### Operators

| Python | JavaScript/TypeScript | Notes |
|--------|----------------------|-------|
| `==` | `===` | Strict equality (no type coercion) |
| N/A | `==` | Loose equality (avoid - does type coercion) |
| `and` | `&&` | Logical AND |
| `or` | `||` | Logical OR |
| `not` | `!` | Logical NOT |
| `x if cond else y` | `cond ? x : y` | Ternary operator |

**Key difference:** Python's `==` behaves like JavaScript's `===`. JavaScript's `==` does type coercion and should be avoided.

## Key Syntax Differences

1. **Semicolons** - Optional but recommended in JavaScript/TypeScript
2. **Immutability** - Use `const` by default, `let` only when you need to reassign
3. **Template Literals** - Use backticks for string interpolation
4. **No Negative Indexing** - Arrays don't support `arr[-1]` syntax
5. **Strict Equality** - Always use `===` instead of `==`
6. **Property Access** - Objects support both `obj.prop` and `obj['prop']`

## Instructions

1. Open `kata.ts` in this directory
2. Read through each exercise and its comments
3. Fill in the code where you see `// TODO:`
4. Run `npm run test:watch` from the project root
5. Watch the tests pass as you complete each exercise!

## Testing Your Work

All tests should pass when you've completed the exercises. You can:

- **Run tests once**: `npm test`
- **Run in watch mode**: `npm run test:watch` (recommended)
- **Check types only**: `npm run type-check`

The watch mode will automatically re-run tests when you save your changes, and will stop on the first failure (thanks to `bail: 1` in the config).

## Tips

1. **Use `const` by default** - Only use `let` if you need to reassign the variable
2. **Never use `var`** - It has confusing scoping rules (function scope vs block scope)
3. **Prefer template literals** - `` `Hello ${name}` `` is more readable than `"Hello " + name`
4. **Always use `===`** - Avoid `==` to prevent unexpected type coercion
5. **No negative array indexing** - Use `arr[arr.length - 1]` for the last element
6. **Semicolons are optional** - But use them consistently (this tutorial does)
7. **Ternary for simple conditions** - Keep it readable; use `if/else` for complex logic

## Exercises Overview

1. **Variable Declarations** - Practice with `const`, `let`, and understand why `var` is avoided
2. **String Templates** - Create formatted strings using template literals
3. **Array Basics** - Access elements and use `push`, `pop`, `length`, and `slice`
4. **Object Access** - Work with dot notation, bracket notation, and computed properties
5. **Equality Operators** - See the difference between `==` and `===` in action
6. **Logical Operators** - Combine conditions with `&&`, `||`, and `!`
7. **Ternary Operator** - Write concise conditional expressions

Good luck! Remember, you can always check the tests to see exactly what's expected.

## What's Next?

After completing this lesson, you'll move on to:
- **Lesson 1: JavaScript Functions & Operators** - Functions, destructuring, loops, and more
- **Lesson 2: TypeScript Basics** - Adding types to your JavaScript code
- **Lesson 3: Interfaces & Type Aliases** - Creating custom types
