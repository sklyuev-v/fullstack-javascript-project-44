import _ from 'lodash';
import { getRandomNum } from '../index.js';

const minDifference = 2;
const maxDifference = 9;
const progressionLength = 10;

export const rules = 'What number is missing in the progression?';

let progression = [];

const createProgression = (initialTerm, commonDifference) => {
  const lastTerm = initialTerm + commonDifference * progressionLength;

  return _.range(initialTerm, lastTerm, commonDifference);
};

const minNumber = 1;
const maxNumber = 500;

export const getRoundData = () => {
  const initialTerm = getRandomNum(minNumber, maxNumber);
  const commonDifference = getRandomNum(minDifference, maxDifference);

  progression = createProgression(initialTerm, commonDifference);

  const hideTermIndex = getRandomNum(0, progression.length - 1);

  const correctAnswer = progression[hideTermIndex];
  progression[hideTermIndex] = '..';

  const question = progression.join(' ');

  return {
    question,
    correctAnswer: String(correctAnswer),
  };
};
