import { INPUT } from './__fixtures__/input';
// import { INPUT } from './input';

import { problem1, problem2 } from './solution';

describe('Problem 1', () => {
  it('should return correct power consumption', () => {
    const result = problem1(INPUT);
    expect(result).toBe(3549854);
  });
});

describe('Problem 2', () => {
  it('should return correct life support rating', () => {
    const result = problem2(INPUT);
    expect(result).toBe(3765399);
  });
});
