/* 
Conditionals
- Conditionals are used for decision making
- Tools we have available are the following
  - if statement
  - if else statement
  - if else if statement
  - switch
  - ternary
*/

var currentTime = 15;
var greeting = "";


// ! If statement

if (currentTime < 12) {
  // ? block of code that gets executed if the conditional is true
  // console.log(`Good Morning`);
  greeting = `Good Morning`;
}


// ! If else statement

if (currentTime < 12) {
  // ? block of code that gets executed if the conditional is true
  // console.log(`Good Morning`);
  greeting = `Good Morning`;
} else {
  // ? block of code gets executed if the first conditional is not true
  // console.log(`Good Afternoon`);
  greeting = `Good Afternoon`;
}


// ! If - else if statement
// TODO: between the hours of 12-17 store in greeting `Good Afternoon`. Anything above 17 gets greeting is `Good Evening

if (currentTime < 12) {
  // ? block of code that gets executed if the conditional is true
  // console.log(`Good Morning`);
  greeting = `Good Morning`;
} else if (currentTime > 12 && currentTime <= 5) {
  // ? block of code gets executed if the first conditional is not true
  // console.log(`Good Afternoon`);
  greeting = `Good Afternoon`;
} else {
  // ? Final else statement can be viewed as the default, is run if nothing matches
  greeting = `Good Evening`;
}

console.log(greeting);


// ! Code Refactoring

var isLightBulbOn = false;

// Truthy

if (isLightBulbOn === true) {
  console.log("Yes the light bulb is on!");
}

// ? refactor code to :

if (isLightBulbOn) {
  console.log("Yes the light bulb is on!");
}

// Falsey

if (isLightBulbOn != true) {
  console.log("the light bulb is off");
}

// ? refactor code to :

if (!isLightBulbOn) {
  console.log("the light bulb is iff");
}

var today = new Date();
console.log(today.getSeconds());
// var currentSeconds = 22;
var currentSeconds = today.getSeconds();

//if statement to determine if the currentSeconds is even or odd
if (currentSeconds % 2 === 0) {
  console.log(`The current second is ${currentSeconds} and it is even`);
} else {
  console.log(`The current second is ${currentSeconds} and it is odd`);
}


// ! Ternary Statements

var birthDate = new Date();
var age = 20;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

// ? 1. Conditional
// ? 2. If true
// ? 3. If false
// ! (1)                     (2)                              (3)
age >= 18 ? console.log("T: you can vote") : console.log("T: you can not vote");

// TODO Ternary continued
// check a quick condition, like an on or off switch

let flag = false; //this determines whether to display a component

//traditional way to do it
if (flag) {
  console.log("<Signup />");
} else {
  console.log("<Login />");
}

// Ternary Syntax
//?  condition ? statement if true : statement if false;

flag ? console.log("<Signup />") : console.log("<Login />");

//Conditional without an else
if (true) {
  console.log("true condition");
}

//Equivalent ternary
true ? console.log("ternary true condition") : null; //add a null if there is no else

//Chaining Ternaries
// ? Maybe don't do this though lol

let temp = 72;

if (temp >= 72) {
  console.log("it's summer");
} else if (temp >= 62) {
  Etc;
}

//colons become elses
temp >= 72
  ? console.log("it's summer")
  : temp >= 62
  ? console.log("it's fall")
  : temp >= 32
  ? console.log("it's winter")
  : null; //this is still needed

//you never want to go over about 80 characters in width


// ! Switch Statement

let month = "Jan";
let totalNumberofDays = 0;

switch (month) {
  case "Dec":
    totalNumberofDays = 31;
    break;
  case "Jan":
    totalNumberofDays = 31;
    break;
  case "Feb":
    totalNumberofDays = 28;
    break;
}

console.log(totalNumberofDays);

// * Between every case there needs to be a 'break;' or else the activated code will bleed over into the next case

// ? this is equivalent

let month = "Jan";
let totalNumberofDays = 0;

switch (month) {
  case "Dec": //if two cases have the same output, they can be stacked
  case "Jan":
    totalNumberofDays = 31;
    break;
  case "Feb":
    totalNumberofDays = 28;
    break;
  default:
    totalNumberofDays = "Month did not match";
}

console.log(totalNumberofDays);
