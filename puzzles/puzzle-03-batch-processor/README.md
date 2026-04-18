# Puzzle 3: Batch Processor

## Problem

Implement a function that processes an array of items in fixed-size batches. This pattern is common when dealing with rate-limited APIs, database batch inserts, or memory-constrained operations.

## Requirements

1. **Batching**: Split the input array into chunks of `batchSize` items
2. **Processing**: Call the `processor` function on each batch
3. **Partial batches**: The last batch may be smaller if items don't divide evenly
4. **Empty handling**: If items is empty, don't call the processor at all
5. **Validation**: If batchSize <= 0, throw an error

## Examples

```typescript
// Example 1: Even batches
const items = [1, 2, 3, 4, 5, 6];
const batches: number[][] = [];

processInBatches(items, 2, (batch) => batches.push(batch));
// batches = [[1, 2], [3, 4], [5, 6]]
// processor called 3 times

// Example 2: Uneven batches
const items = ['a', 'b', 'c', 'd', 'e'];
const batches: string[][] = [];

processInBatches(items, 2, (batch) => batches.push(batch));
// batches = [['a', 'b'], ['c', 'd'], ['e']]
// processor called 3 times, last batch has 1 item

// Example 3: Empty array
processInBatches([], 5, (batch) => console.log(batch));
// processor never called

// Example 4: Invalid batch size
processInBatches([1, 2, 3], 0, (batch) => {});
// throws Error with message including "batchSize"
```

## Function Signature

```typescript
export function processInBatches<T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => void
): void
```

## Approach Hints

<details>
<summary>Click to expand hints</summary>

**Approach 1: Slice method**
- Use a loop that increments by `batchSize`
- Each iteration, take `items.slice(i, i + batchSize)`
- This creates copies of the batches (safer, can't modify original)

```typescript
for (let i = 0; i < items.length; i += batchSize) {
  const batch = items.slice(i, i + batchSize);
  processor(batch);
}
```

**Approach 2: Index tracking**
- Track current position with an index
- While we haven't reached the end, create batch and advance index
- This approach is more manual but avoids slice overhead

```typescript
let index = 0;
while (index < items.length) {
  const batch = [];
  for (let i = 0; i < batchSize && index < items.length; i++) {
    batch.push(items[index]);
    index++;
  }
  processor(batch);
}
```

**Key insight**: The slice approach is cleaner but both work. Think about edge cases:
- Empty array: loop never runs, processor never called ✓
- batchSize > items.length: single batch with all items ✓
- batchSize = 1: each item in its own batch ✓

</details>

## Concepts Used

- Generics (type parameter `T`)
- Array slicing or manual indexing
- Loops (for or while)
- Callback functions
- Error handling
- Edge case management
