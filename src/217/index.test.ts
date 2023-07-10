import { describe, expect, test } from 'vitest';
import testing from '.';

describe('217', () => {
  test('should pass', () => {
    const input = [1, 2, 3, 1];
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const input = [1, 2, 3, 4];
    const output = false;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const output = true;

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});
