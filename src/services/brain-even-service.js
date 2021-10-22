import readlineSync from 'readline-sync';

const generateRandNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const checkEven = n => !(n % 2);

const showText = text => readlineSync.question(text);

let userName;
const greetUser = () => {
    readlineSync.question('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    readlineSync.question(`Hello, ${name}!`);
    userName = name;
};

let count = 1;
function playParityCheckGame () {
    const randNum = generateRandNum(1, 10);
    const even = checkEven(randNum);

    const aaa = () => console.log("sadasdasd")
    aaa();

    if(count === 1){ // если это первый цикл
        greetUser()
        showText('Answer "yes" if the number is even, otherwise answer "no".')
    }
    showText(`Question: ${randNum}`)
    const answer = readlineSync.question('How do you like it? ', {
        trueValue: ['yes', 'y'],
        falseValue: ['no', 'n']
    });
    if (answer !== even) {
        return showText(`${answer} is wrong answer ;(. Correct answer was ${even}.`)
    }
    if(count === 3) return showText(`Congratulations, ${userName}!`);
    showText("Correct!");
    count++;
    playParityCheckGame();
}
export default playParityCheckGame;