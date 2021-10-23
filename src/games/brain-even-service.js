import readlineSync from 'readline-sync';
import {
  checkEven, generateRandNum, runGame, showLog,
} from '../helpers/helper.js';

export default function () {
  const logic = () => {
    const randNum = generateRandNum(1, 10);
    const even = checkEven(randNum);

    showLog(`Question: ${randNum}`);
    const answer = readlineSync.question('How do you like it? ', {
      trueValue: ['yes', 'y'],
      falseValue: ['no', 'n'],
    });
    return [even, answer];
  };

  runGame(logic);
}
