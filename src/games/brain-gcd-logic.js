import { getRandomNum } from '../index.js';

export const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberOne, numberTwo) => {
  if (numberOne === 0) {
    return numberTwo;
  }

  return getGcd(numberTwo % numberOne, numberOne);
};

export const getRoundData = () => {
  const numberOne = getRandomNum();
  const numberTwo = getRandomNum();

  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = getGcd(numberOne, numberTwo);

  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};
