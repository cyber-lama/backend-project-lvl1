import readlineSync from 'readline-sync';

const greetUser = () => {
  readlineSync.question('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  readlineSync.question(`Hello, ${name}!`);
  return name;
};
export default greetUser;
