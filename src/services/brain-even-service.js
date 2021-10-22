import readlineSync from 'readline-sync';
import greetUser from '../cli.js';

const generateRandNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const checkEven = (n) => !(n % 2);

const showText = (text) => readlineSync.question(text);

function playParityCheckGame() {
  let count = 0;
  let userName;

  const runGame = () => {
    do {
      if (count === 0) { // если это первый цикл
        userName = greetUser(); // устанавливаем имя
        showText('Answer "yes" if the number is even, otherwise answer "no".'); // правила игры
      }
      count += 1;

      const randNum = generateRandNum(1, 10);
      const even = checkEven(randNum);

      showText(`Question: ${randNum}`);
      const answer = readlineSync.question('How do you like it? ', {
        trueValue: ['yes', 'y'],
        falseValue: ['no', 'n'],
      });
      if (answer !== even) {
        return showText(`${answer} is wrong answer ;(. Correct answer was ${even}.`);
      }
      if (count === 3) return showText(`Congratulations, ${userName}!`);
      showText('Correct!');
    } while (count < 3);
    return null;
  };
  runGame();
}
export default playParityCheckGame;
