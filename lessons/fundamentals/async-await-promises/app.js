console.log("Promises Async Await Lesson")

function getInfo() {
  // ? works because return is immediate
  // return "Information"
  setTimeout(() => {
    return "Information"
  }, 3000);
}

let data = getInfo()
console.log(typeof data, data)

// ! Promises

/* 
* A promise is an object that may produce a singular value in the future

* Three States :
  * Pending (Unfinished)
  * Fulfilled (completed)
  * Rejected (Error)
*/
// declare     operator prototype?
let myPromise = new Promise ((resolve, reject) => {
  // let sum = 1 + 2
  // sum = 3 ? resolve("Success") : reject("Failed")
  setTimeout(() => {
    let sum = 1 + 2
    sum == 3 ? resolve("Success") : reject("Failed")
})
})

// ? promises always return objects 
console.log(typeof myPromise, myPromise)

myPromise 
  .then(resolveRejectMessage => {
    console.log (resolveRejectMessage)
  })
  .catch (resolveRejectMessage => {
    console.log(resolveRejectMessage)
    // console.log(`code after`)
  })
  // .finally(console.log(`Code that runs regardless`))//within the scope of the promise, this will run independent of the resolve/reject
  .finally (() => {
    console.log("after the promise has resolved or failed")
  })

  console.log("Code in global scope")

  // () => {functionality} // this is an arrow-declared call-back function

//?without arrow-declarations
  // myPromise
//     .then(function (valueIfResolved) {
//         console.log(valueIfResolved)
//     })
//     .catch(function (msg) {
//         console.log(msg)
//     })
//     .finally(function () {
//         console.log("Code after completion of the promise.")
//     })
    
const readLine = require("readLine")

const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })

// function askQuestion(question) {
//   return new Promise((resolve, reject => {
//     rl.question
//   }))
// }

// ? Asynchronous Functions (and using them to handle promises)

/* 
  * Introduced in ES8
  * A different way to write asychronous code
  * Uses async/await syntax to replace Promise resolve & reject
  
  ? Async Function Syntax:

  * async function myFunction() { }
  * let myFunction = async function() { }
  * let my = async () => { }
*/

function theOGFunction() {
  return "OG Function Value";
}

console.log(theOGFunction())

async function asyncFx() {
  return "Async fx value"
} 

console.log(asyncFx())//Async functions always return a promise

let resultOfAsyncFx =  asyncFx()

resultOfAsyncFx.then(data => console.log(data))//this will give the result of the function


// ? AWAIT

/* 

*/


async function getData() {
  let res = await fetch("https://api.spacexdata.com/v3/capsules")
  let data = await res.json()
  console.log(data)
}


getData()