import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const rules = 'Balance the given number.';

const concatString = (num, amount) => {
  let result = '';

  for (let i = 0; i < amount; i += 1) {
    result += String(num);
  }

  return result;
};

const getBalancedNumber = (number) => {
  const str = String(number);
  const amountOfDigits = str.length;
  let balancedString = '';
  let sumOfDugits = 0;

  for (let i = 0; i < amountOfDigits; i += 1) {
    sumOfDugits += Number(str[i]);
  }

  const oneDigit = Math.floor(sumOfDugits / amountOfDigits);
  const remainder = sumOfDugits % amountOfDigits;

  if (remainder === 0) {
    balancedString = concatString(oneDigit, amountOfDigits);
  } else {
    const otherDigit = oneDigit + 1;
    const amountOfOneDigit = amountOfDigits - remainder;

    balancedString = concatString(oneDigit, amountOfOneDigit);
    balancedString += concatString(otherDigit, remainder);
  }

  return balancedString;
};

const setQuestionAndAnswer = () => {
  const question = randomNumber(10, 9999);

  const rightAnswer = getBalancedNumber(question);

  return cons(question, rightAnswer);
};

const brainGameBalance = () => game(rules, setQuestionAndAnswer);

export default brainGameBalance;
