import readlineSync from 'readline-sync';
import {
  checkEven, generateRandNum, greetUser, showLog,
} from '../helpers/helper.js';

export default function() {
  let count = 0;
  let userName;

  const runGame = () => {
    do {
      if (count === 0) { // если это первый цикл
        userName = greetUser(); // устанавливаем имя
        showLog('Answer "yes" if the number is even, otherwise answer "no".');
      }
      count += 1;

      const randNum = generateRandNum(1, 10);
      const even = checkEven(randNum);

      showLog(`Question: ${randNum}`);
      const answer = readlineSync.question('How do you like it? ', {
        trueValue: ['yes', 'y'],
        falseValue: ['no', 'n'],
      });
      if (answer !== even) {
        return showLog(`${answer} is wrong answer ;(. Correct answer was ${even}.`);
      }
      if (count === 3) return showLog(`Congratulations, ${userName}!`);
      showLog('Correct!');
    } while (count < 3);
    return null;
  };
  runGame();
}
