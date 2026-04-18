/**
 * Puzzle 2: Password Generator
 *
 * Implement a function that generates random passwords with configurable options.
 */

export interface PasswordOptions {
  /** Include uppercase letters (A-Z) */
  includeUppercase: boolean;
  /** Include numbers (0-9) */
  includeNumbers: boolean;
  /** Include symbols (!@#$%^&* etc) */
  includeSymbols: boolean;
}

/**
 * Generates a random password with the specified length and character options.
 *
 * Rules:
 * - Password must be exactly 'length' characters
 * - If an option is true, password MUST contain at least one char from that set
 * - Throws error if length is too short to satisfy all selected options
 * - Lowercase letters are always included
 *
 * @param length - Desired password length (must be >= number of selected options)
 * @param options - Which character types to include
 * @returns Random password string
 * @throws Error if length is insufficient for the selected options
 */
export function generatePassword(length: number, options: PasswordOptions): string {
  // TODO: Implement this function
  // Hint: Check the README for approach hints if you get stuck!
  return ''; // placeholder
}
