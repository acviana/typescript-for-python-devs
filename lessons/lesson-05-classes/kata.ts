/**
 * Lesson 5: Classes & Access Modifiers
 *
 * In this lesson, you'll learn how to define classes in TypeScript,
 * control access to their members with public/private/protected,
 * use constructor shorthand, readonly fields, getters/setters,
 * inheritance, and interface contracts via 'implements'.
 *
 * Prerequisites: Complete Lessons 0–4 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: Basic Class
// =============================================================================
// TypeScript classes look like Python classes but use curly braces, and
// 'this' instead of 'self'. The constructor is always named 'constructor'.
//
// Python:                          TypeScript:
//   class Person:                    class Person {
//     def __init__(self, name, age):   name: string;
//       self.name = name               age: number;
//       self.age = age
//                                      constructor(name: string, age: number) {
//     def greet(self):                   this.name = name;
//       return f"Hi, I'm {self.name}"    this.age = age;
//                                      }
//                                      greet(): string {
//                                        return `Hi, I'm ${this.name}`;
//                                      }
//                                    }
//
// TODO: Create a class called 'Person' with:
// - Two public properties: name (string) and age (number)
// - A constructor that takes name and age and assigns them
// - A method called 'greet' that returns: "Hi, I'm {name} and I'm {age} years old"
// - Explicit types on all properties, parameters, and return types
//
// Example:
//   const p = new Person("Alice", 30);
//   p.greet() → "Hi, I'm Alice and I'm 30 years old"

class Person {
  constructor(
    public name: string,
    public age: number,
  ) {}

  greet(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
  }
}

// TODO: Write your code here
// After completing this exercise, export your class like this:
export { Person };

// =============================================================================
// Exercise 2: Access Modifiers
// =============================================================================
// TypeScript enforces access at compile time — very different from Python's
// convention of prefixing with underscore (_name) which is not enforced.
//
// public   — accessible everywhere (default if omitted)
// private  — only accessible inside the class itself
// protected — accessible inside the class and its subclasses
//
// Python:                          TypeScript:
//   class BankAccount:               class BankAccount {
//     def __init__(self):              private _balance: number = 0;  // enforced!
//       self._balance = 0  # convention only
//
// TODO: Create a class called 'Counter' with:
// - A private property 'count' of type number, initialized to 0
// - A method 'increment' that increases count by 1 (returns void)
// - A method 'decrement' that decreases count by 1 (returns void)
// - A method 'getCount' that returns the current count (returns number)
//
// The 'count' property must NOT be accessible from outside the class.
//
// Example:
//   const c = new Counter();
//   c.increment();
//   c.increment();
//   c.decrement();
//   c.getCount() → 1

class Counter {
  constructor(private count: number = 0) {}

  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }

  getCount(): number {
    return this.count;
  }
}

// TODO: Write your code here
// After completing this exercise, export your class like this:
export { Counter };

// =============================================================================
// Exercise 3: Constructor Parameter Shorthand
// =============================================================================
// TypeScript has a handy shorthand: if you add an access modifier directly
// to a constructor parameter, TypeScript automatically declares the property
// AND assigns it — no need for separate declarations or assignments.
//
// Without shorthand:                With shorthand:
//   class Point {                     class Point {
//     public x: number;                 constructor(
//     public y: number;                   public x: number,
//     constructor(x: number, y: number) { public y: number,
//       this.x = x;                     ) {}
//       this.y = y;                   }
//     }
//   }
//
// Both produce the exact same class — the shorthand is idiomatic TypeScript.
//
// TODO: Create a class called 'Rectangle' using constructor shorthand with:
// - public width: number
// - public height: number
// - A method 'area' that returns width * height (returns number)
// - A method 'perimeter' that returns 2 * (width + height) (returns number)
// - A method 'describe' that returns: "Rectangle: {width}x{height}"
//
// You must use constructor shorthand (no separate property declarations).
//
// Example:
//   const r = new Rectangle(4, 6);
//   r.area()      → 24
//   r.perimeter() → 20
//   r.describe()  → "Rectangle: 4x6"

class Rectangle {
  constructor(
    public width: number,
    public height: number,
  ) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.height + this.width);
  }

  describe(): string {
    return `Rectangle: ${this.width}x${this.height}`;
  }
}

// TODO: Write your code here
// After completing this exercise, export your class like this:
export { Rectangle };

// =============================================================================
// Exercise 4: Readonly Properties
// =============================================================================
// The 'readonly' modifier on a class property means it can only be assigned
// in the constructor — never reassigned afterwards.
//
// This is stronger than 'const' (which is for variables, not properties).
//
// Combine with constructor shorthand for maximum brevity:
//   constructor(readonly id: string) {}
//
// TODO: Create a class called 'Product' with:
// - readonly id: number       (set via constructor, never changed)
// - readonly name: string     (set via constructor, never changed)
// - public price: number      (set via constructor, can be changed)
// - A method 'getLabel' that returns: "{name} - ${price}"
// - A method 'applyDiscount' that takes a percent (number, e.g. 10 for 10%)
//   and reduces price by that percentage (returns void)
//
// Use constructor shorthand for all three properties.
//
// Example:
//   const p = new Product(1, "Widget", 100);
//   p.getLabel()          → "Widget - $100"
//   p.applyDiscount(20)   → (price becomes 80)
//   p.getLabel()          → "Widget - $80"

class Product {
  constructor(
    readonly id: number,
    readonly name: string,
    public price: number,
  ) {}

  getLabel = (): string => `${this.name} - $${this.price}`;

  applyDiscount(percent: number): void {
    this.price = this.price * (1 - percent / 100);
  }
}

// TODO: Write your code here
// After completing this exercise, export your class like this:
export { Product };

// =============================================================================
// Exercise 5: Getters & Setters
// =============================================================================
// Getters and setters let you define computed properties and add validation
// logic when reading or writing a value.
//
// Syntax:
//   get propertyName(): type { return ...; }
//   set propertyName(value: type) { ... }
//
// They are accessed like plain properties, not called as methods:
//   obj.fullName         // calls the getter
//   obj.fullName = "x"  // calls the setter
//
// Python comparison:
//   @property / @setter decorators serve the same purpose.
//
// TODO: Create a class called 'Temperature' with:
// - A private property '_celsius' of type number
// - A constructor that takes an initial celsius value
// - A getter 'celsius' that returns the internal _celsius value
// - A setter 'celsius' that sets _celsius, but throws an Error
//   with message "Temperature cannot be below absolute zero"
//   if the value is below -273.15
// - A getter 'fahrenheit' that returns the Fahrenheit equivalent:
//   (celsius * 9/5) + 32
//
// Example:
//   const t = new Temperature(100);
//   t.celsius     → 100
//   t.fahrenheit  → 212
//   t.celsius = 0
//   t.fahrenheit  → 32
//   t.celsius = -300  → throws Error

class Temperature {
  constructor(private _celsius: number) {}

  get celsius(): number {
    return this._celsius;
  }

  set celsius(temp: number) {
    if (temp < -273.15) {
      Error("Temperature cannot be below absolute zero");
    } else {
      this._celsius = temp;
    }
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }
}

// TODO: Write your code here
// After completing this exercise, export your class like this:
export { Temperature };

// =============================================================================
// Exercise 6: Inheritance
// =============================================================================
// TypeScript classes support single inheritance via 'extends'. The child class
// must call super() in its constructor before accessing 'this'.
//
// Python:                          TypeScript:
//   class Animal:                    class Animal {
//     def __init__(self, name):        constructor(public name: string) {}
//       self.name = name               speak(): string {
//     def speak(self):                   return `${this.name} makes a sound`;
//       return f"{self.name} makes a sound" }
//                                    }
//   class Dog(Animal):               class Dog extends Animal {
//     def speak(self):                 constructor(name: string, public breed: string) {
//       return f"{self.name} barks"      super(name);  // must call super first!
//                                      }
//                                      speak(): string {
//                                        return `${this.name} barks`;
//                                      }
//                                    }
//
// TODO: Create a base class called 'Animal' with:
// - constructor shorthand: public name: string
// - A method 'speak' that returns: "{name} makes a sound"
// - A method 'toString' that returns: "Animal: {name}"

class Animal {
  constructor(public name: string) {}

  speak = (): string => `${this.name} makes a sound`;

  toString = (): string => `Animal: ${this.name}`;
}

// Then create a class 'Dog' that extends Animal with:
// - constructor that takes name and public breed: string, calls super(name)
// - Overrides 'speak' to return: "{name} barks"
// - Overrides 'toString' to return: "Dog: {name} ({breed})"

class Dog extends Animal {
  constructor(
    name: string,
    public breed: string,
  ) {
    super(name);
  }

  speak = (): string => `{this.name} barks`;

  toString = (): string => `Dog: ${this.name} (${this.breed})`;
}

// Then create a class 'Cat' that extends Animal with:
// - constructor that takes name and public indoor: boolean, calls super(name)
// - Overrides 'speak' to return: "{name} meows"
// - Overrides 'toString' to return: "Cat: {name}" + " (indoor)" if indoor is true, else " (outdoor)"

class Cat extends Animal {
  constructor(
    name: string,
    public indoor: boolean,
  ) {
    super(name);
  }

  speak = (): string => `${this.name} meows`;

  toString = (): string =>
    this.indoor ? `Cat: ${this.name} (indoor)` : `Cat: ${this.name} (outdoor`;
}

// Example:
//   new Animal("Beast").speak()       → "Beast makes a sound"
//   new Dog("Rex", "Labrador").speak() → "Rex barks"
//   new Dog("Rex", "Labrador").toString() → "Dog: Rex (Labrador)"
//   new Cat("Luna", true).speak()     → "Luna meows"
//   new Cat("Luna", true).toString()  → "Cat: Luna (indoor)"
//   new Cat("Tom", false).toString()  → "Cat: Tom (outdoor)"

// TODO: Write your code here
// After completing this exercise, export your classes like this:
export { Animal, Dog, Cat };

// =============================================================================
// Exercise 7: Implementing Interfaces
// =============================================================================
// A class can declare that it satisfies an interface using 'implements'.
// TypeScript then enforces that all required properties and methods are present.
//
// This is the primary way to use interfaces as contracts in TypeScript.
//
// Syntax:
//   interface Printable {
//     print(): string;
//   }
//   class Report implements Printable {
//     print(): string { return "..."; }  // required by contract
//   }
//
// A class can implement multiple interfaces:
//   class Foo implements InterfaceA, InterfaceB { ... }
//
// TODO: Define two interfaces:
//
// 'Serializable' with:
// - method 'serialize': takes no arguments, returns string
//
// 'Resettable' with:
// - method 'reset': takes no arguments, returns void
//
// Then create a class 'UserSettings' that implements BOTH interfaces, with:
// - constructor shorthand: public theme: string, public language: string
// - 'serialize' returns a JSON-like string: '{"theme":"{theme}","language":"{language}"}'
//   (use template literals — no need to call JSON.stringify)
// - 'reset' sets theme back to "light" and language back to "en"
//
// Example:
//   const s = new UserSettings("dark", "fr");
//   s.serialize()   → '{"theme":"dark","language":"fr"}'
//   s.reset()
//   s.serialize()   → '{"theme":"light","language":"en"}'

// TODO: Write your code here
// After completing this exercise, export your interfaces and class like this:
// export type { Serializable, Resettable };
// export { UserSettings };

// =============================================================================
// Exercise 8: Comprehensive — Shape Hierarchy
// =============================================================================
// Bring it all together: interfaces as contracts, inheritance, readonly,
// access modifiers, getters, and constructor shorthand.
//
// TODO: Define an interface 'Shape' with:
// - readonly property 'kind': string
// - method 'area': returns number
// - method 'perimeter': returns number
// - method 'describe': returns string
//
// Then create three classes that implement 'Shape':
//
// 'Circle' with:
// - constructor shorthand: readonly kind = "circle" as const, readonly radius: number
//   Note: for a literal default you can write: readonly kind: string = "circle"
// - 'area': Math.PI * radius ** 2
// - 'perimeter': 2 * Math.PI * radius
// - 'describe': "Circle with radius {radius}"
//
// 'Square' with:
// - constructor shorthand: readonly kind: string = "square", readonly side: number
// - 'area': side ** 2
// - 'perimeter': 4 * side
// - 'describe': "Square with side {side}"
//
// 'RightTriangle' with:
// - constructor shorthand: readonly kind: string = "triangle",
//   readonly base: number, readonly height: number
// - 'area': 0.5 * base * height
// - 'perimeter': base + height + Math.sqrt(base ** 2 + height ** 2)  (hypotenuse via Pythagoras)
// - 'describe': "Right triangle with base {base} and height {height}"
//
// Example:
//   const c = new Circle(5);
//   c.kind          → "circle"
//   c.area()        → ~78.54
//   c.perimeter()   → ~31.42
//   c.describe()    → "Circle with radius 5"
//
//   const s = new Square(4);
//   s.area()        → 16
//   s.perimeter()   → 16
//   s.describe()    → "Square with side 4"

// TODO: Write your code here
// After completing this exercise, export your interface and classes like this:
// export type { Shape as ShapeInterface };
// export { Circle, Square, RightTriangle };

// This empty export makes the file a module for TypeScript
export {};
