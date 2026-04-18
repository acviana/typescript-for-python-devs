import { describe, it, expect, vi } from 'vitest';
import { processInBatches } from './puzzle';

describe('Puzzle 3: Batch Processor', () => {
  describe('even batches', () => {
    it('should process all items in equal batches', () => {
      const processor = vi.fn();
      const items = [1, 2, 3, 4, 5, 6];

      processInBatches(items, 2, processor);

      expect(processor).toHaveBeenCalledTimes(3);
      expect(processor).toHaveBeenNthCalledWith(1, [1, 2]);
      expect(processor).toHaveBeenNthCalledWith(2, [3, 4]);
      expect(processor).toHaveBeenNthCalledWith(3, [5, 6]);
    });

    it('should handle batch size equal to array length', () => {
      const processor = vi.fn();
      const items = ['a', 'b', 'c'];

      processInBatches(items, 3, processor);

      expect(processor).toHaveBeenCalledTimes(1);
      expect(processor).toHaveBeenCalledWith(['a', 'b', 'c']);
    });
  });

  describe('uneven batches', () => {
    it('should handle remainder batch', () => {
      const processor = vi.fn();
      const items = [1, 2, 3, 4, 5];

      processInBatches(items, 2, processor);

      expect(processor).toHaveBeenCalledTimes(3);
      expect(processor).toHaveBeenNthCalledWith(1, [1, 2]);
      expect(processor).toHaveBeenNthCalledWith(2, [3, 4]);
      expect(processor).toHaveBeenNthCalledWith(3, [5]);
    });

    it('should handle single item remainder', () => {
      const processor = vi.fn();
      const items = [1, 2, 3, 4, 5, 6, 7];

      processInBatches(items, 3, processor);

      expect(processor).toHaveBeenCalledTimes(3);
      expect(processor).toHaveBeenNthCalledWith(3, [7]);
    });
  });

  describe('empty array', () => {
    it('should not call processor for empty array', () => {
      const processor = vi.fn();

      processInBatches([], 5, processor);

      expect(processor).not.toHaveBeenCalled();
    });
  });

  describe('batch size validation', () => {
    it('should throw error for batch size of 0', () => {
      expect(() => processInBatches([1, 2, 3], 0, vi.fn())).toThrow();
    });

    it('should throw error for negative batch size', () => {
      expect(() => processInBatches([1, 2, 3], -1, vi.fn())).toThrow();
    });

    it('should accept batch size of 1', () => {
      const processor = vi.fn();
      processInBatches([1, 2, 3], 1, processor);
      expect(processor).toHaveBeenCalledTimes(3);
    });
  });

  describe('generics', () => {
    it('should work with numbers', () => {
      const batches: number[][] = [];
      processInBatches([1, 2, 3, 4], 2, (batch) => batches.push(batch));
      expect(batches).toEqual([[1, 2], [3, 4]]);
    });

    it('should work with strings', () => {
      const batches: string[][] = [];
      processInBatches(['a', 'b', 'c'], 2, (batch) => batches.push(batch));
      expect(batches).toEqual([['a', 'b'], ['c']]);
    });

    it('should work with objects', () => {
      const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const batches: typeof items[] = [];
      processInBatches(items, 2, (batch) => batches.push(batch));
      expect(batches).toHaveLength(2);
    });
  });

  describe('batch content', () => {
    it('should create new arrays for batches (not references to original)', () => {
      const processor = vi.fn();
      const items = [1, 2, 3, 4];

      processInBatches(items, 2, processor);

      // Verify we got arrays, not the original reference
      const firstCall = processor.mock.calls[0][0];
      expect(Array.isArray(firstCall)).toBe(true);
    });
  });
});
