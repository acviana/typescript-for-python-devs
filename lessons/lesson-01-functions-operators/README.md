# Lesson 1: JavaScript Functions & Operators

Welcome to Lesson 1! Now that you understand basic JavaScript syntax, let's explore functions, modern operators, and advanced features that make JavaScript powerful and expressive.

## Learning Objectives

By the end of this lesson, you will understand:

1. **Function Declarations & Arrow Functions** - Multiple ways to define functions
2. **Nullish Coalescing & Optional Chaining** - Safe handling of null/undefined values
3. **Destructuring** - Extracting values from objects and arrays elegantly
4. **Loops** - Different iteration patterns for arrays and objects
5. **Spread Operator** - Copying and merging arrays and objects
6. **Combining Concepts** - Using multiple features together in real-world scenarios

## For Python Developers

### Function Syntax

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `def greet(name):` | `function greet(name) { }` |
| `def greet(name):` | `const greet = (name) => { }` |
| `lambda x: x * 2` | `(x) => x * 2` |

**Key differences:**
- JavaScript has multiple function syntaxes (function declaration, arrow function)
- Arrow functions have implicit returns for single expressions: `x => x * 2`
- No `def` keyword; use `function` or arrow syntax

### Nullish Coalescing & Optional Chaining

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `name or "default"` | `name || "default"` (treats `""`, `0` as missing) |
| No equivalent | `name ?? "default"` (only `null`/`undefined`) |
| Try/except for None | `user?.address?.city` (safe navigation) |

**Key difference:** JavaScript's `?.` operator is cleaner than Python's try/except for optional access.

### Destructuring

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `a, b = (1, 2)` | `const [a, b] = [1, 2];` |
| `a, *rest = [1, 2, 3]` | `const [a, ...rest] = [1, 2, 3];` |
| `name = user["name"]` | `const { name } = user;` |
| `**kwargs` | `const { ...rest } = obj;` |

**Key difference:** JavaScript has cleaner syntax for object destructuring than Python dicts.

### Loops

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `for i in range(n):` | `for (let i = 0; i < n; i++)` |
| `for item in list:` | `for (const item of arr)` |
| `for key in dict:` | `for (const key in obj)` |
| `list.map(fn)` | `arr.forEach(fn)` |

**Key difference:** JavaScript `for...in` iterates over keys (avoid for arrays). Use `for...of` for array values.

### Spread Operator

| Python | JavaScript/TypeScript |
|--------|----------------------|
| `[*list1, *list2]` | `[...arr1, ...arr2]` |
| `{**dict1, **dict2}` | `{...obj1, ...obj2}` |
| `func(*args)` | `func(...args)` |

**Key difference:** Very similar! JavaScript uses `...` for both arrays and objects.

## Key Concepts

### 1. Arrow Functions vs Regular Functions

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function (explicit return)
const add = (a, b) => {
  return a + b;
};

// Arrow function (implicit return)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const double = x => x * 2;
```

**When to use arrow functions:**
- Callbacks and inline functions
- When you want concise syntax
- Most modern JavaScript prefers arrow functions

**When to use regular functions:**
- When you need `this` binding (we'll skip this for now)
- Top-level named functions for clarity

### 2. Nullish Coalescing (`??`) vs OR (`||`)

```javascript
// || treats falsy values (0, "", false) as missing
const count = 0;
const result1 = count || 10;  // 10 (0 is falsy)

// ?? only treats null/undefined as missing
const result2 = count ?? 10;  // 0 (0 is not null/undefined)

// Use ?? when 0, "", false are valid values!
```

### 3. Optional Chaining (`?.`)

```javascript
// Without optional chaining (error-prone)
const city = user && user.address && user.address.city;

// With optional chaining (clean)
const city = user?.address?.city;

// Works with methods too
const result = obj.method?.();
```

### 4. Destructuring Power

```javascript
// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first: 1, second: 2, rest: [3, 4, 5]

// Object destructuring
const { name, age } = user;

// Renaming
const { name: userName } = user;

// Default values
const { city = "Unknown" } = user;
```

### 5. For...of vs For...in

```javascript
const arr = ["a", "b", "c"];

// for...of: Iterates over VALUES (use for arrays)
for (const value of arr) {
  console.log(value);  // "a", "b", "c"
}

// for...in: Iterates over KEYS (avoid for arrays, use for objects)
for (const index in arr) {
  console.log(index);  // "0", "1", "2" (strings!)
}

// Best for objects
const obj = { x: 1, y: 2 };
for (const key in obj) {
  console.log(key, obj[key]);  // "x" 1, "y" 2
}
```

### 6. Spread Operator Magic

```javascript
// Copy array (shallow)
const copy = [...original];

// Merge arrays
const combined = [...arr1, ...arr2];

// Copy object (shallow)
const copy = { ...original };

// Merge objects (later properties win)
const merged = { ...obj1, ...obj2 };

// Function arguments
Math.max(...[1, 5, 3]);  // Same as Math.max(1, 5, 3)
```

## Instructions

1. Open `kata.ts` in this directory
2. Read through each exercise and its comments
3. Fill in the code where you see `// TODO:`
4. Run `npm run test:watch` from the project root
5. Watch the tests pass as you complete each exercise!

This lesson assumes you've completed **Lesson 0: JavaScript Syntax Fundamentals**.

## Testing Your Work

All tests should pass when you've completed the exercises. You can:

- **Run tests once**: `npm test`
- **Run in watch mode**: `npm run test:watch` (recommended)
- **Check types only**: `npm run type-check`

## Tips

1. **Prefer arrow functions** - For callbacks and short functions
2. **Use `??` not `||`** - When 0, "", false are valid values
3. **Use `?.` liberally** - Prevents runtime errors from null/undefined
4. **Destructure when extracting multiple values** - More readable than multiple assignments
5. **Use `for...of` for arrays** - Not `for...in` (that's for objects)
6. **Spread for shallow copies** - Remember: shallow only! Nested objects share references
7. **Keep it readable** - Don't over-nest destructuring or ternaries

## Exercises Overview

1. **Function Declarations & Arrow Functions** - Practice different function syntaxes
2. **Nullish Coalescing & Optional Chaining** - Handle optional values safely
3. **Destructuring** - Extract values from objects and arrays
4. **Loops** - Use for, for...of, for...in, and forEach appropriately
5. **Spread Operator** - Copy and merge data structures
6. **Comprehensive Exercise** - Combine multiple concepts in a real-world scenario

Good luck! These features will make your JavaScript code more concise and expressive.

## What's Next?

After completing this lesson, you'll move on to:
- **Lesson 2: TypeScript Basics** - Adding types to your JavaScript code
- **Lesson 3: Interfaces & Type Aliases** - Creating custom types for complex data
