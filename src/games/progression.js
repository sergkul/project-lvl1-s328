import { cons } from 'hexlet-pairs';
import { randomNumber } from '../utils';
import game from '..';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const setQuestionAndAnswer = () => {
  const firstElement = randomNumber(1, 99);
  const step = randomNumber(1, 10);
  const guessedNumberIndex = randomNumber(1, progressionLength);
  let question = '';

  for (let i = 1; i <= progressionLength; i += 1) {
    const currentElement = firstElement + step * (i - 1);
    if (i !== guessedNumberIndex) {
      question += `${currentElement} `;
    } else {
      question += '.. ';
    }
  }

  const rightAnswer = firstElement + step * (guessedNumberIndex - 1);

  return cons(question, rightAnswer);
};

const brainGameProgression = () => game(description, setQuestionAndAnswer);

export default brainGameProgression;
