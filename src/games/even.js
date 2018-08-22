import { cons } from 'hexlet-pairs';
import game from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const makeNumber = () => Math.floor(Math.random() * 100 + 1);

const isEven = n => n % 2 === 0;

const setQuestionAndAnswer = () => {
  const question = makeNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, rightAnswer);
};

const brainGameEven = () => game(rules, setQuestionAndAnswer);

export default brainGameEven;
