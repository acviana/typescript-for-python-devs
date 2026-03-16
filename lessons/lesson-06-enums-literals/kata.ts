/**
 * Lesson 6: Enums & Literal Types
 *
 * In this lesson, you'll learn how to use string literal types, numeric and
 * string enums, numeric literal types, and template literal types.
 * You'll also learn when to reach for an enum vs a literal union.
 *
 * Prerequisites: Complete Lessons 0–5 first!
 * Run `npm run test:watch` to see your progress!
 */

// =============================================================================
// Exercise 1: String Literal Types (Recap & Deepening)
// =============================================================================
// A string literal type restricts a value to a specific set of strings.
// TypeScript enforces this at compile time — passing any other string is an error.
//
// You've seen this briefly in lessons 3 and 4. Here we go deeper.
//
// Syntax:
//   type Direction = "north" | "south" | "east" | "west";
//
// Python comparison:
//   from typing import Literal
//   Direction = Literal["north", "south", "east", "west"]
//
// TODO: Create a type alias called 'Direction' with values:
// "north" | "south" | "east" | "west"

type Direction = "north" | "south" | "east" | "west";

// Then write a function called 'getOpposite' that:
// - Takes a parameter 'direction' of type Direction
// - Returns the opposite direction as a Direction:
//   north ↔ south, east ↔ west
// - Has an explicit return type of Direction
// - Uses a switch statement

function getOpposite(direction: Direction): Direction {
  switch (direction) {
    case "north":
      return "south";
    case "south":
      return "north";
    case "east":
      return "west";
    case "west":
      return "east";
  }
}

// Example:
//   getOpposite("north") → "south"
//   getOpposite("east")  → "west"

// TODO: Write your code here
// After completing this exercise, export your type and function like this:
export type { Direction };
export { getOpposite };

// =============================================================================
// Exercise 2: Numeric Enums
// =============================================================================
// An enum defines a set of named constants. Numeric enums auto-assign
// incrementing integer values starting at 0 (or a custom start value).
//
// Syntax:
//   enum Direction { North, South, East, West }  // 0, 1, 2, 3
//   enum Status { Pending = 1, Active, Inactive } // 1, 2, 3
//
// Python comparison:
//   from enum import Enum
//   class Direction(Enum):
//       LOW = 1
//       MEDIUM = 2
//       HIGH = 3
//
// Enum members are accessed as: Direction.Low, Priority.Medium, etc.
// TypeScript also allows reverse lookup: Direction[1] → "Low"
//
// TODO: Create a numeric enum called 'Priority' with members:
// - Low = 1
// - Medium = 2
// - High = 3

enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}

// Then write a function called 'getPriorityLabel' that:
// - Takes a parameter 'priority' of type Priority
// - Returns a human-readable string:
//   Priority.Low    → "Low Priority"
//   Priority.Medium → "Medium Priority"
//   Priority.High   → "High Priority"
// - Has an explicit return type of string
// - Uses a switch statement
//
// Example:
//   getPriorityLabel(Priority.Low)    → "Low Priority"
//   getPriorityLabel(Priority.High)   → "High Priority"

function getPriorityLabel(priority: Priority): string {
  switch (priority) {
    case Priority.Low:
      return "Low Priority";
    case Priority.Medium:
      return "Medium Priority";
    case Priority.High:
      return "High Priority";
  }
}

// TODO: Write your code here
// After completing this exercise, export your enum and function like this:
export { Priority, getPriorityLabel };

// =============================================================================
// Exercise 3: String Enums
// =============================================================================
// String enums require each member to have an explicit string value.
// Unlike numeric enums, there is no reverse lookup — but the values are
// human-readable in logs and network requests, which is often preferable.
//
// Tip: 'const enum' is a TypeScript-only optimisation that inlines enum
// values at compile time (no runtime object is created). Use it when you
// don't need to iterate over enum values at runtime. Regular 'enum' is
// safer for beginners.
//
// Syntax:
//   enum HttpMethod {
//     Get = "GET",
//     Post = "POST",
//     Put = "PUT",
//     Delete = "DELETE",
//   }
//
// TODO: Create a string enum called 'HttpMethod' with members:
// - Get = "GET"
// - Post = "POST"
// - Put = "PUT"
// - Delete = "DELETE"

enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Delete = "DELETE",
}

