/**
 * Puzzle 3: Batch Processor
 *
 * Process an array of items in fixed-size batches.
 */

/**
 * Processes an array of items in batches of the specified size.
 *
 * @param items - Array of items to process
 * @param batchSize - Number of items per batch (must be > 0)
 * @param processor - Callback function called for each batch
 * @throws Error if batchSize is <= 0
 *
 * Example:
 *   processInBatches([1, 2, 3, 4, 5], 2, console.log)
 *   // Calls: [1, 2], [3, 4], [5]
 */
export function processInBatches<T>(
  items: T[],
  batchSize: number,
  processor: (batch: T[]) => void
): void {
  // TODO: Implement this function
  // Hint: Check the README for approach hints if you get stuck!
}
