# Puzzle 4: Event Logger

## Problem

Implement a Logger class that stores log messages with timestamps and supports filtering by severity level. This is a common pattern in applications for tracking events and debugging.

## Requirements

1. **Log levels**: Support 'debug', 'info', 'warn', 'error' levels
2. **Storage**: Store each log entry with a timestamp, level, and message
3. **Retrieval**: Get all logs, or filter by a specific level
4. **Clearing**: Ability to clear all stored logs

## Log Levels

From least to most severe:
- `debug` - Detailed debugging information
- `info` - General informational messages
- `warn` - Warning messages (non-fatal issues)
- `error` - Error messages (problems that need attention)

## Examples

```typescript
const logger = new Logger();

// Logging
logger.log('info', 'Application started');
logger.log('error', 'Connection failed');
logger.log('info', 'Retrying...');

// Get all logs
logger.getLogs();
// → [
//     { timestamp: Date, level: 'info', message: 'Application started' },
//     { timestamp: Date, level: 'error', message: 'Connection failed' },
//     { timestamp: Date, level: 'info', message: 'Retrying...' }
//   ]

// Get only error logs
logger.getLogs('error');
// → [{ timestamp: Date, level: 'error', message: 'Connection failed' }]

// Clear all logs
logger.clear();
logger.getLogs(); // → []
```

## Class Interface

```typescript
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  timestamp: Date;
  level: LogLevel;
  message: string;
}

class Logger {
  log(level: LogLevel, message: string): void
  getLogs(level?: LogLevel): LogEntry[]
  clear(): void
}
```

## Approach Hints

<details>
<summary>Click to expand hints</summary>

1. **Storage**: You'll need an array to store log entries. Make it private so it can't be modified from outside.

2. **Log method**: When logging:
   - Create a new Date for the timestamp
   - Create a LogEntry object with timestamp, level, and message
   - Add it to your storage array

3. **GetLogs method**: 
   - If no level provided: return all logs (maybe a copy?)
   - If level provided: filter logs where entry.level matches
   - Consider: should you return a copy or the original array? (Copies are safer)

4. **Clear method**: Simply reset your storage array to empty

5. **Type safety**: Use the LogLevel type to ensure only valid levels can be passed

6. **Edge case**: What if someone calls getLogs with a level that has no entries? Return empty array.

</details>

## Concepts Used

- Classes with private state
- Type aliases
- Interfaces
- Arrays and array methods (filter, spread for copying)
- Date objects
- Method design
