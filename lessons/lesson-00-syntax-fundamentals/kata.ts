/**
 * Lesson 0: JavaScript Syntax Fundamentals
 * 
 * Welcome! This lesson introduces core JavaScript syntax before we dive into TypeScript's type system.
 * Complete each exercise by replacing the TODO comments with working code.
 * 
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Variable Declarations
// =============================================================================
// JavaScript has three ways to declare variables: const, let, and var.
//
// - const: Creates an immutable binding (cannot be reassigned) - USE THIS BY DEFAULT
// - let: Creates a mutable binding (can be reassigned)
// - var: Old way, has confusing scoping rules - AVOID THIS
//
// Python comparison:
// Python: x = 10  (always mutable)
// JavaScript: const x = 10;  (immutable - preferred)
// JavaScript: let x = 10;    (mutable)
//
// TODO: Declare the following variables:
// - A const variable 'MY_CONSTANT' with the value 42
// - A let variable 'counter' with the value 0
// - Then increment counter by 1 (counter = counter + 1)

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { MY_CONSTANT, counter };


// =============================================================================
// Exercise 2: String Templates & Concatenation
// =============================================================================
// JavaScript has two main ways to work with strings:
// - Template literals: `Hello, ${name}!` (backticks, with ${} for expressions)
// - Concatenation: "Hello, " + name + "!"
//
// Python comparison:
// Python: f"Hello, {name}!"
// JavaScript: `Hello, ${name}!`
//
// Template literals also support multi-line strings:
// const multiline = `Line 1
// Line 2`;
//
// TODO: Create the following string variables:
// - Use a template literal to create 'greeting' with value "Hello, Alice!"
//   (use a variable name = "Alice" in your template)
// - Use concatenation to create 'farewell' with value "Goodbye, Bob!"
//   (use a variable name = "Bob" in your concatenation)
// - Create a multi-line string 'poem' with two lines: "Roses are red" and "Violets are blue"

// TODO: Write your code here
// After completing this exercise, export your strings like this:
// export { greeting, farewell, poem };


// =============================================================================
// Exercise 3: Array Indexing & Methods
// =============================================================================
// Arrays in JavaScript are similar to Python lists, but with different methods:
//
// Python comparison:
// Python: arr.append(x)  → JavaScript: arr.push(x)
// Python: arr.pop()      → JavaScript: arr.pop()
// Python: len(arr)       → JavaScript: arr.length
// Python: arr[start:end] → JavaScript: arr.slice(start, end)
// Python: arr[-1]        → JavaScript: arr[arr.length - 1] (no negative indexing!)
//
// Common array methods:
// - push(item): Adds item to end
// - pop(): Removes and returns last item
// - length: Property (not a method!) that gives array size
// - slice(start, end): Returns a new array with elements from start to end (end not included)
//
// TODO: Complete the following tasks:
// - Create an array 'fruits' with ["apple", "banana", "cherry"]
// - Get the first element and assign it to 'firstFruit'
// - Get the last element using .length (not [-1]!) and assign it to 'lastFruit'
// - Create a variable 'fruitCount' with the length of the fruits array
// - Create a new array 'someFruits' using slice to get the first 2 fruits

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { fruits, firstFruit, lastFruit, fruitCount, someFruits };


// =============================================================================
// Exercise 4: Object Property Access
// =============================================================================
// Objects in JavaScript are similar to Python dictionaries, but with better syntax:
//
// Python comparison:
// Python: user["name"]      → JavaScript: user.name or user["name"]
// Python: user[key]         → JavaScript: user[key]
//
// JavaScript objects support TWO notations:
// - Dot notation: obj.property (when key is known and valid identifier)
// - Bracket notation: obj["property"] (when key is dynamic or has special chars)
//
// TODO: Given this object:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   "favorite-color": "blue"  // Note: dash in key name
// };
//
// Create the following variables:
// - Use dot notation to get firstName and assign to 'personFirstName'
// - Use bracket notation to get "favorite-color" and assign to 'favoriteColor'
// - Use bracket notation with a variable to get age:
//   const key = "age";
//   const personAge = person[key];

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { person, personFirstName, favoriteColor, personAge };


// =============================================================================
// Exercise 5: Equality Operators (== vs ===)
// =============================================================================
// JavaScript has TWO equality operators (Python only has one):
//
// - === (strict equality): Compares value AND type, no type coercion
// - == (loose equality): Compares value, with type coercion - AVOID THIS
//
// Python comparison:
// Python's == behaves like JavaScript's === (strict, no coercion)
//
// Examples of the difference:
// "5" === 5   → false (string vs number)
// "5" == 5    → true  (string coerced to number)
// 0 === false → false (number vs boolean)
// 0 == false  → true  (0 coerced to boolean)
//
// ALWAYS USE === to avoid surprises!
//
// TODO: Assign the results of these comparisons to variables:
// - Assign the result of ("5" == 5) to 'looseEqual1'
// - Assign the result of ("5" === 5) to 'strictEqual1'
// - Assign the result of (0 == false) to 'looseEqual2'
// - Assign the result of (0 === false) to 'strictEqual2'
//
// This exercise demonstrates why you should always use ===

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { looseEqual1, strictEqual1, looseEqual2, strictEqual2 };


// =============================================================================
// Exercise 6: Logical Operators
// =============================================================================
// JavaScript has three logical operators:
//
// Python comparison:
// Python: and  → JavaScript: &&
// Python: or   → JavaScript: ||
// Python: not  → JavaScript: !
//
// Like Python, these operators support short-circuit evaluation:
// - && returns first falsy value, or last value if all truthy
// - || returns first truthy value, or last value if all falsy
//
// Falsy values in JavaScript: false, 0, "", null, undefined, NaN
// Everything else is truthy!
//
// TODO: Create the following boolean variables:
// - Assign (true && false) to 'andResult'
// - Assign (true || false) to 'orResult'
// - Assign (!true) to 'notResult'
// - Assign (5 > 3 && 10 < 20) to 'combinedAnd'
// - Assign (5 > 10 || 10 < 20) to 'combinedOr'

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { andResult, orResult, notResult, combinedAnd, combinedOr };


// =============================================================================
// Exercise 7: Ternary Operator
// =============================================================================
// The ternary operator provides a concise way to write simple if/else:
//
// Syntax: condition ? valueIfTrue : valueIfFalse
//
// Python comparison:
// Python: x if condition else y
// JavaScript: condition ? x : y
//
// Example:
// const age = 20;
// const status = age >= 18 ? "adult" : "minor";
//
// Use for simple conditions. For complex logic, use if/else statements.
//
// TODO: Create the following variables using the ternary operator:
// - Assign the result of (10 > 5 ? "yes" : "no") to 'simpleCondition'
// - Given: const temperature = 75;
//   Assign the result of (temperature > 70 ? "warm" : "cold") to 'weatherStatus'
// - Given: const score = 85;
//   Assign the result of (score >= 90 ? "A" : score >= 80 ? "B" : "C") to 'grade'
//   (This shows nested ternaries - use sparingly!)

// TODO: Write your code here
// After completing this exercise, export your variables like this:
// export { simpleCondition, weatherStatus, grade };

// This empty export makes the file a module for TypeScript
export {};
