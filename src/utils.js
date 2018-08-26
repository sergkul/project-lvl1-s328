const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const concatString = (num, amount) => {
  let result = '';

  for (let i = 0; i < amount; i += 1) {
    result += String(num);
  }

  return result;
};

export { randomNumber, concatString };
