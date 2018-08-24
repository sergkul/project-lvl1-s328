import { cons } from 'hexlet-pairs';
import randomNumber from '../utils';
import game from '..';

const rules = 'Balance the given number.';

const getMinDigitIndex = (str) => {
  let minNumberIndex = 0;
  let minNumber = str[minNumberIndex];

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] < minNumber) {
      minNumberIndex = i;
      minNumber = str[i];
    }
  }

  return minNumberIndex;
};

const getMaxDigitIndex = (str) => {
  let maxNumberIndex = 0;
  let maxNumber = str[maxNumberIndex];

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] > maxNumber) {
      maxNumberIndex = i;
      maxNumber = str[i];
    }
  }

  return maxNumberIndex;
};

const getBalancedNumber = (str) => {
  const iter = (current, accumulator) => {
    if (current.length === 0) return accumulator;

    let currentString = '';

    const minDigitIndex = getMinDigitIndex(current);
    const minDigit = current[minDigitIndex];

    for (let i = 0; i < current.length; i += 1) {
      if (i !== minDigitIndex) currentString += current[i];
    }

    return iter(currentString, `${accumulator}${minDigit}`);
  };

  return iter(str, '');
};

const getPreBalancedNumber = (str) => {
  let balancedString = '';
  const maxDigitIndex = getMaxDigitIndex(str);
  const minDigitIndex = getMinDigitIndex(str);

  if (str[maxDigitIndex] - str[minDigitIndex] <= 1) return str;

  for (let i = 0; i < str.length; i += 1) {
    if (i === minDigitIndex) {
      balancedString += String(Number(str[minDigitIndex]) + 1);
    } else if (i === maxDigitIndex) {
      balancedString += String(Number(str[maxDigitIndex]) - 1);
    } else {
      balancedString += str[i];
    }
  }

  return getPreBalancedNumber(balancedString);
};

const setQuestionAndAnswer = () => {
  const question = String(randomNumber(10, 9999));

  const rightAnswer = getBalancedNumber(getPreBalancedNumber(question));

  return cons(question, rightAnswer);
};

const brainGameBalance = () => game(rules, setQuestionAndAnswer);

export default brainGameBalance;
