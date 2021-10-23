import readlineSync from "readline-sync";

export const showLog = (text) => {
  console.log(text)
}

export const makeQuestion = (text) => readlineSync.question(text);

export const greetUser = () => {
  showLog('Welcome to the Brain Games!')
  const name = makeQuestion('May I have your name? ');
  showLog(`Hello, ${name}!`)
  return name;
};

export const generateRandNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const checkEven = (n) => !(n % 2);

