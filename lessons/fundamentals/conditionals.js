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
var greeting = '';

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
} else if (currentTime > 12 && currentTime <= 5){
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