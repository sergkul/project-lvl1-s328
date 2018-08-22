import { cons } from 'hexlet-pairs';
import game from '..';

const rules = 'Find the greatest common divisor of given numbers.\n';

const randomNumber = limit => Math.floor(Math.random() * limit);

const getGcd = (a, b) => {
  let gcd = 1;
  const min = a <= b ? a : b;

  for (let i = 1; i <= min; i += 1) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  if (a === b) gcd = a;

  return gcd;
};

const setQuestionAndAnswer = () => {
  const num1 = randomNumber(99) + 1;
  const num2 = randomNumber(99) + 1;

  const question = `${num1} ${num2}`;
  const rightAnswer = getGcd(num1, num2);

  return cons(question, rightAnswer);
};

const brainGameGcd = () => game(rules, setQuestionAndAnswer);

export default brainGameGcd;