# Lesson 8: Generics Basics

## Learning Objectives

By the end of this lesson you will be able to:

- Write generic functions that work with any type
- Define generic type aliases and interfaces
- Implement generic classes
- Use type constraints (`extends`) to restrict what types are allowed
- Work with multiple type parameters (`<T, U>`)
- Recognise common generic utility patterns

## Concepts for Python Developers

| Python | TypeScript |
|---|---|
| `T = TypeVar("T")` | `<T>` in a function or type definition |
| `Callable[[T], bool]` | `(item: T) => boolean` |
| `class Box(Generic[T])` | `class Box<T>` |
| `TypeVar("T", bound=Sized)` | `<T extends { length: number }>` |
| `T = TypeVar("T", bound=HasId)` | `<T extends { id: number }>` |
| `tuple[T, U]` | `[T, U]` |

## Key Differences from Python

- **Inference is the norm** — TypeScript infers `T` from what you pass in; you rarely write `func<number>(x)` explicitly
- **`extends` means "is assignable to"** — `<T extends { length: number }>` means T must have at least a `length: number` property, not that it literally extends a class
- **`keyof T`** — a special operator that produces a union of all keys of T as string literals; used with constraints to safely access object properties
- **No runtime cost** — generics are erased at compile time, they exist only to help TypeScript check your types

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

- Let TypeScript infer `T` — if you write `identity(42)` TypeScript knows `T` is `number`; you only need to write `identity<number>(42)` when inference fails
- `<T extends { length: number }>` does not mean T must be a string or array specifically — it means T must have a `length` property that is a number (could be any object with that shape)
- `keyof T` produces a union of the keys of T as string literals: if `T = { name: string; age: number }` then `keyof T = "name" | "age"`
- Generic classes work exactly like generic functions — the `<T>` goes after the class name
- You have seen `<T>` before in Lesson 7 (Exercise 7) — this lesson explains it fully

## Exercises Overview

1. **Generic functions** — `identity<T>` and `wrap<T>`: the simplest introduction to type parameters
2. **Generic type aliases** — `Pair<T>` and `Maybe<T>`: parameterising type aliases
3. **Generic interfaces & classes** — `Box<T>` interface and `Stack<T>` class
4. **Type constraints** — `longest<T>` and `getProperty<T, K>`: restricting what types are allowed
5. **Multiple type parameters** — `zip<T, U>` and `mapObject<T, U>`
6. **Generic utility functions** — `first`, `last`, `compact`, `chunk`
7. **Capstone: Repository** — a generic in-memory store with type-safe CRUD operations
