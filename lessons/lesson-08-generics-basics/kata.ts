/**
 * Lesson 8: Generics Basics
 *
 * In this lesson, you'll learn how to write generic functions, type aliases,
 * interfaces, and classes — code that works correctly with any type while
 * remaining fully type-safe.
 *
 * Prerequisites: Complete Lessons 0–7 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Generic functions
// =============================================================================
// A generic function declares a *type parameter* — a placeholder filled in by
// TypeScript when the function is called. The <T> goes right after the function
// name (or after the const/arrow = for arrow functions).
//
// Syntax:
//   function identity<T>(value: T): T {
//     return value;
//   }
//
//   identity(42)        // T inferred as number → returns number
//   identity("hello")   // T inferred as string → returns string
//   identity([1, 2, 3]) // T inferred as number[] → returns number[]
//
// You almost never need to write the type argument explicitly — TypeScript
// infers T from whatever you pass in.
//
// Python comparison:
//   T = TypeVar("T")
//   def identity(value: T) -> T:
//       return value
//
// TODO: Write a function called 'identity' that:
// - Is generic over T
// - Takes 'value' of type T
// - Returns value unchanged, with return type T

function identity<T>(value: T): T {
  return value;
}

// TODO: Write a function called 'wrap' that:
// - Is generic over T
// - Takes 'value' of type T
// - Returns an array containing just that value, with return type T[]
//
// Example:
//   identity(42)         → 42
//   identity("hello")    → "hello"
//   wrap(42)             → [42]
//   wrap("hello")        → ["hello"]

function wrap<T>(value: T): T[] {
  return [value];
}

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { identity, wrap };

// =============================================================================
// Exercise 2: Generic type aliases
// =============================================================================
// Type aliases can also be generic. The <T> goes right after the type name.
//
// Syntax:
//   type Pair<T> = { first: T; second: T };
//
//   const nums: Pair<number> = { first: 1, second: 2 };
//   const strs: Pair<string> = { first: "a", second: "b" };
//
// 'Maybe<T>' is a common pattern meaning "a value that might not exist":
//   type Maybe<T> = T | null | undefined;
//
// Python comparison:
//   T = TypeVar("T")
//   Pair = tuple[T, T]          # roughly
//   Maybe = T | None            # roughly (Optional[T])
//
// TODO: Create a type alias called 'Pair<T>' for: { first: T; second: T }

type Pair<T> = {
  first: T;
  second: T;
};

// TODO: Create a type alias called 'Maybe<T>' for: T | null | undefined

type Maybe<T> = T | null | undefined;

// TODO: Write a function called 'makePair' that:
// - Is generic over T
// - Takes 'first' and 'second', both of type T
// - Returns a Pair<T>

function makePair<T>(first: T, second: T): Pair<T> {
  return { first, second };
}

// TODO: Write a function called 'getOrDefault' that:
// - Is generic over T
// - Takes 'value' of type Maybe<T> and 'defaultValue' of type T
// - Returns value if it is not null or undefined, otherwise returns defaultValue

function getOrDefault<T>(value: Maybe<T>, defaultValue: T): T {
  return value ?? defaultValue;
}

// Example:
//   makePair(1, 2)                    → { first: 1, second: 2 }
//   makePair("a", "b")                → { first: "a", second: "b" }
//   getOrDefault(42, 0)               → 42
//   getOrDefault(null, 0)             → 0
//   getOrDefault(undefined, "guest")  → "guest"

// TODO: Write your code here
// After completing this exercise, export your types and functions like this:
export type { Pair, Maybe };
export { makePair, getOrDefault };

// =============================================================================
// Exercise 3: Generic interfaces & classes
// =============================================================================
// Interfaces and classes can be generic too. The <T> goes after the name,
// before the { body }.
//
// Syntax:
//   interface Container<T> {
//     value: T;
//     map<U>(fn: (value: T) => U): Container<U>;
//   }
//
//   class Box<T> implements Container<T> {
//     constructor(public value: T) {}
//     map<U>(fn: (value: T) => U): Box<U> {
//       return new Box(fn(this.value));
//     }
//   }
//
// Notice that 'map' itself has its own type parameter <U> — separate from T.
// T is the type already in the box, U is the type after transformation.
//
// Python comparison:
//   T = TypeVar("T")
//   U = TypeVar("U")
//   class Box(Generic[T]):
//       def __init__(self, value: T) -> None:
//           self.value = value
//       def map(self, fn: Callable[[T], U]) -> "Box[U]":
//           return Box(fn(self.value))
//
// TODO: Define an interface called 'Container<T>' with:
// - A property 'value' of type T
// - A method 'map<U>' that takes a function (value: T) => U and returns Container<U>

// TODO: Define a class called 'Box<T>' that implements Container<T> with:
// - A constructor that takes 'value' of type T as a public property (shorthand)
// - A 'map<U>' method that applies fn to value and returns a new Box<U>

// TODO: Define a class called 'Stack<T>' with:
// - A private 'items' array of type T[], initialised to []
// - A 'push' method that takes 'item' of type T and adds it (returns void)
// - A 'pop' method that removes and returns the top item (returns T | undefined)
// - A 'peek' method that returns the top item without removing it (returns T | undefined)
// - A 'size' getter that returns the number of items (returns number)
// - A 'isEmpty' getter that returns true if the stack has no items (returns boolean)
//
// Example:
//   const box = new Box(42);
//   box.value                        → 42
//   box.map(n => n * 2).value        → 84
//   box.map(n => String(n)).value    → "42"
//
//   const stack = new Stack<number>();
//   stack.isEmpty                    → true
//   stack.push(1); stack.push(2);
//   stack.size                       → 2
//   stack.peek()                     → 2
//   stack.pop()                      → 2
//   stack.size                       → 1

// TODO: Write your code here
// After completing this exercise, export your types and classes like this:
// export type { Container };
// export { Box, Stack };

// =============================================================================
// Exercise 4: Type constraints
// =============================================================================
// By default, T can be any type. Constraints let you restrict T to types that
// have certain properties, using 'extends'.
//
// Syntax:
//   function longest<T extends { length: number }>(a: T, b: T): T {
//     return a.length >= b.length ? a : b;
//   }
//
//   longest("cat", "elephant")   // works — strings have .length
//   longest([1, 2], [1, 2, 3])   // works — arrays have .length
//   longest(1, 2)                // ERROR — numbers have no .length
//
// A very common constraint is 'keyof T', which produces a union of the keys
// of T as string literals. Combined with extends, it ensures K is an actual
// key of T:
//
//   function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
//   }
//
//   getProperty({ name: "Alice", age: 30 }, "name")  // → "Alice" (string)
//   getProperty({ name: "Alice", age: 30 }, "age")   // → 30 (number)
//   getProperty({ name: "Alice", age: 30 }, "email") // ERROR — not a key
//
// T[K] means "the type of property K on T" — TypeScript tracks this precisely.
//
// Python comparison:
//   T = TypeVar("T", bound=Sized)  # roughly: extends { length: number }
//
// TODO: Write a function called 'longest' that:
// - Is generic over T, constrained to types with a 'length' property (number)
// - Takes 'a' and 'b' of type T
// - Returns whichever is longer (or 'a' if equal)

// TODO: Write a function called 'getProperty' that:
// - Is generic over T and K, where K extends keyof T
// - Takes 'obj' of type T and 'key' of type K
// - Returns the value at obj[key], with return type T[K]
//
// Example:
//   longest("cat", "elephant")          → "elephant"
//   longest([1, 2], [1, 2, 3])          → [1, 2, 3]
//   longest("same", "size")             → "same"
//   getProperty({ name: "Alice" }, "name")        → "Alice"
//   getProperty({ name: "Alice", age: 30 }, "age") → 30

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { longest, getProperty };

// =============================================================================
// Exercise 5: Multiple type parameters
// =============================================================================
// Functions can have more than one type parameter. Each gets its own name,
// separated by commas: <T, U>.
//
// Syntax:
//   function zip<T, U>(as: T[], bs: U[]): [T, U][] {
//     return as.map((a, i) => [a, bs[i]] as [T, U]);
//   }
//
//   zip([1, 2, 3], ["a", "b", "c"])
//   // → [[1, "a"], [2, "b"], [3, "c"]]
//
// Python comparison:
//   T = TypeVar("T"); U = TypeVar("U")
//   def zip_pairs(as_: list[T], bs: list[U]) -> list[tuple[T, U]]:
//       return list(zip(as_, bs))
//
// TODO: Write a function called 'zip' that:
// - Is generic over T and U
// - Takes 'as_' of type T[] and 'bs' of type U[]
// - Returns an array of [T, U] tuples, pairing elements by index
// - Stops at the length of the shorter array (use the shorter length)
// Note: avoid naming the parameter 'as' — it's a reserved word in JS.
//       Use 'as_' or 'arrA' instead.

// TODO: Write a function called 'mapObject' that:
// - Is generic over T and U
// - Takes 'obj' of type Record<string, T> and 'fn' of type (value: T) => U
// - Returns a new Record<string, U> with fn applied to each value
//
// Example:
//   zip([1, 2, 3], ["a", "b", "c"])        → [[1, "a"], [2, "b"], [3, "c"]]
//   zip([1, 2], ["a", "b", "c"])           → [[1, "a"], [2, "b"]]
//   mapObject({ a: 1, b: 2 }, n => n * 2)  → { a: 2, b: 4 }
//   mapObject({ x: "hi" }, s => s.length)  → { x: 2 }

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { zip, mapObject };

// =============================================================================
// Exercise 6: Generic utility functions
// =============================================================================
// Generic functions shine when writing utilities that work on any array type.
// These are the building blocks of real TypeScript utility libraries.
//
// 'compact' removes null and undefined from an array. The return type uses a
// built-in utility: NonNullable<T>, which strips null and undefined from T:
//
//   NonNullable<string | null | undefined>  →  string
//
// Syntax:
//   function compact<T>(arr: (T | null | undefined)[]): NonNullable<T>[] {
//     return arr.filter((x): x is NonNullable<T> => x != null);
//   }
//
// The '(x): x is NonNullable<T>' is a *type predicate* — it tells TypeScript
// that after this filter, the elements are definitely NonNullable<T>.
//
// TODO: Write a function called 'first' that:
// - Is generic over T
// - Takes 'arr' of type T[]
// - Returns the first element, or undefined if empty (return type: T | undefined)

// TODO: Write a function called 'last' that:
// - Is generic over T
// - Takes 'arr' of type T[]
// - Returns the last element, or undefined if empty (return type: T | undefined)

// TODO: Write a function called 'compact' that:
// - Is generic over T
// - Takes 'arr' of type (T | null | undefined)[]
// - Returns NonNullable<T>[] — all null and undefined values removed

// TODO: Write a function called 'chunk' that:
// - Is generic over T
// - Takes 'arr' of type T[] and 'size' of type number
// - Returns T[][] — the array split into chunks of the given size
// - The last chunk may be smaller if arr.length is not divisible by size
//
// Example:
//   first([1, 2, 3])                        → 1
//   first([])                               → undefined
//   last([1, 2, 3])                         → 3
//   last([])                                → undefined
//   compact([1, null, 2, undefined, 3])     → [1, 2, 3]
//   compact(["a", null, "b"])               → ["a", "b"]
//   chunk([1, 2, 3, 4, 5], 2)              → [[1, 2], [3, 4], [5]]
//   chunk(["a", "b", "c", "d"], 3)         → [["a", "b", "c"], ["d"]]

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { first, last, compact, chunk };

// =============================================================================
// Exercise 7: Capstone — Generic Repository
// =============================================================================
// A 'repository' is a common pattern in real codebases — a typed store for
// a collection of items that supports adding, finding, listing, and removing.
//
// The constraint 'T extends { id: number }' ensures every item has an id,
// which the repository uses to find and remove items.
//
// Syntax:
//   class Repository<T extends { id: number }> {
//     private items: T[] = [];
//     // ...
//   }
//
// Python comparison:
//   T = TypeVar("T", bound=HasId)  # HasId is a Protocol with id: int
//   class Repository(Generic[T]):
//       def __init__(self) -> None:
//           self._items: list[T] = []
//
// TODO: Define a class called 'Repository<T extends { id: number }>' with:
// - A private 'items' array of type T[], initialised to []
// - An 'add' method that takes 'item' of type T and adds it (returns void)
// - A 'findById' method that takes 'id' of type number and returns T | undefined
// - A 'getAll' method that returns a copy of all items as T[]
// - A 'remove' method that takes 'id' of type number, removes the matching
//   item, and returns true if an item was removed, false otherwise
// - A 'count' getter that returns the number of items (returns number)
//
// Example:
//   const repo = new Repository<{ id: number; name: string }>();
//   repo.count                          → 0
//   repo.add({ id: 1, name: "Alice" });
//   repo.add({ id: 2, name: "Bob" });
//   repo.count                          → 2
//   repo.findById(1)                    → { id: 1, name: "Alice" }
//   repo.findById(99)                   → undefined
//   repo.getAll()                       → [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
//   repo.remove(1)                      → true
//   repo.remove(99)                     → false
//   repo.count                          → 1

// TODO: Write your code here
// After completing this exercise, export your class like this:
// export { Repository };

// This empty export makes the file a module for TypeScript
export {};
