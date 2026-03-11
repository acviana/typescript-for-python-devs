/**
 * Tests for Lesson 6: Enums & Literal Types
 *
 * These tests will validate your solutions. Don't modify this file!
 * Run `npm run test:watch` to see your progress.
 */

import { describe, it, expect, beforeAll } from 'vitest';

describe('Lesson 6: Enums & Literal Types', () => {
  let kata: any;

  beforeAll(async () => {
    try {
      kata = await import('./kata');
    } catch (error) {
      console.error('Error importing kata:', error);
      throw error;
    }
  });

  // ===========================================================================
  // Exercise 1: String Literal Types
  // ===========================================================================
  describe('Exercise 1: String Literal Types', () => {
    it('should return the opposite of north', () => {
      expect(kata.getOpposite('north')).toBe('south');
    });

    it('should return the opposite of south', () => {
      expect(kata.getOpposite('south')).toBe('north');
    });

    it('should return the opposite of east', () => {
      expect(kata.getOpposite('east')).toBe('west');
    });

    it('should return the opposite of west', () => {
      expect(kata.getOpposite('west')).toBe('east');
    });

    it('should return a Direction type (string)', () => {
      expect(typeof kata.getOpposite('north')).toBe('string');
    });
  });

  // ===========================================================================
  // Exercise 2: Numeric Enums
  // ===========================================================================
  describe('Exercise 2: Numeric Enums', () => {
    it('should define Priority enum with correct values', () => {
      expect(kata.Priority.Low).toBe(1);
      expect(kata.Priority.Medium).toBe(2);
      expect(kata.Priority.High).toBe(3);
    });

    it('should label Low priority', () => {
      expect(kata.getPriorityLabel(kata.Priority.Low)).toBe('Low Priority');
    });

    it('should label Medium priority', () => {
      expect(kata.getPriorityLabel(kata.Priority.Medium)).toBe('Medium Priority');
    });

    it('should label High priority', () => {
      expect(kata.getPriorityLabel(kata.Priority.High)).toBe('High Priority');
    });

    it('should support reverse lookup', () => {
      expect(kata.Priority[1]).toBe('Low');
      expect(kata.Priority[3]).toBe('High');
    });
  });

  // ===========================================================================
  // Exercise 3: String Enums
  // ===========================================================================
  describe('Exercise 3: String Enums', () => {
    it('should define HttpMethod enum with correct string values', () => {
      expect(kata.HttpMethod.Get).toBe('GET');
      expect(kata.HttpMethod.Post).toBe('POST');
      expect(kata.HttpMethod.Put).toBe('PUT');
      expect(kata.HttpMethod.Delete).toBe('DELETE');
    });

    it('should return true for GET (read-only)', () => {
      expect(kata.isReadOnly(kata.HttpMethod.Get)).toBe(true);
    });

    it('should return false for POST', () => {
      expect(kata.isReadOnly(kata.HttpMethod.Post)).toBe(false);
    });

    it('should return false for PUT', () => {
      expect(kata.isReadOnly(kata.HttpMethod.Put)).toBe(false);
    });

    it('should return false for DELETE', () => {
      expect(kata.isReadOnly(kata.HttpMethod.Delete)).toBe(false);
    });

    it('should describe GET', () => {
      expect(kata.describeMethod(kata.HttpMethod.Get)).toBe('GET: Retrieve a resource');
    });

    it('should describe POST', () => {
      expect(kata.describeMethod(kata.HttpMethod.Post)).toBe('POST: Create a resource');
    });

    it('should describe PUT', () => {
      expect(kata.describeMethod(kata.HttpMethod.Put)).toBe('PUT: Replace a resource');
    });

    it('should describe DELETE', () => {
      expect(kata.describeMethod(kata.HttpMethod.Delete)).toBe('DELETE: Remove a resource');
    });
  });

  // ===========================================================================
  // Exercise 4: Enums vs Literal Unions
  // ===========================================================================
  describe('Exercise 4: Enums vs Literal Unions', () => {
    it('should return ♥ for hearts', () => {
      expect(kata.getSuitSymbol('hearts')).toBe('♥');
    });

    it('should return ♦ for diamonds', () => {
      expect(kata.getSuitSymbol('diamonds')).toBe('♦');
    });

    it('should return ♣ for clubs', () => {
      expect(kata.getSuitSymbol('clubs')).toBe('♣');
    });

    it('should return ♠ for spades', () => {
      expect(kata.getSuitSymbol('spades')).toBe('♠');
    });

    it('should return red for hearts', () => {
      expect(kata.getSuitColor('hearts')).toBe('red');
    });

    it('should return red for diamonds', () => {
      expect(kata.getSuitColor('diamonds')).toBe('red');
    });

    it('should return black for clubs', () => {
      expect(kata.getSuitColor('clubs')).toBe('black');
    });

    it('should return black for spades', () => {
      expect(kata.getSuitColor('spades')).toBe('black');
    });
  });

  // ===========================================================================
  // Exercise 5: Numeric Literal Types
  // ===========================================================================
  describe('Exercise 5: Numeric Literal Types', () => {
    it('should return true for a high roll of 5', () => {
      expect(kata.isHighRoll(5)).toBe(true);
    });

    it('should return true for a high roll of 6', () => {
      expect(kata.isHighRoll(6)).toBe(true);
    });

    it('should return false for a low roll of 1', () => {
      expect(kata.isHighRoll(1)).toBe(false);
    });

    it('should return false for a roll of 4', () => {
      expect(kata.isHighRoll(4)).toBe(false);
    });

    it('should describe 200 as OK', () => {
      expect(kata.describeSuccessCode(200)).toBe('OK');
    });

    it('should describe 201 as Created', () => {
      expect(kata.describeSuccessCode(201)).toBe('Created');
    });

    it('should describe 204 as No Content', () => {
      expect(kata.describeSuccessCode(204)).toBe('No Content');
    });
  });

  // ===========================================================================
  // Exercise 6: Template Literal Types
  // ===========================================================================
  describe('Exercise 6: Template Literal Types', () => {
    it('should format px unit', () => {
      expect(kata.formatUnit(16, 'px')).toBe('16px');
    });

    it('should format rem unit', () => {
      expect(kata.formatUnit(1.5, 'rem')).toBe('1.5rem');
    });

    it('should format em unit', () => {
      expect(kata.formatUnit(2, 'em')).toBe('2em');
    });

    it('should return true for onClick', () => {
      expect(kata.isEventName('onClick')).toBe(true);
    });

    it('should return true for onChange', () => {
      expect(kata.isEventName('onChange')).toBe(true);
    });

    it('should return true for onFocus', () => {
      expect(kata.isEventName('onFocus')).toBe(true);
    });

    it('should return true for onBlur', () => {
      expect(kata.isEventName('onBlur')).toBe(true);
    });

    it('should return false for onHover (not in the list)', () => {
      expect(kata.isEventName('onHover')).toBe(false);
    });

    it('should return false for click (no "on" prefix)', () => {
      expect(kata.isEventName('click')).toBe(false);
    });

    it('should return false for an empty string', () => {
      expect(kata.isEventName('')).toBe(false);
    });
  });

  // ===========================================================================
  // Exercise 7: Enum as a Class Property
  // ===========================================================================
  describe('Exercise 7: Enum as a Class Property', () => {
    it('should define TaskStatus enum with correct values', () => {
      expect(kata.TaskStatus.Todo).toBe('todo');
      expect(kata.TaskStatus.InProgress).toBe('in_progress');
      expect(kata.TaskStatus.Done).toBe('done');
    });

    it('should create a Task with correct initial state', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      expect(t.id).toBe(1);
      expect(t.title).toBe('Write tests');
      expect(t.status).toBe(kata.TaskStatus.Todo);
    });

    it('should describe a todo task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      expect(t.describe()).toBe('Write tests [todo]');
    });

    it('should start a task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      t.start();
      expect(t.status).toBe(kata.TaskStatus.InProgress);
      expect(t.describe()).toBe('Write tests [in_progress]');
    });

    it('should complete a task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      t.start();
      t.complete();
      expect(t.status).toBe(kata.TaskStatus.Done);
      expect(t.describe()).toBe('Write tests [done]');
    });

    it('should throw when starting an in-progress task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      t.start();
      expect(() => t.start()).toThrow('Task already started or done');
    });

    it('should throw when starting a done task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      t.start();
      t.complete();
      expect(() => t.start()).toThrow('Task already started or done');
    });

    it('should throw when completing a todo task', () => {
      const t = new kata.Task(1, 'Write tests', kata.TaskStatus.Todo);
      expect(() => t.complete()).toThrow('Task must be in progress to complete');
    });
  });

  // ===========================================================================
  // Exercise 8: Comprehensive — Traffic Light State Machine
  // ===========================================================================
  describe('Exercise 8: Comprehensive — Traffic Light State Machine', () => {
    it('should define TrafficLight enum with correct values', () => {
      expect(kata.TrafficLight.Red).toBe('red');
      expect(kata.TrafficLight.Yellow).toBe('yellow');
      expect(kata.TrafficLight.Green).toBe('green');
    });

    it('should cycle Red → Green', () => {
      expect(kata.getNextLight(kata.TrafficLight.Red)).toBe(kata.TrafficLight.Green);
    });

    it('should cycle Green → Yellow', () => {
      expect(kata.getNextLight(kata.TrafficLight.Green)).toBe(kata.TrafficLight.Yellow);
    });

    it('should cycle Yellow → Red', () => {
      expect(kata.getNextLight(kata.TrafficLight.Yellow)).toBe(kata.TrafficLight.Red);
    });

    it('should return duration 60 for Red', () => {
      expect(kata.getLightDuration(kata.TrafficLight.Red)).toBe(60);
    });

    it('should return duration 45 for Green', () => {
      expect(kata.getLightDuration(kata.TrafficLight.Green)).toBe(45);
    });

    it('should return duration 30 for Yellow', () => {
      expect(kata.getLightDuration(kata.TrafficLight.Yellow)).toBe(30);
    });

    it('should describe Red light state', () => {
      expect(kata.describeLightState(kata.TrafficLight.Red)).toBe('Stop — red light (60s)');
    });

    it('should describe Yellow light state', () => {
      expect(kata.describeLightState(kata.TrafficLight.Yellow)).toBe('Caution — yellow light (30s)');
    });

    it('should describe Green light state', () => {
      expect(kata.describeLightState(kata.TrafficLight.Green)).toBe('Go — green light (45s)');
    });
  });
});
