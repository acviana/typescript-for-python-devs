/**
 * Lesson 1: TypeScript Basics
 * 
 * In this lesson, you'll practice the fundamentals of TypeScript's type system.
 * Complete each exercise by replacing the TODO comments with working code.
 * 
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Variable Type Annotations
// =============================================================================
// In TypeScript, you can explicitly declare the type of a variable.
// Syntax: const variableName: type = value
//
// TODO: Declare the following variables with explicit type annotations:
// - A string variable called 'firstName' with the value "Alice"
// - A number variable called 'age' with the value 30
// - A boolean variable called 'isActive' with the value true

// TODO: Write your code here


// =============================================================================
// Exercise 2: Type Inference
// =============================================================================
// TypeScript can often infer types automatically. You don't always need to
// write explicit type annotations.
//
// TODO: Declare the following variables WITHOUT type annotations.
// Let TypeScript infer the types:
// - A variable 'lastName' with the value "Smith"
// - A variable 'score' with the value 95.5
// - A variable 'isComplete' with the value false

// TODO: Write your code here


// =============================================================================
// Exercise 3: Array Types
// =============================================================================
// Arrays can be typed in two ways:
// - type[] (e.g., number[])
// - Array<type> (e.g., Array<number>)
//
// TODO: Declare the following arrays:
// - A number array called 'numbers' containing [1, 2, 3, 4, 5]
// - A string array called 'colors' containing ["red", "green", "blue"]

// TODO: Write your code here


// =============================================================================
// Exercise 4: Function with Type Annotations
// =============================================================================
// Functions can have typed parameters and return types.
// Syntax: function name(param: type): returnType { }
//
// TODO: Write a function called 'addNumbers' that:
// - Takes two parameters: 'a' (number) and 'b' (number)
// - Returns the sum of a and b
// - Has an explicit return type annotation of 'number'

// TODO: Write your code here


// =============================================================================
// Exercise 5: Function with String Manipulation
// =============================================================================
// TODO: Write a function called 'greet' that:
// - Takes one parameter: 'name' (string)
// - Returns a greeting string in the format: "Hello, {name}!"
// - Has an explicit return type annotation of 'string'
//
// Example: greet("Alice") should return "Hello, Alice!"

// TODO: Write your code here


// =============================================================================
// Exercise 6: Function with Array Parameter
// =============================================================================
// TODO: Write a function called 'findMax' that:
// - Takes one parameter: 'numbers' (array of numbers)
// - Returns the largest number in the array
// - Has an explicit return type annotation of 'number'
// - Hint: You can use Math.max(...numbers) or implement your own logic
//
// Example: findMax([1, 5, 3, 9, 2]) should return 9

// TODO: Write your code here


// =============================================================================
// Exercise 7: Optional Parameters
// =============================================================================
// In TypeScript, you can make parameters optional with '?'
// You can also provide default values.
//
// TODO: Write a function called 'greetWithDefault' that:
// - Takes one parameter: 'name' (string, optional, defaults to "Guest")
// - Returns a greeting string in the format: "Hello, {name}!"
// - Has an explicit return type annotation of 'string'
//
// Example: 
// - greetWithDefault("Alice") should return "Hello, Alice!"
// - greetWithDefault() should return "Hello, Guest!"

// TODO: Write your code here


// =============================================================================
// Exercise 8: Object Types
// =============================================================================
// You can define the shape of an object inline.
// Syntax: { property: type, property: type }
//
// TODO: Write a function called 'createPerson' that:
// - Takes two parameters: 'name' (string) and 'age' (number)
// - Returns an object with the shape: { name: string, age: number, isAdult: boolean }
// - The 'isAdult' property should be true if age >= 18, false otherwise
// - Include an explicit return type annotation
//
// Example: createPerson("Alice", 30) should return { name: "Alice", age: 30, isAdult: true }

// TODO: Write your code here


// =============================================================================
// Exercise 9: Working with Tuples
// =============================================================================
// A tuple is an array with a fixed number of elements where each element
// has a specific type.
// Syntax: [type1, type2, type3]
//
// TODO: Write a function called 'getCoordinates' that:
// - Takes no parameters
// - Returns a tuple of [number, number] representing coordinates (x, y)
// - Return the values [10, 20]
// - Include an explicit return type annotation

// TODO: Write your code here


// =============================================================================
// Export all your functions and variables so the tests can use them
// =============================================================================
// TODO: Uncomment these exports after you've written your code above
/*
export {
  firstName,
  age,
  isActive,
  lastName,
  score,
  isComplete,
  numbers,
  colors,
  addNumbers,
  greet,
  findMax,
  greetWithDefault,
  createPerson,
  getCoordinates,
};
*/