// Then write a function called 'isReadOnly' that:
// - Takes a parameter 'method' of type HttpMethod
// - Returns true if the method is GET (read-only), false otherwise
// - Has an explicit return type of boolean
//
// Then write a function called 'describeMethod' that:
// - Takes a parameter 'method' of type HttpMethod
// - Returns a description string:
//   GET    → "GET: Retrieve a resource"
//   POST   → "POST: Create a resource"
//   PUT    → "PUT: Replace a resource"
//   DELETE → "DELETE: Remove a resource"
// - Has an explicit return type of string

function describeMethod(method: HttpMethod): string {
  switch (method) {
    case HttpMethod.Get:
      return "GET: Retrieve a resource";
    case HttpMethod.Post:
      return "POST: Create a resource";
    case HttpMethod.Put:
      return "PUT: Replace a resource";
    case HttpMethod.Delete:
      return "DELETE: Remove a resource";
  }
}

// Example:
//   isReadOnly(HttpMethod.Get)    → true
//   isReadOnly(HttpMethod.Post)   → false
//   describeMethod(HttpMethod.Get) → "GET: Retrieve a resource"

function isReadOnly(method: HttpMethod): boolean {
  return method === HttpMethod.Get;
}

// TODO: Write your code here
// After completing this exercise, export your enum and functions like this:
export { HttpMethod, isReadOnly, describeMethod };

// =============================================================================
// Exercise 4: Enums vs Literal Unions
// =============================================================================
// Both enums and literal unions solve the same problem, but differently.
// This exercise shows both approaches side-by-side so you can understand
// the tradeoffs and choose the right tool.
//
// Enum approach:
//   enum Suit { Hearts = "hearts", Diamonds = "diamonds", ... }
//   function getSuitSymbol(suit: Suit): string { ... }
//   getSuitSymbol(Suit.Hearts) // must use enum member
//
// Literal union approach:
//   type Suit = "hearts" | "diamonds" | "clubs" | "spades";
//   function getSuitSymbol(suit: Suit): string { ... }
//   getSuitSymbol("hearts") // can use plain string
//
// Key tradeoffs:
//   Enums:         refactor-friendly (rename in one place), grouped namespace,
//                  can iterate values at runtime
//   Literal unions: simpler syntax, plain strings work directly, no import needed,
//                  preferred in most modern TypeScript codebases
//
// TODO: Using a LITERAL UNION (not an enum), create a type called 'CardSuit'
// with values: "hearts" | "diamonds" | "clubs" | "spades"

type CardSuit = "hearts" | "diamonds" | "clubs" | "spades";

// Then write a function called 'getSuitSymbol' that:
// - Takes a parameter 'suit' of type CardSuit
// - Returns the Unicode symbol for the suit:
//   "hearts"   → "♥"
//   "diamonds" → "♦"
//   "clubs"    → "♣"
//   "spades"   → "♠"
// - Has an explicit return type of string

function getSuitSymbol(suit: CardSuit): string {
  switch (suit) {
    case "hearts":
      return "♥";
    case "diamonds":
      return "♦";
    case "clubs":
      return "♣";
    case "spades":
      return "♠";
  }
}

// Then write a function called 'getSuitColor' that:
// - Takes a parameter 'suit' of type CardSuit
// - Returns "red" for hearts and diamonds, "black" for clubs and spades
// - Has an explicit return type of "red" | "black"
//
// Example:
//   getSuitSymbol("hearts")   → "♥"
//   getSuitSymbol("spades")   → "♠"
//   getSuitColor("hearts")    → "red"
//   getSuitColor("clubs")     → "black"

function getSuitColor(suit: CardSuit): "red" | "black" {
  return suit === "hearts" || suit === "diamonds" ? "red" : "black";
}

// TODO: Write your code here
// After completing this exercise, export your type and functions like this:
export type { CardSuit };
export { getSuitSymbol, getSuitColor };

// =============================================================================
// Exercise 5: Numeric Literal Types
// =============================================================================
// Just like string literals, you can create types from specific numbers.
// This is useful for constraining values to a known set of valid numbers.
//
// Syntax:
//   type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
//   type HttpSuccessCode = 200 | 201 | 204;
//
// Python comparison:
//   from typing import Literal
//   DiceRoll = Literal[1, 2, 3, 4, 5, 6]
//
// TODO: Create a type alias called 'DiceRoll' for: 1 | 2 | 3 | 4 | 5 | 6

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Then write a function called 'isHighRoll' that:
// - Takes a parameter 'roll' of type DiceRoll
// - Returns true if the roll is 5 or 6, false otherwise
// - Has an explicit return type of boolean

