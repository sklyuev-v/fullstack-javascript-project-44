import { getRandomNum } from '../index.js';

const isPrime = (number) => {
  let start = 2;
  let prime = true;

  while (start < number) {
    if (number % start === 0) {
      prime = false;
      break;
    }
    start += 1;
  }

  return prime;
};

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const minNumber = 1;
const maxNumber = 500;

export const getRoundData = () => {
  const question = getRandomNum(minNumber, maxNumber);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return {
    question,
    correctAnswer,
  };
};
