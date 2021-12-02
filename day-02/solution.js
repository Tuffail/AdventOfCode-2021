import { parseInput } from '../helpers/parsers';

export const problem1 = (input) => {
  const values = parseInput(input);
  let horizontalPos = 0;
  let verticalPos = 0;
  values.forEach((instruction) => {
    const [direction, amount] = instruction.split(' ');
    const parsedAmount = Number(amount);
    switch (direction) {
      case 'forward':
        horizontalPos += parsedAmount;
        break;
      case 'up':
        verticalPos -= parsedAmount;
        break;
      case 'down':
        verticalPos += parsedAmount;
        break;
      default:
    }
  });
  return horizontalPos * verticalPos;
};

export const problem2 = (input) => {
  const values = parseInput(input);
  let horizontalPos = 0;
  let verticalPos = 0;
  let aim = 0;
  values.forEach((instruction) => {
    const [direction, amount] = instruction.split(' ');
    const parsedAmount = Number(amount);
    switch (direction) {
      case 'forward':
        horizontalPos += parsedAmount;
        verticalPos += aim * parsedAmount;
        break;
      case 'up':
        aim -= parsedAmount;
        break;
      case 'down':
        aim += parsedAmount;
        break;
      default:
    }
  });
  return horizontalPos * verticalPos;
};
