import { describe, expect, test } from 'vitest';
import testing from '.';

describe('49', () => {
  test('should pass', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

    const result = testing(input);

    expect(result.forEach((arr) => arr.sort())).toStrictEqual(
      output.forEach((arr) => arr.sort()),
    );
  });
  test('should pass', () => {
    const input = [''];
    const output = [['']];
    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const input = ['a'];
    const output = [['a']];

    const result = testing(input);

    expect(result).toStrictEqual(output);
  });
});
