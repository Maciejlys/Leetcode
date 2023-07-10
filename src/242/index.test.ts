import { describe, expect, test } from 'vitest';
import testing from '.';

describe('242', () => {
  test('should pass', () => {
    const s = 'anagram',
      t = 'nagaram';
    const output = true;

    const result = testing(s, t);

    expect(result).toStrictEqual(output);
  });
  test('should pass', () => {
    const s = 'rat',
      t = 'car';
    const output = false;

    const result = testing(s, t);

    expect(result).toStrictEqual(output);
  });
});
