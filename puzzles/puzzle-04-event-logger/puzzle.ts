/**
 * Puzzle 4: Event Logger
 *
 * Implement a Logger class for storing and retrieving log messages.
 */

/** Valid log levels from least to most severe */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** Represents a single log entry */
export interface LogEntry {
  /** When the log was created */
  timestamp: Date;
  /** Severity level */
  level: LogLevel;
  /** Log message */
  message: string;
}

/**
 * A logger that stores log entries with timestamps and supports filtering by level.
 *
 * Example:
 *   const logger = new Logger();
 *   logger.log('info', 'Server started');
 *   logger.log('error', 'Connection failed');
 *   const errors = logger.getLogs('error');
 *   logger.clear();
 */
export class Logger {
  // TODO: Add private storage for log entries

  /**
   * Add a new log entry.
   * @param level - Severity level
   * @param message - Log message
   */
  log(level: LogLevel, message: string): void {
    // TODO: Implement this method
  }

  /**
   * Get log entries, optionally filtered by level.
   * @param level - Optional level to filter by
   * @returns Array of log entries (new array, not internal reference)
   */
  getLogs(level?: LogLevel): LogEntry[] {
    // TODO: Implement this method
    return []; // placeholder
  }

  /**
   * Clear all stored logs.
   */
  clear(): void {
    // TODO: Implement this method
  }
}
