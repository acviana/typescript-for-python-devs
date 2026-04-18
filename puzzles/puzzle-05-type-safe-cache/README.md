# Puzzle 5: Type-Safe Cache

## Problem

Implement a generic cache class that can store key-value pairs with type safety. The cache should work with any key type that is a string or number, and any value type.

## Requirements

1. **Type safety**: Keys must be `string` or `number`, values can be any type
2. **Operations**: Support set, get, has, delete, and clear
3. **Missing keys**: get() returns undefined for keys that don't exist
4. **Overwrite**: Setting a key that already exists updates the value
5. **Delete**: Returns true if key existed and was deleted, false otherwise

## Examples

```typescript
// String keys with number values
const numberCache = new Cache<string, number>();
numberCache.set('one', 1);
numberCache.set('two', 2);
numberCache.get('one');      // → 1
numberCache.get('missing');  // → undefined
numberCache.has('one');      // → true
numberCache.has('missing');  // → false
numberCache.delete('one');   // → true
numberCache.delete('one');   // → false (already deleted)
numberCache.clear();
numberCache.get('two');      // → undefined

// Number keys with object values
const userCache = new Cache<number, { name: string; age: number }>();
userCache.set(1, { name: 'Alice', age: 30 });
userCache.set(2, { name: 'Bob', age: 25 });
userCache.get(1);  // → { name: 'Alice', age: 30 }

// TypeScript enforces types
numberCache.set('three', 'string');  // Error: Type 'string' not assignable to 'number'
const stringCache = new Cache<boolean, string>();  // Error: boolean not allowed for keys
```

## Class Interface

```typescript
class Cache<K extends string | number, V> {
  set(key: K, value: V): void
  get(key: K): V | undefined
  has(key: K): boolean
  delete(key: K): boolean
  clear(): void
}
```

## Approach Hints

<details>
<summary>Click to expand hints</summary>

1. **Storage choice**: You need to store key-value pairs. Options:
   - Plain object: `private storage: Record<string, V> = {}` (works but key type is limited)
   - Map: `private storage = new Map<K, V>()` (better, preserves key type exactly)
   
   Map is recommended - it handles both string and number keys naturally.

2. **Generic constraint**: `K extends string | number` ensures only those types can be used as keys. TypeScript will enforce this at compile time.

3. **Implementation pattern**:
   ```typescript
   private storage = new Map<K, V>();
   
   set(key: K, value: V): void {
     this.storage.set(key, value);
   }
   
   get(key: K): V | undefined {
     return this.storage.get(key);
   }
   // ... etc
   ```

4. **Delete return value**: Map's delete method returns boolean indicating if key existed:
   ```typescript
   delete(key: K): boolean {
     return this.storage.delete(key);
   }
   ```

5. **Clear**: Simply call `this.storage.clear()`

6. **Alternative without Map**: If you want to use a plain object:
   ```typescript
   private storage: Record<string, V> = {};
   // Need to convert keys to strings for storage
   ```
   This is more complex because number keys get converted to strings. Map is cleaner!

</details>

## Concepts Used

- Generics with constraints (`K extends string | number`)
- Generic classes
- Map data structure (or Record with key conversion)
- Type safety and type parameters
- Method design with generic return types
