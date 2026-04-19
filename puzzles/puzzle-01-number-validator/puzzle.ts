/**
 * Puzzle 1: Number Validator
 *
 * Implement a function that validates whether a string represents a valid whole number
 * according to specific rules.
 *
 * Rules:
 * 1. Must be non-empty
 * 2. Must contain only digits 0-9 (no decimals, no signs)
 * 3. Must not have leading zeros (except "0" itself)
 * 4. Must be within JavaScript's safe integer range
 */

/**
 * Validates whether a string represents a valid whole number.
 *
 * @param input - The string to validate
 * @returns true if valid, false otherwise
 */
export function isValidNumber(input: string): boolean {
  const digits = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  if (input === "") {
    return false;
  }
  if (input[0] === "0" && input != "0") {
    return false;
  }
  for (const digit of input) {
    if (!digits.has(digit)) {
      return false;
    }
  }
  const num = Number(input);
  return Number.isSafeInteger(num);
}
