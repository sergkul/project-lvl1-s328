import { cons } from 'hexlet-pairs';
import { randomNumber, concatString } from '../utils';
import game from '..';

const description = 'Balance the given number.';

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

const brainGameBalance = () => game(description, setQuestionAndAnswer);

export default brainGameBalance;
