/**
 * Lesson 1: JavaScript Functions & Operators
 * 
 * This lesson covers advanced JavaScript features: functions, modern operators,
 * destructuring, loops, and the spread operator.
 * 
 * Prerequisites: Complete Lesson 0 first!
 * Run `npm run test:watch` to see your progress!
 */

import { person } from "../lesson-00-syntax-fundamentals/kata";

// =============================================================================
// Exercise 1: Function Declarations & Arrow Functions
// =============================================================================
// JavaScript has multiple ways to define functions:
//
// 1. Function declaration:
//    function add(a, b) { return a + b; }
//
// 2. Arrow function (explicit return):
//    const add = (a, b) => { return a + b; };
//
// 3. Arrow function (implicit return):
//    const add = (a, b) => a + b;
//
// 4. Single parameter (no parentheses needed):
//    const double = x => x * 2;
//
// Python comparison:
// Python: def add(a, b): return a + b
// JavaScript: const add = (a, b) => a + b;
// Python: lambda x: x * 2
// JavaScript: x => x * 2
//
// TODO: Implement the following functions:
// - Write a regular function 'addNumbers' that takes two parameters and returns their sum
// - Write an arrow function 'multiplyNumbers' that takes two parameters and returns their product
// - Write an arrow function 'square' with implicit return that takes one parameter and returns its square
// - Write an arrow function 'greetPerson' that takes a name and returns "Hello, {name}!"

function addNumbers(a: number, b: number): number {
  return a + b;
}

const multiplyNumbers = (a: number, b: number): number => { return a * b };

const square = (a: number): number => a ** 2;

const greetPerson = (name: string): string => `Hello, ${name}!`

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { addNumbers, multiplyNumbers, square, greetPerson };


// =============================================================================
// Exercise 2: Nullish Coalescing (??) & Optional Chaining (?.)
// =============================================================================
// JavaScript has two powerful operators for handling null/undefined:
//
// 1. Nullish coalescing (??): Returns right side ONLY if left is null/undefined
//    const result = value ?? "default";
//
// 2. Optional chaining (?.): Safely access nested properties
//    const city = user?.address?.city;
//
// Key difference from || operator:
// || treats falsy values (0, "", false) as missing
// ?? only treats null/undefined as missing
//
// Examples:
// 0 || 10        → 10  (0 is falsy)
// 0 ?? 10        → 0   (0 is not null/undefined)
// "" || "default" → "default"
// "" ?? "default" → ""
//
// Python comparison:
// Python: name or "default" (like ||, treats "" as missing)
// JavaScript ??: Only treats null/undefined as missing
// Python: try/except for None checks
// JavaScript ?.: Clean syntax for optional access
//
// TODO: Create the following functions:
// - Write 'getValueOrDefault' that takes a value and returns value ?? "default"
// - Write 'getUserCity' that takes a user object and safely returns user?.address?.city
//   (should return undefined if user or address is missing, not throw error)
// - Write 'getCountOrZero' that takes a count and returns count ?? 0
//   (This shows that 0 is a valid value, not "missing")

function getValueOrDefault(value: any): string {
  return value ?? "default";
}

function getUserCity(user: any): any {
  return user?.address?.city
}

function getCountOrZero(count: number): number {
  return count ?? 0
}

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { getValueOrDefault, getUserCity, getCountOrZero };


// =============================================================================
// Exercise 3: Destructuring Objects & Arrays
// =============================================================================
// Destructuring extracts values from objects and arrays into variables:
//
// Array destructuring:
// const [first, second] = [1, 2];
// const [first, ...rest] = [1, 2, 3, 4];  // rest = [2, 3, 4]
//
// Object destructuring:
// const { name, age } = user;
// const { name: userName } = user;        // Rename to userName
// const { city = "Unknown" } = user;      // Default value
// const { name, ...rest } = user;         // Rest properties
//
// Python comparison:
// Python: a, b = (1, 2)
// JavaScript: const [a, b] = [1, 2];
// Python: a, *rest = [1, 2, 3]
// JavaScript: const [a, ...rest] = [1, 2, 3];
// Python: name = user["name"]
// JavaScript: const { name } = user;
//
// TODO: Implement the following functions:
// - Write 'getFirstTwo' that takes an array and returns an object with 'first' and 'second'
//   properties by destructuring the first two elements
//   Example: getFirstTwo([1, 2, 3]) → { first: 1, second: 2 }

function getFirstTwo(input: Array<number>): { first: number, second: number } {
  const [first, second] = input
  return { first, second }
};

// - Write 'getPersonInfo' that takes a person object with { firstName, lastName, age }
//   and returns a string using destructuring: "{firstName} {lastName} is {age} years old"
type Person = {
  firstName: string;
  lastName: string;
  age: number;
}
function getPersonInfo({ firstName, lastName, age }: Person): string {
  return `${firstName} ${lastName} is ${age} years old`
}

// - Write 'splitArray' that takes an array and returns an object with 'head' (first element)
//   and 'tail' (rest of elements) using destructuring
//   Example: splitArray([1, 2, 3, 4]) → { head: 1, tail: [2, 3, 4] }

