import { getRandomNum } from '../index.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getRoundData = () => {
  const question = getRandomNum();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
