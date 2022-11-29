const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

/* 
const readline = require("readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
*/

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

/* let respond = async () => { */
async function respond() {
  //Catch the ask with a variable, utilizing an await to resolve the promise
  let input = await ask('who are you?  ');
  console.log(`input was: ${input}`);
  let cleanInput = await input.trim().toLowerCase();
  console.log(`clean input: ${cleanInput}`)

  //we could also do the below with a loop over enemyList
  if (cleanInput == "darth vader") {
    readlineInterface.setPrompt(`No, That can't be. That's impossible! NOOOOOOOOOOO!!!\n`);
    readlineInterface.prompt();
    readlineInterface.close();
  } else if (enemyList.includes(cleanInput)) 
  /* Equivalent: (enemyList[0].includes(cleanInput)) */ {
    readlineInterface.setPrompt(`oh no enemy! Go away ${input} \n`);
    readlineInterface.prompt();
    readlineInterface.close();
  } else {
    readlineInterface.setPrompt(`Hello ${input}!! Thanks for not being an enemy :)\n`);
    readlineInterface.prompt();
    readlineInterface.close();
  }
}

respond()

// let fire = true
// Callback that fires respond only if some flag is set to true?

// let callback = () => {
//     fire ? respond() : null
// }

// callback()