# Puzzle 1: Number Validator

## Problem

Implement `isValidNumber(input: string): boolean` that validates whether a string represents a valid whole number according to specific rules.

## Rules

1. **Non-empty**: Input string must contain at least one character
2. **Digits only**: Input must contain only characters 0-9 (no decimals, no signs)
3. **No leading zeros**: Numbers cannot have leading zeros, except the single digit "0" itself
4. **Safe integer range**: The numeric value must fit within JavaScript's safe integer range (-9007199254740991 to 9007199254740991)

## Examples

```typescript
isValidNumber("123")        // true
isValidNumber("0")          // true
isValidNumber("007")        // false (leading zero)
isValidNumber("12.5")       // false (decimal point)
isValidNumber("-5")         // false (negative sign)
isValidNumber("")           // false (empty string)
isValidNumber("abc")        // false (non-numeric)
isValidNumber("9007199254740993")  // false (too large)
```

## Function Signature

```typescript
export function isValidNumber(input: string): boolean
```

## Approach Hints

<details>
<summary>Click to expand hints</summary>

1. **Empty check**: Start by checking if the string is empty - that's the easiest rejection case

2. **Character validation**: You need to ensure every character is a digit (0-9). You could:
   - Use a regular expression like `/^\d+$/`
   - Iterate through each character and check `char >= '0' && char <= '1'`

3. **Leading zero rule**: Think about what makes "0" valid but "01" invalid:
   - "0" is valid: length 1 and the character is '0'
   - "01" is invalid: length > 1 and starts with '0'
   - "10" is valid: length > 1 but doesn't start with '0'

4. **Range check**: After confirming it's all digits, convert to number and check:
   - `Number.MIN_SAFE_INTEGER <= value && value <= Number.MAX_SAFE_INTEGER`
   - Or use: `Number.isSafeInteger(value)`

5. **Order matters**: Consider what order to check these rules. Should you check range before or after validating the format?

</details>

## Concepts Used

- String manipulation and iteration
- Regular expressions (optional)
- Type conversion (string to number)
- Boolean logic
- Edge case handling
