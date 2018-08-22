import { cons } from 'hexlet-pairs';
import game from '..';

const rules = 'What is the result of the expression?.\n';

const randomNumber = limit => Math.floor(Math.random() * limit);

const operationsAmount = 3;

const setQuestionAndAnswer = () => {
  const operationTypeId = randomNumber(operationsAmount);
  const num1 = randomNumber(100);
  const num2 = randomNumber(100);
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

const brainGameCalc = () => game(rules, setQuestionAndAnswer);

export default brainGameCalc;
