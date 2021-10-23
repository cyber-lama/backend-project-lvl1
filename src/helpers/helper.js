import readlineSync from 'readline-sync';

export const showLog = (text) => {
  console.log(text);
};

export const makeQuestion = (text) => readlineSync.question(text);

export const greetUser = () => {
  showLog('Welcome to the Brain Games!');
  const name = makeQuestion('May I have your name? ');
  showLog(`Hello, ${name}!`);
  return name;
};

export const generateRandNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const generateRandOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[generateRandNum(0, 2)];
};

export const checkEven = (n) => !(n % 2);

export const runGame = (logic) => {
  let count = 0;
  let userName;
  do {
    if (count === 0) { // если это первый цикл
      userName = greetUser(); // устанавливаем имя
      showLog('What is the result of the expression?');
    }
    count += 1;
    const [result, answer] = logic();

    if (result !== answer) {
      return showLog(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
    }
    if (count === 3) return showLog(`Congratulations, ${userName}!`);
    showLog('Correct!');
  } while (count < 3);
  return null;
};
