const readline = require('readline');
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

let enemyList = ['darth vader', 'voldemort', 'palatine', 'lex luthor'];

async function respond() {
  let input = await ask('who are you?  ');
  console.log(`input was: ${input}`);
  let cleanInput = await input.trim().toLowerCase();
  console.log(`clean input: ${cleanInput}`)
  if (enemyList.includes(cleanInput)) {
      readlineInterface.setPrompt(`oh no enemy! Go away 
`);
      readlineInterface.prompt();
      readlineInterface.close();
    } else {
      readlineInterface.setPrompt(`hello ${input}!! Thanks for not being an enemy
`);
      readlineInterface.prompt();
      readlineInterface.close();
    }
  }

  respond()