import readlineSync from 'readline-sync';

export const greetUser = () => {
   readlineSync.question('Welcome to the Brain Games!');
   const name = readlineSync.question('May I have your name? ');
   readlineSync.question('Hello, ' + name + '!');
}
