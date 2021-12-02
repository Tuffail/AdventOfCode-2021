import { INPUT } from './__fixtures__/input';

import { problem1, problem2 } from './solution';

describe('Problem 1', () => {
  it('should return correct final product of horizontal and depth', () => {
    const result = problem1(INPUT);
    expect(result).toBe(2147104);
  });
});

describe('Problem 2', () => {
  it('should return correct final product of horizontal and depth', () => {
    const result = problem2(INPUT);
    expect(result).toBe(2044620088);
  });
});
