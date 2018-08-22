import readlineSync from 'readline-sync';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const rounds = 3;

const playRounds = () => {
  for (let i = 1; i <= rounds; i += 1) {
    const question = makeNumber();
    const rightAnswer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== rightAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      return false;
    }

    console.log('Correct');
  }

  return true;
};

const game = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!\n`);

  const isWin = playRounds();

  if (isWin) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}!`);
  }
};

export default game;
