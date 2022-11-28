// ! Io & Callbacks

/* 
* Process is simply an event that currently runs in the foreground or background of our local machine

* Each one is given a PID or process id, a unique number

* Node.js allows access to its processes via a process object
*/

// ? Import statement 

let process = require("process"); //require is the import statement

console.log(process.pid)

process.stdin //readable stream that allows us to communicate with our device


// ! Callback functions

/* 

? A function that gets invoked when something occurs

A "listener" function that waits for an event and executes a function when it occurs


Takes two parameters:

  * event upon which to execute a function
  * function to be executed
*/

//? event listener

/* 
? A function/method that listens for an event to occur. When it happens, it triggers a callback function
? takes two parameters:

* event
* callback function
*/

process.stdin.once("data", function (input) {
  console.log(`This is our input being repeated: ${input.toString()}`)
  process.exit()
})

// .once will automatically invoke the function when the event occurs
//in this case the event is "data"

// process.stdin.once("data, (input) => {
//   console.log("This is our input being repeated", input.toString())
// })

process.stdin.once
//This is a listener

//echo "hello elena" | node io.js 
//this is using '|' to pipe the input "hello elena" into our funciton

process.stdin.on("data", function (input) {
  console.log(input.toString())//will work indefinitely
  process.exit()//will execute only once
})

// ? Back to funcitons event

// ? Function Declaration

// ? hoisted 
function nameOfFunction(parameter) {
  return parameter;
}

// ? Function Expressions 

// ? not hoisted

let fxExpression = function (parameter) {
  return parameter
}

// ? Arrow Function Expression

// ? ES6 version of concisely writing functions 
// ? not hoisted; not bound to .this or apply


// ? Concise body arrow function -> no curly braces
// ? In concise body arrow function return statement is implicit

/* 
1. declaration
2
*/



//  (1)       (2)        (3)(4)            (5)
// * let arrowFunction = () => console.log("arrow function")

// * let arrowFunction = parameter => console.log("arrow function")

// * let arrowFunction = (param1, param2) => console.log("arrow function")

// ! process.stdin.on("data", input => console.log(input.toString()))

// ? Block Body Arrow Function
// ? can have explicit return statements

let blockBodyfx = () => {
  console.log(`line 1`)
  console.log(`line 2`)
  return "example"
}

blockBodyfx()

// Example:

// process.stdin.on("data", input => console.log(input.toString()))

// ? Block Body Arrow Function

// let blockBodyFx = () => {
//     console.log("Line 1")
//     console.log("Line 2")
// }

// ? self-invoking functions

console.log("Testing");
(function() {
    console.log("IIFE")
}())

/* 
? Let's create a listener on stdin so that when we type something, it will reply with what we said plus some word
*/

let handleInput = input => {
  console.log(input.toString().trim() + ", Cheers!")
}

handleInput("Hello everyone!")

/* 
process.stdin.once("data", handleInput)//no '()' because we're not invoking it immediately. it's an event listener, so we pass 'by reference' with just the name
console.log("What is your name?")
process.stdin.on("data", (input) => {
  process.stdout.write(`The input is: ${input.toString()}`)
}) 
*/

// !! Guess the number hint

function guess(question) {
  console.log(question);
  let number;
  process.stdin.once("data", (input) => {
    number = input.toString().trim();
    process.stdout.write(`Your number was: ${number}`)
  })

  return number
}