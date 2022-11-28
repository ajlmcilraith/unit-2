console.log("Promises Async Await Lesson");

function getInfo() {
  // ? works because return is immediate
  // return "Information"
  setTimeout(() => {
    return "Information";
  }, 3000);
}

let data = getInfo();
console.log(typeof data, data);

// ! Promises

/* 
* A promise is an object that may produce a singular value in the future

* Three States :
  * Pending (Unfinished)
  * Fulfilled (completed)
  * Rejected (Error)
*/
// declare     operator prototype?
let myPromise = new Promise((resolve, reject) => {
  // let sum = 1 + 2
  // sum = 3 ? resolve("Success") : reject("Failed")
  setTimeout(() => {
    let sum = 1 + 2;
    sum == 3 ? resolve("Success") : reject("Failed");
  });
});

// ? promises always return objects
console.log(typeof myPromise, myPromise);

myPromise
  .then((resolveRejectMessage) => {
    console.log(resolveRejectMessage);
  })
  .catch((resolveRejectMessage) => {
    console.log(resolveRejectMessage);
    // console.log(`code after`)
  })
  // .finally(console.log(`Code that runs regardless`))//within the scope of the promise, this will run independent of the resolve/reject
  .finally(() => {
    console.log("after the promise has resolved or failed");
  });

console.log("Code in global scope");

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

const readLine = require("readLine");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function askQuestion(question) {
//   return new Promise((resolve, reject => {
//     rl.question
//   }))
// }

// !! Asynchronous Functions (and using them to handle promises)

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

console.log(theOGFunction());

async function asyncFx() {
  return "Async fx value";
}

console.log(asyncFx()); //Async functions always return a promise

let resultOfAsyncFx = asyncFx();

resultOfAsyncFx.then((data) => console.log(data)); //this will give the result of the function

async function getData() {
  let res = await fetch("https://api.spacexdata.com/v3/capsules");
  let data = await res.json();
  console.log(data);
}

getData();

// !! AWAIT

/* 
  ? Await
  
  * Tells our function that a value being returned is a promise
  * Tells our function that we must wait until the promise is fulfilled
*/

let dataBase = "SSSN: 123-45-6789"

let dataBaseCall = new Promise ((resolve, reject) {
  // dataBase ? resolve(dataBase) : reject("No data found")
  //this is equivalent to below
    setTimeout (() => { 
      if (dataBase) {
        resolve(dataBase)
    } else {
      reject("No data found")
  }
}, 3000);
})

//dataBaseCall.then(data => console.log(data)).catch(err => console.log(err))

async function displayData() {
  // ? later we will go over try and catch
  // try {
  //   let dataBaseResult = await dataBaseCall;
  //   console.log(dataBaseResult);
  // } catch (err) {
  //   console.log(err)
  // }
  let dataBaseResult = await dataBaseCall; //adding 'await' will wait before the promise of dataBaseCall has been resolved to assign it to dataBaseResult
  console.log(dataBaseResult);
}

displayData()

//some amount of error handling, e.g. implementing try and catch is good to have


/* 
async function displayData() {
    try {
        let dbResult = await dbCall
        console.log(dbResult)
        const h1 = document.createElement("h1")
        console.log(h1)
        h1.innerText = dbResult
        document.body.appendChild(h1)
    } catch (err) {
        console.log(err)
    }
}

displayData()

let arr = ["Paul", "John", "Adam"]

let newArr = arr.map(i => i)
newArr.push("Nick")
console.log(arr, newArr)

*/

