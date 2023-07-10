import { describe, expect, test } from 'vitest';
import testing from '.';

describe('1', () => {
  test('should pass', () => {
    const nums = [2, 7, 11, 15],
      target = 9;
    const output = [0, 1];

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const nums = [3, 2, 4],
      target = 6;

    const output = [1, 2];

    const result = testing(nums, target);

    expect(result).toStrictEqual(output);
  });
});
