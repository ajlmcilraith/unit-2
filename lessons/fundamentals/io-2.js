// ? Async functions
// * Readline

const readLine = require("readline")

let rl = readLine.createInterface({ input: process.stdin, output: process.stdout})

let num1 = Math.floor ( (Math.random() * 10) + 1)
console.log(num1)
let num2 = Math.floor ( (Math.random() * 10) + 1)
console.log(num1)
let solution = num1 + num2

rl.question(`What is the sum of ${num1} and ${num2}?`, (input) => {
  if (input.trim() == solution) {
    rl.setPrompt("Correct")
    rl.prompt()
    rl.close() //closes and sends '%'??
  }
})

rl.on("close", () => console.log("Thanks for playing"))


