import {checkEven, generateRandNum, generateRandOperator, greetUser, showLog} from '../helpers/helper.js';
import readlineSync from "readline-sync";

export default function () {
  let count = 0;
  let userName;

  const runGame = () => {
    do {
      if (count === 0) { // если это первый цикл
        userName = greetUser(); // устанавливаем имя
        showLog('What is the result of the expression?');
      }
      count += 1;
      const firstRandNum = generateRandNum(1, 10)
      const secondRandNum = generateRandNum(1, 10)
      const randOperator = generateRandOperator()
      const result = eval(`${firstRandNum}${randOperator}${secondRandNum}`)
      showLog(`${firstRandNum}${randOperator}${secondRandNum}`)

      const answer = readlineSync.question('Your answer: ');
      if (Number(answer) !== result) {
        return showLog(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      }
      if (count === 3) return showLog(`Congratulations, ${userName}!`);
      showLog('Correct!');
    } while (count < 3);
    return null;
  };
  runGame();
}