function isHighRoll(roll: DiceRoll): boolean {
  return roll === 5 || roll === 6;
}

// Then create a type alias called 'HttpSuccessCode' for: 200 | 201 | 204

type HttpSuccessCode = 200 | 201 | 204;

// Then write a function called 'describeSuccessCode' that:
// - Takes a parameter 'code' of type HttpSuccessCode
// - Returns a description:
//   200 → "OK"
//   201 → "Created"
//   204 → "No Content"
// - Has an explicit return type of string

function describeSuccessCode(code: HttpSuccessCode): string {
  switch (code) {
    case 200:
      return "OK";
    case 201:
      return "Created";
    case 204:
      return "No Content";
  }
}
// Example:
//   isHighRoll(6) → true
//   isHighRoll(3) → false
//   describeSuccessCode(200) → "OK"
//   describeSuccessCode(201) → "Created"

// TODO: Write your code here
// After completing this exercise, export your types and functions like this:
export type { DiceRoll, HttpSuccessCode };
export { isHighRoll, describeSuccessCode };

// =============================================================================
// Exercise 6: Template Literal Types
// =============================================================================
// Template literal types let you construct new string types by combining
// existing string literals — similar to template literals at runtime,
// but at the TYPE level.
//
// Syntax:
//   type Greeting = `Hello, ${string}`;    // any string starting with "Hello, "
//   type EventName = `on${string}`;         // "onClick", "onChange", etc.
//
// You can also combine literal unions:
//   type Side = "top" | "bottom" | "left" | "right";
//   type CSSProperty = `margin-${Side}`;   // "margin-top" | "margin-bottom" | ...
//
// Python comparison:
//   No direct equivalent — Python's Literal types cannot be combined this way.
//
// TODO: Create a type alias called 'CSSUnit' that represents a string ending
// in "px" or "rem" or "em" — use a template literal type:
//   `${number}px` | `${number}rem` | `${number}em`

type CSSUnit = `${number}px` | `${number}rem` | `${number}em`;

// Then write a function called 'formatUnit' that:
// - Takes a 'value' of type number and a 'unit' of type "px" | "rem" | "em"
// - Returns a CSSUnit string by combining them: e.g. "16px", "1.5rem"
// - Has an explicit return type of CSSUnit

function formatUnit(value: number, unit: "px" | "rem" | "em"): CSSUnit {
  return `${value}${unit}`;
}

// Then create a type alias called 'EventName' that represents a string
// starting with "on" followed by a Capitalized word — use:
//   `on${"Click" | "Change" | "Focus" | "Blur"}`
// (This gives: "onClick" | "onChange" | "onFocus" | "onBlur")

type EventNameType = "Click" | "Change" | "Focus" | "Blur";
type EventName = `on${EventNameType}`;

// Then write a function called 'isEventName' that:
// - Takes a parameter 'value' of type string
// - Returns true if the value is one of the valid EventName values
// - Has an explicit return type of boolean
// - Hint: check if it starts with "on" and the rest is one of the known words

// Example:
//   formatUnit(16, "px")   → "16px"
//   formatUnit(1.5, "rem") → "1.5rem"
//   isEventName("onClick") → true
//   isEventName("onHover") → false
//   isEventName("click")   → false

function isEventName(value: string): boolean {
  const validEvents: EventName[] = ["onClick", "onChange", "onFocus", "onBlur"];
  return (validEvents as string[]).includes(value);
}

export type { CSSUnit, EventName };
export { formatUnit, isEventName };

// =============================================================================
// Exercise 7: Enum as a Class Property
// =============================================================================
// Enums integrate naturally with classes from lesson 5. A class property
// can have an enum type, and methods can switch on it.
//
// This bridges lessons 5 and 6.
//
// TODO: Create a string enum called 'TaskStatus' with members:
// - Todo = "todo"
// - InProgress = "in_progress"
// - Done = "done"

enum TaskStatus {
  Todo = "todo",
  InProgress = "in_progress",
  Done = "done",
}