type SplitArrayReturn = {
  head: number;
  tail: number[];
}
function splitArray(input: number[]): SplitArrayReturn {
  const [head, ...tail] = input
  return { head, tail }
}

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { getFirstTwo, getPersonInfo, splitArray };


// =============================================================================
// Exercise 4: Loops (for, for...of, for...in, forEach)
// =============================================================================
// JavaScript has several loop constructs:
//
// 1. Traditional for loop:
//    for (let i = 0; i < arr.length; i++) { }
//
// 2. for...of (for array VALUES):
//    for (const item of arr) { }
//
// 3. for...in (for object KEYS):
//    for (const key in obj) { }
//    WARNING: Avoid for...in with arrays! It iterates over indices as strings.
//
// 4. forEach method:
//    arr.forEach(item => { });
//
// Python comparison:
// Python: for i in range(len(arr))
// JavaScript: for (let i = 0; i < arr.length; i++)
// Python: for item in list
// JavaScript: for (const item of arr)
// Python: for key in dict
// JavaScript: for (const key in obj)
//
// TODO: Implement the following functions:
// - Write 'sumArray' that takes an array of numbers and returns their sum
//   Use a for...of loop

function sumArray(numbers: Array<number>): number {
  let numberSum: number = 0
  for (const item of numbers) {
    numberSum = numberSum + item
  }
  return numberSum
}
// - Write 'countProperties' that takes an object and returns the number of properties
//   Use a for...in loop

function countProperties(inputObject: object): number {
  let propertyCount: number = 0
  for (const item in inputObject) {
    propertyCount = propertyCount + 1
  }
  return propertyCount
}

// - Write 'doubleArray' that takes an array of numbers and returns a new array
//   with each number doubled. Use forEach and push to build the new array.

function doubleArray(inputArray: Array<number>): Array<number> {
  const outputArray: Array<number> = []
  inputArray.forEach(value => { outputArray.push(value * 2) })
  return outputArray
}

// - Write 'findFirst' that takes an array and a value, and returns the index
//   of the first occurrence (or -1 if not found). Use a traditional for loop.
function findFirst(inputArray: any, value: any): number {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === value) {
      return i
    }
  }
  return -1
}

// TODO: Write your code here
// After completing this exercise, export your functions like this:
export { sumArray, countProperties, doubleArray, findFirst };


// =============================================================================
// Exercise 5: Spread Operator (...)
// =============================================================================
// The spread operator (...) copies or merges arrays and objects:
//
// Array spread:
// const copy = [...original];
// const merged = [...arr1, ...arr2];
// const withNew = [...arr, newItem];
//
// Object spread:
// const copy = { ...original };
// const merged = { ...obj1, ...obj2 };  // obj2 properties win
// const withNew = { ...obj, newProp: value };
//
// Function arguments:
// Math.max(...[1, 5, 3]);  // Same as Math.max(1, 5, 3)
//
// Python comparison:
// Python: [*list1, *list2]
// JavaScript: [...arr1, ...arr2]
// Python: {**dict1, **dict2}
// JavaScript: {...obj1, ...obj2}
// Python: func(*args)
// JavaScript: func(...args)
//
// TODO: Implement the following functions:
// - Write 'copyArray' that takes an array and returns a shallow copy using spread
//
// - Write 'mergeArrays' that takes two arrays and returns a new array with all elements
//   from both arrays using spread
//
// - Write 'addProperty' that takes an object and a key-value pair, and returns
//   a new object with that property added (use spread)
//   Example: addProperty({ a: 1 }, "b", 2) → { a: 1, b: 2 }
//
// - Write 'updatePerson' that takes a person object and an updates object,
//   and returns a new person with updates applied (later properties win)
//   Example: updatePerson({ name: "Alice", age: 30 }, { age: 31 }) 
//            → { name: "Alice", age: 31 }

// TODO: Write your code here
// After completing this exercise, export your functions like this:
// export { copyArray, mergeArrays, addProperty, updatePerson };


// =============================================================================
// Exercise 6: Comprehensive Exercise - Data Transformation
// =============================================================================
// Now let's combine multiple concepts from this lesson!
//
// Scenario: You have an array of user objects and need to transform them.
//
// TODO: Implement 'processUsers' that takes an array of user objects:
// [
//   { name: "Alice", age: 30, city: "NYC" },
//   { name: "Bob", age: 25, city: "LA" },
//   { name: "Charlie", age: 35 }  // Note: no city!
// ]
//
// Your function should:
// 1. Use for...of to iterate through users
// 2. Use destructuring to extract name, age, and city (with default "Unknown")
// 3. Use an arrow function to create a formatted string for each user
// 4. Use spread to build a result array
// 5. Return an array of strings: ["{name} ({age}) from {city}", ...]
//
// Example output:
// ["Alice (30) from NYC", "Bob (25) from LA", "Charlie (35) from Unknown"]
//
// Bonus: Use nullish coalescing (??) instead of destructuring default for city

// TODO: Write your code here
// After completing this exercise, export your function like this:
// export { processUsers };

// This empty export makes the file a module for TypeScript
export { };
