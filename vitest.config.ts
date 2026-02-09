import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['lessons/**/*.test.ts'],
    bail: 1, // Stop after 1 test failure
  },
});
