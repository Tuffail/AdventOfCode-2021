import { INPUT } from './__fixtures__/input';

import { problem1, problem2 } from './solution';

describe('Problem 1', () => {
  it('should return correct increments', () => {
    const result = problem1(INPUT);
    expect(result).toBe(1301);
  });
});

describe('Problem 2', () => {
  it('should return correct increments', () => {
    const result = problem2(INPUT);
    expect(result).toBe(1346);
  });
});
