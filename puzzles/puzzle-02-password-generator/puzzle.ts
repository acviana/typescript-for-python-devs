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

const StringConstants = {
  asciiLowercase: "abcdefghijklmnopqrstuvwxyz",
  asciiUppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  asciiLetters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  hexdigits: "0123456789abcdefABCDEF",
  punctuation: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
} as const;

function getRandomIntExclusive(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generatePassword(
  length: number,
  options: PasswordOptions,
): string {
  // Error if length is too short to satisfy selected options
  const sumOfOptions = Object.values(options).reduce(
    (acc, value) => acc + (value ? 1 : 0),
    1,
  );
  if (length < sumOfOptions) {
    throw new Error("password length is too short for number of options");
  }

  // Build the set of possible characters
  let charList: string = StringConstants.asciiLowercase;
  if (options.includeUppercase) {
    charList += StringConstants.asciiUppercase;
  }
  if (options.includeNumbers) {
    charList += StringConstants.digits;
  }
  if (options.includeSymbols) {
    charList += StringConstants.punctuation;
  }

  // Build the password
  let password: string = "";
  for (let i = 0; i < length; i++) {
    const randomIndex: number = getRandomIntExclusive(0, charList.length);
    password += charList[randomIndex];
  }
  return password;
}
