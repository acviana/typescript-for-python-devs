# Lesson 7: Array Methods with Types

## Learning Objectives

By the end of this lesson you will be able to:

- Use `map`, `filter`, `find`, `findIndex`, and `reduce` with explicit TypeScript types
- Understand when TypeScript infers array method types vs when you need to annotate
- Handle `T | undefined` return types from `find`
- Use `reduce` with a typed accumulator
- Chain array methods while preserving type safety

## Concepts for Python Developers

| Python | TypeScript |
|---|---|
| `[f(x) for x in xs]` | `xs.map(x => f(x))` |
| `[x for x in xs if p(x)]` | `xs.filter(x => p(x))` |
| `next((x for x in xs if p(x)), None)` | `xs.find(x => p(x))` |
| `functools.reduce(f, xs, init)` | `xs.reduce((acc, x) => f(acc, x), init)` |
| `xs.index(x)` (raises if missing) | `xs.findIndex(x => ...)` (returns -1 if missing) |

## Key Differences from Python

- **`map` and `filter` return arrays**, not lazy iterators — no need to wrap in `list()`
- **`find` returns `T | undefined`**, not raising an exception when nothing is found — you must handle the `undefined` case
- **`findIndex` returns `-1`** when not found, not raising `ValueError`
- **`reduce` needs a typed accumulator** — TypeScript infers the type from the initial value, but complex accumulators (e.g. objects) often need an explicit type annotation
- **Method chaining** is idiomatic: `arr.filter(...).map(...).reduce(...)` in one expression

## Instructions

1. Open `kata.ts`
2. Read the instructions for each exercise
3. Write your solution where indicated by `// TODO`
4. Uncomment the export line when you're done with each exercise
5. Run `npm run test:watch` to see your progress

## Testing Your Work

```bash
# Run all tests once
npm test

# Watch mode — reruns on save
npm run test:watch

# Type check only
npm run type-check
```

## Tips

- TypeScript usually infers array method types correctly — don't over-annotate
- When `reduce` builds an object, you often need to annotate the initial value: `reduce((acc, x) => ..., {} as MyType)`
- `find` always returns `T | undefined` — use optional chaining or a nullish check before using the result
- Prefer arrow functions for callbacks: `arr.map(x => x * 2)` over `arr.map(function(x) { return x * 2; })`
- The callback to `filter` can be a **type predicate** (`x is T`) to narrow the type inside the filtered array

## Exercises Overview

1. **map basics** — transform arrays of numbers and objects
2. **filter basics** — filter arrays by predicate with correct types
3. **find & findIndex** — locate elements and handle `undefined`
4. **reduce to a number** — sum, product, and min/max
5. **reduce to an object** — group and count with a typed accumulator
6. **chaining methods** — combine filter + map + reduce
7. **typed callbacks** — pass typed functions as parameters
8. **Capstone: product catalogue** — filter, map, and reduce a typed dataset
