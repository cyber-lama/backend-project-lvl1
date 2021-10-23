import {
  generateRandNum, generateRandOperator, makeQuestion, runGame, showLog,
} from '../helpers/helper.js';

export default function () {
  const logic = () => {
    const firstRandNum = generateRandNum(1, 10);
    const secondRandNum = generateRandNum(1, 10);
    const randOperator = generateRandOperator();
    const result = eval(`${firstRandNum}${randOperator}${secondRandNum}`);
    showLog(`${firstRandNum}${randOperator}${secondRandNum}`);
    let answer = makeQuestion('Your answer: ');
    answer = Number(answer);
    return [result, answer];
  };

  runGame(logic);
}