// Then create a class called 'Task' with:
// - constructor shorthand: readonly id: number, public title: string,
//   public status: TaskStatus
// - A method 'start' that sets status to TaskStatus.InProgress (returns void)
//   but throws an Error with message "Task already started or done"
//   if status is not TaskStatus.Todo
// - A method 'complete' that sets status to TaskStatus.Done (returns void)
//   but throws an Error with message "Task must be in progress to complete"
//   if status is not TaskStatus.InProgress
// - A method 'describe' that returns: "{title} [{status}]"

class Task {
  constructor(
    readonly id: number,
    public title: string,
    public status: TaskStatus,
  ) {}

  start(): void {
    if (this.status === TaskStatus.Todo) {
      this.status = TaskStatus.InProgress;
    } else {
      throw new Error("Task already started or done");
    }
  }

  complete(): void {
    if (this.status === TaskStatus.InProgress) {
      this.status = TaskStatus.Done;
    } else {
      throw new Error("Task must be in progress to complete");
    }
  }

  describe(): string {
    return `${this.title} [${this.status}]`;
  }
}

// Example:
//   const t = new Task(1, "Write tests", TaskStatus.Todo);
//   t.describe()  → "Write tests [todo]"
//   t.start()
//   t.describe()  → "Write tests [in_progress]"
//   t.complete()
//   t.describe()  → "Write tests [done]"
//   t.start()     → throws Error "Task already started or done"

// TODO: Write your code here
// After completing this exercise, export your enum and class like this:
export { TaskStatus, Task };

// =============================================================================
// Exercise 8: Comprehensive — Traffic Light State Machine
// =============================================================================
// Bring it all together: a string enum for states, literal types for
// timing, and functions that model a real state machine.
//
// TODO: Create a string enum called 'TrafficLight' with members:
// - Red = "red"
// - Yellow = "yellow"
// - Green = "green"

enum TrafficLight {
  Red = "red",
  Yellow = "yellow",
  Green = "green",
}

// Then create a numeric literal type called 'LightDuration' representing
// the valid durations (in seconds): 30 | 45 | 60

type LightDuration = 30 | 45 | 60;

// Then write a function called 'getNextLight' that:
// - Takes a parameter 'current' of type TrafficLight
// - Returns the next state in the cycle:
//   Red → Green → Yellow → Red
// - Has an explicit return type of TrafficLight

function getNextLight(current: TrafficLight): TrafficLight {
  switch (current) {
    case TrafficLight.Red:
      return TrafficLight.Green;
    case TrafficLight.Green:
      return TrafficLight.Yellow;
    case TrafficLight.Yellow:
      return TrafficLight.Red;
  }
}

// Then write a function called 'getLightDuration' that:
// - Takes a parameter 'light' of type TrafficLight
// - Returns the standard duration for that light as a LightDuration:
//   Red    → 60
//   Yellow → 30
//   Green  → 45
// - Has an explicit return type of LightDuration

function getLightDuration(light: TrafficLight): LightDuration {
  switch (light) {
    case TrafficLight.Red:
      return 60;
    case TrafficLight.Yellow:
      return 30;
    case TrafficLight.Green:
      return 45;
  }
}

// Then write a function called 'describeLightState' that:
// - Takes a parameter 'light' of type TrafficLight
// - Returns a full description string:
//   Red    → "Stop — red light (60s)"
//   Yellow → "Caution — yellow light (30s)"
//   Green  → "Go — green light (45s)"
// - Has an explicit return type of string

function describeLightState(light: TrafficLight): string {
  switch (light) {
    case TrafficLight.Red:
      return "Stop — red light (60s)";
    case TrafficLight.Yellow:
      return "Caution — yellow light (30s)";
    case TrafficLight.Green:
      return "Go — green light (45s)";
  }
}

// Example:
//   getNextLight(TrafficLight.Red)     → TrafficLight.Green
//   getNextLight(TrafficLight.Green)   → TrafficLight.Yellow
//   getNextLight(TrafficLight.Yellow)  → TrafficLight.Red
//   getLightDuration(TrafficLight.Red) → 60
//   describeLightState(TrafficLight.Red) → "Stop — red light (60s)"

// TODO: Write your code here
// After completing this exercise, export your types and functions like this:
export { TrafficLight };
export type { LightDuration };
export { getNextLight, getLightDuration, describeLightState };

// This empty export makes the file a module for TypeScript
export {};
