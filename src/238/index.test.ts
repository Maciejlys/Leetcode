import { describe, expect, test } from 'vitest';
import testing from '.';

describe('238', () => {
  test('should pass', () => {
    const input = [1, 2, 3, 4];
    const output = [24, 12, 8, 6];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});
