import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;

const setQuestionAndAnswer = () => {
  const question = randomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

const brainGameEven = () => game(rules, setQuestionAndAnswer);

export default brainGameEven;
