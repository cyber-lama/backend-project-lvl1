import readlineSync from 'readline-sync';
import {showLog} from "./helpers/helper.js";

const greetUser = () => {
  showLog('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ');
  showLog(`Hello, ${name}!`)
  return name;
};
export default greetUser;
