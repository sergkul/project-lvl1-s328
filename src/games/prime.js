import { cons } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';

const description = 'Is this number prime?';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const setQuestionAndAnswer = () => {
  const question = randomNumber(2, 100);

  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

const brainGamePrime = () => game(description, setQuestionAndAnswer);

export default brainGamePrime;
