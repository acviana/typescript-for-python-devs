/**
 * Lesson 7: Array Methods with Types
 *
 * In this lesson, you'll learn how to use TypeScript's typed array methods:
 * map, filter, find, findIndex, and reduce.
 *
 * Prerequisites: Complete Lessons 0–6 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: map
// =============================================================================
// map transforms every element of an array, returning a new array of the
// same length. TypeScript infers the return type from the callback.
//
// Syntax:
//   const doubled = [1, 2, 3].map(n => n * 2);        // number[]
//   const strings = [1, 2, 3].map(n => String(n));     // string[]
//
// Python comparison:
//   doubled = [n * 2 for n in [1, 2, 3]]
//   strings = [str(n) for n in [1, 2, 3]]
//
// TODO: Write a function called 'double' that:
// - Takes a parameter 'nums' of type number[]
// - Returns a new array with every number doubled
// - Has an explicit return type of number[]

const double = (nums: number[]): number[] => nums.map((n) => 2 * n);

// TODO: Write a function called 'toStrings' that:
// - Takes a parameter 'nums' of type number[]
// - Returns a new array where every number is converted to a string
// - Has an explicit return type of string[]

const toStrings = (nums: number[]): string[] => nums.map((n) => String(n));

// TODO: Write a function called 'pluckNames' that:
// - Takes a parameter 'people' of type Array<{ name: string; age: number }>
// - Returns an array of just the name strings
// - Has an explicit return type of string[]

const pluckNames = (people: Array<{ name: string; age: number }>): string[] =>
  people.map((p) => p.name);

// Example:
//   double([1, 2, 3])         → [2, 4, 6]
//   toStrings([1, 2, 3])      → ["1", "2", "3"]
//   pluckNames([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }])
//     → ["Alice", "Bob"]

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { double, toStrings, pluckNames };

// =============================================================================
// Exercise 2: filter
// =============================================================================
// filter returns a new array containing only the elements for which the
// callback returns true. The result array is the same type as the input.
//
// Syntax:
//   const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);  // number[]
//
// Python comparison:
//   evens = [n for n in [1, 2, 3, 4] if n % 2 == 0]
//   # or: list(filter(lambda n: n % 2 == 0, [1, 2, 3, 4]))
//
// TODO: Write a function called 'evens' that:
// - Takes a parameter 'nums' of type number[]
// - Returns only the even numbers
// - Has an explicit return type of number[]

const evens = (nums: number[]): number[] => nums.filter((n) => n % 2 === 0);

// TODO: Write a function called 'longStrings' that:
// - Takes parameters 'words' of type string[] and 'minLength' of type number
// - Returns only strings with length >= minLength
// - Has an explicit return type of string[]

const longStrings = (words: string[], minLength: number): string[] =>
  words.filter((s) => s.length >= minLength);

// TODO: Write a function called 'activeUsers' that:
// - Takes a parameter 'users' of type Array<{ name: string; active: boolean }>
// - Returns only users where active is true
// - Has an explicit return type of Array<{ name: string; active: boolean }>

const activeUsers = (
  users: Array<{ name: string; active: boolean }>,
): Array<{ name: string; active: boolean }> =>
  users.filter((u) => u.active === true);

// Example:
//   evens([1, 2, 3, 4, 5, 6])          → [2, 4, 6]
//   longStrings(["hi", "hello", "hey"], 4) → ["hello"]
//   activeUsers([{ name: "Alice", active: true }, { name: "Bob", active: false }])
//     → [{ name: "Alice", active: true }]

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { evens, longStrings, activeUsers };

// =============================================================================
// Exercise 3: find & findIndex
// =============================================================================
// find returns the FIRST element matching a predicate, or undefined if none
// match. findIndex returns the index of the first match, or -1 if not found.
//
// Syntax:
//   const found = [1, 2, 3].find(n => n > 1);       // number | undefined
//   const idx   = [1, 2, 3].findIndex(n => n > 1);  // number
//
// Python comparison:
//   found = next((n for n in [1, 2, 3] if n > 1), None)
//   idx   = next((i for i, n in enumerate([1, 2, 3]) if n > 1), -1)
//
// Key difference: find always returns T | undefined — you must handle the
// undefined case before using the result.
//
// TODO: Write a function called 'findFirst' that:
// - Takes a parameter 'nums' of type number[] and 'target' of type number
// - Returns the first number greater than target, or undefined if none
// - Has an explicit return type of number | undefined
//
// TODO: Write a function called 'findUserByName' that:
// - Takes 'users' of type Array<{ id: number; name: string }> and 'name' of type string
// - Returns the matching user object, or undefined if not found
// - Has an explicit return type of { id: number; name: string } | undefined
//
// TODO: Write a function called 'indexOfFirst' that:
// - Takes a parameter 'nums' of type number[] and 'target' of type number
// - Returns the index of the first number greater than target, or -1 if none
// - Has an explicit return type of number
//
// Example:
//   findFirst([1, 2, 3, 4], 2)    → 3
//   findFirst([1, 2, 3, 4], 10)   → undefined
//   findUserByName([{ id: 1, name: "Alice" }], "Alice") → { id: 1, name: "Alice" }
//   findUserByName([{ id: 1, name: "Alice" }], "Bob")   → undefined
//   indexOfFirst([1, 2, 3, 4], 2) → 2
//   indexOfFirst([1, 2, 3, 4], 10) → -1

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { findFirst, findUserByName, indexOfFirst };

// =============================================================================
// Exercise 4: reduce to a number
// =============================================================================
// reduce accumulates all array elements into a single value by repeatedly
// applying a callback. The second argument to reduce is the initial value.
//
// Syntax:
//   const sum = [1, 2, 3].reduce((acc, n) => acc + n, 0);  // 6
//
// Python comparison:
//   from functools import reduce
//   sum_val = reduce(lambda acc, n: acc + n, [1, 2, 3], 0)
//   # or just: sum([1, 2, 3])
//
// TODO: Write a function called 'sum' that:
// - Takes a parameter 'nums' of type number[]
// - Returns the sum of all numbers using reduce
// - Has an explicit return type of number
// - Should return 0 for an empty array
//
// TODO: Write a function called 'product' that:
// - Takes a parameter 'nums' of type number[]
// - Returns the product of all numbers using reduce
// - Has an explicit return type of number
// - Should return 1 for an empty array
//
// TODO: Write a function called 'max' that:
// - Takes a parameter 'nums' of type number[] (assume non-empty)
// - Returns the largest number using reduce
// - Has an explicit return type of number
//
// Example:
//   sum([1, 2, 3, 4])      → 10
//   sum([])                → 0
//   product([1, 2, 3, 4])  → 24
//   product([])            → 1
//   max([3, 1, 4, 1, 5])   → 5

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { sum, product, max };

// =============================================================================
// Exercise 5: reduce to an object
// =============================================================================
// reduce can also accumulate into an object. When the accumulator is an
// object type, you often need to annotate the initial value explicitly.
//
// Syntax:
//   const counts = ["a", "b", "a"].reduce<Record<string, number>>(
//     (acc, key) => {
//       acc[key] = (acc[key] ?? 0) + 1;
//       return acc;
//     },
//     {}
//   );
//   // { a: 2, b: 1 }
//
// Python comparison:
//   from collections import Counter
//   counts = Counter(["a", "b", "a"])  # {"a": 2, "b": 1}
//
// TODO: Write a function called 'countOccurrences' that:
// - Takes a parameter 'words' of type string[]
// - Returns a Record<string, number> where each key is a word and the
//   value is the number of times it appears
// - Uses reduce with an explicit accumulator type
//
// TODO: Write a function called 'groupByFirstLetter' that:
// - Takes a parameter 'words' of type string[]
// - Returns a Record<string, string[]> where each key is a first letter
//   and the value is an array of words starting with that letter
// - Uses reduce with an explicit accumulator type
//
// Example:
//   countOccurrences(["apple", "banana", "apple", "cherry", "banana", "apple"])
//     → { apple: 3, banana: 2, cherry: 1 }
//   groupByFirstLetter(["apple", "banana", "avocado", "blueberry", "cherry"])
//     → { a: ["apple", "avocado"], b: ["banana", "blueberry"], c: ["cherry"] }

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { countOccurrences, groupByFirstLetter };

// =============================================================================
// Exercise 6: Chaining methods
// =============================================================================
// Array methods can be chained together. Each method returns a new array
// (except reduce, which returns the accumulated value), so you can call
// the next method directly on the result.
//
// Syntax:
//   const result = [1, 2, 3, 4, 5]
//     .filter(n => n % 2 === 0)   // [2, 4]
//     .map(n => n * 10);          // [20, 40]
//
// Python comparison:
//   result = [n * 10 for n in [1, 2, 3, 4, 5] if n % 2 == 0]
//
// TODO: Write a function called 'sumOfDoubledEvens' that:
// - Takes a parameter 'nums' of type number[]
// - Filters to only even numbers, doubles each one, then sums them
// - Uses filter + map + reduce chained together
// - Has an explicit return type of number
//
// TODO: Write a function called 'namesOfAdults' that:
// - Takes a parameter 'people' of type Array<{ name: string; age: number }>
// - Filters to people aged 18 or over, then returns their names uppercased
// - Uses filter + map chained together
// - Has an explicit return type of string[]
//
// Example:
//   sumOfDoubledEvens([1, 2, 3, 4, 5])   → 12  (2*2 + 4*2 = 4 + 8)
//   sumOfDoubledEvens([1, 3, 5])          → 0
//   namesOfAdults([
//     { name: "alice", age: 17 },
//     { name: "bob", age: 25 },
//     { name: "carol", age: 18 },
//   ]) → ["BOB", "CAROL"]

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { sumOfDoubledEvens, namesOfAdults };

// =============================================================================
// Exercise 7: Typed callbacks
// =============================================================================
// Array methods accept callbacks. You can define the callback type explicitly
// to make reusable, well-typed helper functions.
//
// Syntax:
//   type Predicate<T> = (item: T) => boolean;
//   type Transform<T, U> = (item: T) => U;
//
//   function filterWith<T>(arr: T[], pred: Predicate<T>): T[] {
//     return arr.filter(pred);
//   }
//
// Python comparison:
//   from typing import Callable, TypeVar
//   T = TypeVar("T")
//   def filter_with(arr: list[T], pred: Callable[[T], bool]) -> list[T]:
//       return list(filter(pred, arr))
//
// TODO: Create a type alias called 'Predicate<T>' for: (item: T) => boolean
//
// TODO: Create a type alias called 'Transform<T, U>' for: (item: T) => U
//
// TODO: Write a function called 'filterWith' that:
// - Is generic over T
// - Takes 'arr' of type T[] and 'pred' of type Predicate<T>
// - Returns T[] (filtered using the predicate)
//
// TODO: Write a function called 'mapWith' that:
// - Is generic over T and U
// - Takes 'arr' of type T[] and 'transform' of type Transform<T, U>
// - Returns U[] (mapped using the transform)
//
// TODO: Write a function called 'pipeline' that:
// - Is generic over T and U
// - Takes 'arr' of type T[], 'pred' of type Predicate<T>, and
//   'transform' of type Transform<T, U>
// - Returns U[] — filters first, then maps
//
// Example:
//   filterWith([1, 2, 3, 4], n => n > 2)          → [3, 4]
//   mapWith([1, 2, 3], n => n.toString())           → ["1", "2", "3"]
//   pipeline([1, 2, 3, 4], n => n % 2 === 0, n => n * 10) → [20, 40]

// TODO: Write your code here
// After completing this exercise, export your types and functions like this:
// export type { Predicate, Transform };
// export { filterWith, mapWith, pipeline };

// =============================================================================
// Exercise 8: Capstone — Product Catalogue
// =============================================================================
// Bring it all together with a typed dataset representing a product catalogue.
//
// TODO: Define an interface called 'Product' with:
// - id: number
// - name: string
// - category: "electronics" | "clothing" | "food"
// - price: number
// - inStock: boolean
//
// TODO: Write a function called 'getInStock' that:
// - Takes 'products' of type Product[]
// - Returns only products where inStock is true
// - Has an explicit return type of Product[]
//
// TODO: Write a function called 'getByCategory' that:
// - Takes 'products' of type Product[] and 'category' of type Product["category"]
// - Returns only products in that category
// - Has an explicit return type of Product[]
//
// TODO: Write a function called 'toDisplayStrings' that:
// - Takes 'products' of type Product[]
// - Returns an array of strings in the format: "{name} — ${price}"
//   e.g. "Laptop — $999"
// - Has an explicit return type of string[]
//
// TODO: Write a function called 'totalPrice' that:
// - Takes 'products' of type Product[]
// - Returns the sum of all product prices
// - Has an explicit return type of number
//
// TODO: Write a function called 'catalogueSummary' that:
// - Takes 'products' of type Product[]
// - Returns an object with shape: { total: number; inStock: number; outOfStock: number }
//   where total is the count of all products, inStock is the count of in-stock
//   products, and outOfStock is the count of out-of-stock products
// - Uses reduce with an explicit accumulator type
//
// Example (given a sample catalogue):
//   getInStock(catalogue)           → products where inStock === true
//   getByCategory(catalogue, "electronics") → electronics products
//   toDisplayStrings([{ name: "Laptop", price: 999, ... }]) → ["Laptop — $999"]
//   totalPrice([{ price: 10 }, { price: 20 }])  → 30
//   catalogueSummary(catalogue) → { total: 5, inStock: 3, outOfStock: 2 }

// TODO: Write your code here
// After completing this exercise, export your interface and functions like this:
// export type { Product };
// export { getInStock, getByCategory, toDisplayStrings, totalPrice, catalogueSummary };

// This empty export makes the file a module for TypeScript
export {};
