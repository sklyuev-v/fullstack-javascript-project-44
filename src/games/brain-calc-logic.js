import _ from 'lodash';
import { getRandomNum } from '../index.js';

export const rules = 'What is the result of the expression?';

export const getRoundData = () => {
  const numberOne = getRandomNum();
  const numberTwo = getRandomNum();

  const signs = ['+', '-', '*'];

  const randomSign = _.sample(signs);
  let correctAnswer = '';

  switch (randomSign) {
    case '+':
      correctAnswer = numberOne + numberTwo;
      break;
    case '-':
      correctAnswer = numberOne - numberTwo;
      break;
    default:
      correctAnswer = numberOne * numberTwo;
  }

  return {
    question: `${numberOne} ${randomSign} ${numberTwo}`,
    correctAnswer: String(correctAnswer),
  };
};
