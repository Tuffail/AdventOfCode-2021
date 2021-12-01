import { parseInput } from '../helpers/parsers';

export const problem1 = (input) => {
  const values = parseInput(input, Number);
  let increments = 0;
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > values[i - 1]) {
      increments += 1;
    }
  }
  return increments;
};

export const problem2 = (input) => {
  const values = parseInput(input, Number);
  let increments = 0;
  for (let i = 1; i < values.length - 2; i += 1) {
    const previousSum = values[i - 1] + values[i] + values[i + 1];
    const nextSum = values[i] + values[i + 1] + values[i + 2];
    if (nextSum > previousSum) {
      increments += 1;
    }
  }
  return increments;
};
