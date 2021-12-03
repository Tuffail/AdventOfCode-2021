import { parseInput } from '../helpers/parsers';

export const problem1 = (input) => {
  const values = parseInput(input);
  let gammaRate = '';
  let epsilonRate = '';
  for (let i = 0; i < values[0].length; i += 1) {
    let zeroCount = 0;
    let oneCount = 0;
    for (let j = 0; j < values.length; j += 1) {
      const char = values[j].charAt(i);
      if (char === '0') {
        zeroCount += 1;
      } else {
        oneCount += 1;
      }
    }
    if (zeroCount > oneCount) {
      gammaRate += '0';
      epsilonRate += '1';
    } else {
      gammaRate += '1';
      epsilonRate += '0';
    }
  }
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

export const problem2 = (input) => {
  const values = parseInput(input);
  let generatorRating = values;
  let scrubberRating = values;
  for (let i = 0; i < generatorRating[0].length && generatorRating.length > 1; i += 1) {
    let zeroCount = 0;
    let oneCount = 0;
    const zeroBitValues = [];
    const oneBitValues = [];
    for (let j = 0; j < generatorRating.length; j += 1) {
      const char = generatorRating[j].charAt(i);
      if (char === '0') {
        zeroCount += 1;
        zeroBitValues.push(generatorRating[j]);
      } else {
        oneCount += 1;
        oneBitValues.push(generatorRating[j]);
      }
    }
    if (zeroCount > oneCount) {
      generatorRating = zeroBitValues;
    } else {
      generatorRating = oneBitValues;
    }
  }

  for (let i = 0; i < scrubberRating[0].length && scrubberRating.length > 1; i += 1) {
    let zeroCount = 0;
    let oneCount = 0;
    const zeroBitValues = [];
    const oneBitValues = [];
    for (let j = 0; j < scrubberRating.length; j += 1) {
      const char = scrubberRating[j].charAt(i);
      if (char === '0') {
        zeroCount += 1;
        zeroBitValues.push(scrubberRating[j]);
      } else {
        oneCount += 1;
        oneBitValues.push(scrubberRating[j]);
      }
    }
    if (zeroCount > oneCount) {
      scrubberRating = oneBitValues;
    } else {
      scrubberRating = zeroBitValues;
    }
  }

  return parseInt(generatorRating[0], 2) * parseInt(scrubberRating[0], 2);
};
