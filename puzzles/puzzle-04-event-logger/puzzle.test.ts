import { describe, it, expect, beforeEach } from 'vitest';
import { Logger, LogLevel, LogEntry } from './puzzle';

describe('Puzzle 4: Event Logger', () => {
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
  });

  describe('basic logging', () => {
    it('should store a log entry', () => {
      logger.log('info', 'Test message');
      const logs = logger.getLogs();

      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe('info');
      expect(logs[0].message).toBe('Test message');
    });

    it('should include timestamp', () => {
      const before = new Date();
      logger.log('info', 'Test');
      const after = new Date();
      const logs = logger.getLogs();

      expect(logs[0].timestamp).toBeInstanceOf(Date);
      expect(logs[0].timestamp.getTime()).toBeGreaterThanOrEqual(before.getTime());
      expect(logs[0].timestamp.getTime()).toBeLessThanOrEqual(after.getTime());
    });

    it('should store multiple logs in order', () => {
      logger.log('info', 'First');
      logger.log('warn', 'Second');
      logger.log('error', 'Third');

      const logs = logger.getLogs();
      expect(logs).toHaveLength(3);
      expect(logs[0].message).toBe('First');
      expect(logs[1].message).toBe('Second');
      expect(logs[2].message).toBe('Third');
    });
  });

  describe('all log levels', () => {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];

    it.each(levels)('should accept %s level', (level) => {
      logger.log(level, 'Test message');
      const logs = logger.getLogs();

      expect(logs[0].level).toBe(level);
    });
  });

  describe('getLogs filtering', () => {
    beforeEach(() => {
      logger.log('debug', 'Debug message');
      logger.log('info', 'Info message 1');
      logger.log('info', 'Info message 2');
      logger.log('warn', 'Warning message');
      logger.log('error', 'Error message');
    });

    it('should return all logs when no level specified', () => {
      const logs = logger.getLogs();
      expect(logs).toHaveLength(5);
    });

    it('should filter by debug level', () => {
      const logs = logger.getLogs('debug');
      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe('debug');
    });

    it('should filter by info level', () => {
      const logs = logger.getLogs('info');
      expect(logs).toHaveLength(2);
      expect(logs[0].level).toBe('info');
      expect(logs[1].level).toBe('info');
    });

    it('should filter by warn level', () => {
      const logs = logger.getLogs('warn');
      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe('warn');
    });

    it('should filter by error level', () => {
      const logs = logger.getLogs('error');
      expect(logs).toHaveLength(1);
      expect(logs[0].level).toBe('error');
    });

    it('should return empty array for level with no entries', () => {
      logger.clear();
      logger.log('info', 'Only info');
      const logs = logger.getLogs('error');
      expect(logs).toEqual([]);
    });
  });

  describe('clear', () => {
    it('should remove all logs', () => {
      logger.log('info', 'Message 1');
      logger.log('info', 'Message 2');

      logger.clear();

      expect(logger.getLogs()).toEqual([]);
    });

    it('should allow logging after clear', () => {
      logger.log('info', 'Before');
      logger.clear();
      logger.log('info', 'After');

      const logs = logger.getLogs();
      expect(logs).toHaveLength(1);
      expect(logs[0].message).toBe('After');
    });
  });

  describe('immutability', () => {
    it('should return copy of logs, not internal reference', () => {
      logger.log('info', 'Test');
      const logs = logger.getLogs();

      // Modifying returned array should not affect logger
      logs.pop();

      expect(logger.getLogs()).toHaveLength(1);
    });

    it('should return new array on each call', () => {
      logger.log('info', 'Test');
      const logs1 = logger.getLogs();
      const logs2 = logger.getLogs();

      expect(logs1).not.toBe(logs2);
    });
  });
});
