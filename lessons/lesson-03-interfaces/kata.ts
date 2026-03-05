/**
 * Lesson 3: Interfaces & Type Aliases
 *
 * In this lesson, you'll learn how to define custom types using interfaces
 * and type aliases - essential tools for creating well-typed applications.
 *
 * Prerequisites: Complete Lessons 0, 1, and 2 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Basic Interface
// =============================================================================
// Interfaces define the shape of an object. They're like contracts that
// specify what properties an object must have.
//
// Syntax:
// interface InterfaceName {
//   property: type;
// }
//
// TODO: Create an interface called 'Product' with the following properties:
// - id: number
// - name: string
// - price: number
// - inStock: boolean
//
// Then write a function called 'formatProduct' that:
// - Takes a parameter 'product' of type Product
// - Returns a string in the format: "{name} (${price})"
// - Has an explicit return type of string
//
// Example: formatProduct({ id: 1, name: "Laptop", price: 999, inStock: true })
//          should return "Laptop ($999)"

// TODO: Write your code here

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

function formatProduct(product: Product): string {
  return `${product.name} ($${product.price})`;
}
// After completing this exercise, export your interface and function like this:
export type { Product };
export { formatProduct };

// =============================================================================
// Exercise 2: Type Alias for Union Types
// =============================================================================
// Type aliases let you create custom names for any type, including union types.
// Union types represent a value that can be one of several types.
//
// Syntax:
// type TypeName = type1 | type2 | type3;
//
// TODO: Create a type alias called 'Status' that can be one of these strings:
// - "pending"
// - "approved"
// - "rejected"

type Status = "pending" | "approved" | "rejected";

// Then write a function called 'getStatusMessage' that:
// - Takes a parameter 'status' of type Status
// - Returns a string message based on the status:
//   - "pending" -> "Application is being reviewed"
//   - "approved" -> "Application approved"
//   - "rejected" -> "Application rejected"
// - Has an explicit return type of string

function getStatusMessage(status: Status): string {
  if (status === "pending") {
    return "Application is being reviewed";
  }
  if (status === "approved") {
    return "Application approved";
  }
  if (status == "rejected") {
    return "Application rejected";
  } else {
    return "";
  }
}

// TODO: Write your code here
// After completing this exercise, export your type and function like this:
export type { Status };
export { getStatusMessage };

// =============================================================================
// Exercise 3: Optional Properties
// =============================================================================
// Properties can be marked as optional using '?'. This means they may or
// may not be present on the object.
//
// Syntax:
// interface Name {
//   required: type;
//   optional?: type;
// }
//
// TODO: Create an interface called 'User' with:
// - id: number (required)
// - username: string (required)
// - email?: string (optional)
// - phone?: string (optional)

interface User {
  id: number;
  username: string;
  email?: string;
  phone?: string;
}

// Then write a function called 'displayContact' that:
// - Takes a parameter 'user' of type User
// - Returns the email if present, otherwise returns the phone if present,
//   otherwise returns "No contact info"
// - Has an explicit return type of string

function displayContact(user: User): string {
  return user.email ?? user.phone ?? "No contact info";
}

// TODO: Write your code here
// After completing this exercise, export your interface and function like this:
export type { User };
export { displayContact };

// =============================================================================
// Exercise 4: Readonly Properties
// =============================================================================
// The 'readonly' modifier prevents a property from being reassigned after
// the object is created.
//
// Syntax:
// interface Name {
//   readonly property: type;
// }
//
// TODO: Create an interface called 'Config' with:
// - readonly apiUrl: string
// - readonly timeout: number
// - retryAttempts: number (not readonly)
//
// Then write a function called 'createConfig' that:
// - Takes apiUrl (string), timeout (number), and retryAttempts (number) as parameters
// - Returns an object of type Config with those values
// - Has an explicit return type of Config

interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  retryAttempts: number;
}

function createConfig(
  apiUrl: string,
  timeout: number,
  retryAttempts: number,
): Config {
  return { apiUrl, timeout, retryAttempts };
}

// TODO: Write your code here
// After completing this exercise, export your interface and function like this:
export type { Config };
export { createConfig };

// =============================================================================
// Exercise 5: Extending Interfaces
// =============================================================================
// Interfaces can extend other interfaces, inheriting their properties.
// This is useful for creating specialized versions of base types.
//
// Syntax:
// interface Child extends Parent {
//   newProperty: type;
// }
//
// TODO: Create an interface called 'Animal' with:
// - name: string
// - age: number

interface Animal {
  name: string;
  age: number;
}

// Then create an interface called 'Dog' that extends Animal and adds:
// - breed: string
// - isGoodBoy: boolean

interface Dog extends Animal {
  breed: string;
  isGoodBoy: boolean;
}

// Finally, write a function called 'describeDog' that:
// - Takes a parameter 'dog' of type Dog
// - Returns a string: "{name} is a {age} year old {breed}"
// - Has an explicit return type of string
//
// Example: describeDog({ name: "Max", age: 3, breed: "Labrador", isGoodBoy: true })
//          should return "Max is a 3 year old Labrador"

function describeDog(dog: Dog): string {
  return `${dog.name} is a ${dog.age} year old ${dog.breed}`;
}

// TODO: Write your code here
// After completing this exercise, export your interfaces and function like this:
export type { Animal, Dog };
export { describeDog };

// =============================================================================
// Exercise 6: Function Type with Interface
// =============================================================================
// Interfaces can define function signatures. This is useful when you want
// to pass functions as parameters or store them in objects.
//
// Syntax:
// interface FunctionName {
//   (param: type): returnType;
// }
//
// TODO: Create an interface called 'MathOperation' that defines a function:
// - Takes two parameters, both numbers
// - Returns a number

interface MathOperation {
  (num1: number, num2: number): number;
}

// Then write a function called 'calculate' that:
// - Takes three parameters:
//   - a: number
//   - b: number
//   - operation: MathOperation
// - Returns the result of calling operation(a, b)
// - Has an explicit return type of number
//
// Example: calculate(5, 3, (x, y) => x + y) should return 8

const calculate = (
  num1: number,
  num2: number,
  operation: MathOperation,
): number => operation(num1, num2);

// TODO: Write your code here
// After completing this exercise, export your interface and function like this:
export type { MathOperation };
export { calculate };

// =============================================================================
// Exercise 7: Type Alias for Function
// =============================================================================
// Type aliases can also define function signatures. The syntax is slightly
// different from interfaces but achieves the same result.
//
// Syntax:
// type FunctionName = (param: type) => returnType;
//
// TODO: Create a type alias called 'StringTransformer' for a function that:
// - Takes one parameter: str (string)
// - Returns a string
//
// Then write a function called 'transformStrings' that:
// - Takes two parameters:
//   - strings: string[] (array of strings)
//   - transformer: StringTransformer
// - Returns a new array with the transformer applied to each string
// - Has an explicit return type of string[]
//
// Example: transformStrings(["hello", "world"], s => s.toUpperCase())
//          should return ["HELLO", "WORLD"]

// TODO: Write your code here
// After completing this exercise, export your type and function like this:
// export type { StringTransformer };
// export { transformStrings };

// =============================================================================
// Exercise 8: Complex Type Composition
// =============================================================================
// You can combine interfaces, type aliases, and unions to create complex
// type definitions that model real-world scenarios.
//
// TODO: Create the following types:
//
// 1. A type alias 'PaymentMethod' that can be: "credit-card" | "paypal" | "bank-transfer"
//
// 2. An interface 'OrderItem' with:
//    - productId: number
//    - quantity: number
//    - price: number
//
// 3. An interface 'Order' with:
//    - orderId: string
//    - items: OrderItem[] (array of OrderItem)
//    - paymentMethod: PaymentMethod
//    - totalAmount: number
//
// Then write a function called 'calculateOrderTotal' that:
// - Takes a parameter 'order' of type Order
// - Calculates and returns the sum of (quantity * price) for all items
// - Has an explicit return type of number
//
// Example:
// calculateOrderTotal({
//   orderId: "ORD-123",
//   items: [
//     { productId: 1, quantity: 2, price: 10 },
//     { productId: 2, quantity: 1, price: 20 }
//   ],
//   paymentMethod: "credit-card",
//   totalAmount: 40
// }) should return 40

// TODO: Write your code here
// After completing this exercise, export your types and function like this:
// export type { PaymentMethod, OrderItem, Order };
// export { calculateOrderTotal };

// This empty export makes the file a module for TypeScript
export {};
