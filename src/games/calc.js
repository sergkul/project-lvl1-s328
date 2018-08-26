import { cons } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';

const description = 'What is the result of the expression?';

const operationsAmount = 3;

const setQuestionAndAnswer = () => {
  const operationTypeId = randomNumber(0, operationsAmount);
  const num1 = randomNumber(1, 100);
  const num2 = randomNumber(1, 100);
  let question = 0;
  let rightAnswer = '';

  switch (operationTypeId) {
    case 0:
      question = `${num1} + ${num2}`;
      rightAnswer = num1 + num2;
      break;
    case 1:
      question = `${num1} - ${num2}`;
      rightAnswer = num1 - num2;
      break;
    case 2:
      question = `${num1} * ${num2}`;
      rightAnswer = num1 * num2;
      break;
    default:
      break;
  }

  return cons(question, rightAnswer);
};

const brainGameCalc = () => game(description, setQuestionAndAnswer);

export default brainGameCalc;
