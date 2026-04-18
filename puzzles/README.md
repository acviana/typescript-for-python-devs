# Puzzles

Open-ended coding challenges to practice your TypeScript skills. These are less structured than the lessons - you get a problem description and some tests, then it's up to you to figure out the solution!

## How to Use

1. Pick a puzzle folder (start with puzzle-01 if you're new to this)
2. Read README.md for the problem description and examples
3. Open puzzle.ts - you'll see function/class signatures to implement
4. Write your solution
5. Run tests to check your work:
   ```bash
   npm run test:puzzles
   # or for watch mode:
   npm run test:puzzles:watch
   ```
6. Iterate until all tests pass!

## Tips

- Read the test file to understand edge cases
- Each puzzle README has "Approach Hints" if you get stuck
- There's no single "right" way - any solution that passes tests works!
- Expect to spend 20-30 minutes per puzzle
- Stuck for more than 10 minutes? Check the hints!

## Puzzles

| Puzzle | Topic | Description |
|--------|-------|-------------|
| [puzzle-01-number-validator](./puzzle-01-number-validator/) | String validation | Validate if a string is a valid whole number |
| [puzzle-02-password-generator](./puzzle-02-password-generator/) | Random generation | Generate passwords with configurable character sets |
| [puzzle-03-batch-processor](./puzzle-03-batch-processor/) | Array manipulation | Process arrays in fixed-size chunks |
| [puzzle-04-event-logger](./puzzle-04-event-logger/) | Class design | Build a leveled logging system |
| [puzzle-05-type-safe-cache](./puzzle-05-type-safe-cache/) | Generics | Implement a generic key-value cache |

## Difficulty Progression

Puzzles generally increase in complexity, but you can attempt them in any order. Each puzzle lists the concepts you'll need in its README.

---

Happy puzzling! 🧩
