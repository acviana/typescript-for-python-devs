/**
 * Puzzle 5: Type-Safe Cache
 *
 * Implement a generic cache class with type-safe keys and values.
 */

/**
 * A generic cache that stores key-value pairs with type safety.
 *
 * @param K - Key type, must be string or number
 * @param V - Value type, can be any type
 *
 * Example:
 *   const cache = new Cache<string, number>();
 *   cache.set('key', 42);
 *   cache.get('key');  // → 42
 *   cache.get('missing');  // → undefined
 */
export class Cache<K extends string | number, V> {
  // TODO: Add private storage (Map recommended, or Record with care)

  /**
   * Store a value with the given key.
   * Overwrites existing value if key already exists.
   */
  set(key: K, value: V): void {
    // TODO: Implement this method
  }

  /**
   * Get the value for a key, or undefined if not found.
   */
  get(key: K): V | undefined {
    // TODO: Implement this method
    return undefined; // placeholder
  }

  /**
   * Check if a key exists in the cache.
   */
  has(key: K): boolean {
    // TODO: Implement this method
    return false; // placeholder
  }

  /**
   * Delete a key from the cache.
   * @returns true if key existed and was deleted, false otherwise
   */
  delete(key: K): boolean {
    // TODO: Implement this method
    return false; // placeholder
  }

  /**
   * Clear all entries from the cache.
   */
  clear(): void {
    // TODO: Implement this method
  }
}
