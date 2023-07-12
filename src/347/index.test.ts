import { describe, expect, test } from 'vitest';
import testing from '.';

describe('347', () => {
  test('should pass', () => {
    const nums = [1, 1, 1, 2, 2, 3],
      k = 2;
    const output = [1, 2];

    const result = testing(nums, k);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const nums = [1],
      k = 1;
    const output = [1];

    const result = testing(nums, k);

    expect(result).toStrictEqual(output);
  });
});
