# Puzzle 2: Password Generator

## Problem

Implement a function that generates random passwords with configurable character sets. The generated password must include at least one character from each selected character type.

## Requirements

1. **Length**: Generate a password of the exact specified length
2. **Character sets**: Support uppercase letters, numbers, and symbols based on options
3. **Must include**: If an option is enabled, the password MUST contain at least one character from that set
4. **Random**: Characters should be randomly distributed (not predictable patterns)

## Character Sets

- **Lowercase** (always included): `abcdefghijklmnopqrstuvwxyz`
- **Uppercase** (optional): `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
- **Numbers** (optional): `0123456789`
- **Symbols** (optional): `!@#$%^&*()_+-=[]{}|;:,.<>?`

## Examples

```typescript
generatePassword(8, { includeUppercase: true, includeNumbers: false, includeSymbols: false })
// → "aBcDeFgH" (8 chars, has lowercase AND uppercase)

generatePassword(10, { includeUppercase: true, includeNumbers: true, includeSymbols: true })
// → "aB3$dE7!fG" (10 chars, has at least one of each type)

generatePassword(6, { includeUppercase: false, includeNumbers: false, includeSymbols: false })
// → "abcdef" (6 lowercase letters only)

generatePassword(3, { includeUppercase: true, includeNumbers: true, includeSymbols: false })
// Error: Cannot satisfy constraints (need 4 chars minimum for 3 character types)
```

## Function Signature

```typescript
interface PasswordOptions {
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
}

export function generatePassword(length: number, options: PasswordOptions): string
```

## Approach Hints

<details>
<summary>Click to expand hints</summary>

1. **Validate first**: Check if length is sufficient - you need at least as many characters as selected character types (e.g., if uppercase + numbers are enabled, length must be >= 2)

2. **Strategy - guaranteed + fill**:
   - First, ensure you pick ONE character from each required set
   - Then fill the remaining length with random characters from the combined pool
   - Finally, shuffle the result so the guaranteed chars aren't always at the start

3. **Character pools**: Create strings/arrays for each character type, then combine them

4. **Random selection**: `Math.floor(Math.random() * pool.length)` gives you a random index

5. **Shuffling**: You can shuffle by:
   - Swapping random pairs multiple times
   - Or using `sort(() => Math.random() - 0.5)` (though not perfectly random, it's fine here)
   - Or building the password in random positions

6. **Testing must-include**: After generating, verify your password actually contains at least one char from each required set

</details>

## Concepts Used

- String manipulation
- Arrays and random selection
- Interface/type definitions
- Boolean logic and validation
- Algorithm design (guarantee + shuffle pattern)
