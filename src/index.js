import readlineSync from 'readline-sync';

export const getRandomNum = (min = 1, max = 100) => Math.floor(Math.random() * (max - min) + min);

const numberOfRounds = 3;

export const runGame = (rules, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  let currentRound = 0;

  while (currentRound < numberOfRounds) {
    const roundData = getRoundData();

    console.log(`Question: ${roundData.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === roundData.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${roundData.correctAnswer}'.\nLet's try again, ${name}!`,
      );
      return;
    }

    currentRound += 1;
  }
  console.log(`Congratulations, ${name}!`);
};
