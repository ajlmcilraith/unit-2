/* 
Types - Data Types

- Strings
- Boolean (true/false)
- Numbers
*/

/* 
Strings
- are datatypes used to represent text and are wrapped in single quotes, double quotes, or backtics
*/
var stringOne = "double quotes";
// prettier-ignore
var stringTwo ='single quotes';

var stringThree = `back ticks`;
//backticks are useful for if the inner text is going to change

// ? use a comma to separate two variables for printing to the console.
console.log(stringOne, stringTwo);

// ! adding strings together
// ? Example
// ! Problem is they are smashed together
console.log(stringOne + stringTwo); //output: 'double quotessingle quotes'
// ! The fix
console.log(stringOne + ' ' + stringTwo);
// ? 'Not very eye pleasing, maybe use backticks
console.log(`${stringOne} ${stringTwo}`); //output: double quotes single quotes

// ! CHALLENGE STRING
// ? Declare and Initialize a variable called greeting 
// ?    set it equal to "Good Afternoon"
// ? Declare and Initialize a variable called firstName
// ?    set it equal to "your name"
// TODO using backgticks console log the following 
// TODO     "Good Afgernoon Rob" with proper spacing


var greeting = 'Good afternoon';
var firstName = 'Alice';

console.log(
  `${greeting} ${firstName}`
)

// ! If you want to find out what type a variable is you can use typeof
console.log(typeof firstName);

var moneyOne = "20";
var moneyTwo = "10";

console.log (moneyOne + moneyTwo);
// ? Combining two or more strings is called concatenation

/* 
Numbers

*/

let currentTemp = 23;
console.log(currentTemp);

let calculatedTip = 50 * .25;
console.log(`tip = $${calculatedTip.toFixed(2)}`);

let numbersAreHard = (.2 * 10 + .1 * 12) /10; 
console.log(numbersAreHard);

// ! Convert Strings to Numbers
// ? 1. Number("number");

console.log(
  `Converting String to Number:`,
  Number(moneyOne) + Number(moneyTwo)
  ); //expected output: Converting String to Number: 30


// ? 2.  add a plus to the start of the variable
// ? ex: +moneyOne

console.log(+moneyOne + +moneyTwo); //expected output: 30


/* 
Booleans:
- Only has two possible values
-true of false
*/

var isOver21 = true;
console.log(`isOver21`, isOver21);
var isTeenager = false;
console.log(`isTeenager`, isTeenager);
console.log('typeof', typeof isOver21);

/* 
Null
- Null is an empty value
- Think of it as we have an empty container - nothing is in it but it exists as a space to fill later on
*/

var isLoggedIn = null;

/* 
Undefined
- No value is assigned and does not act as an empty container
*/

var myName
// ? because we did not assign a value the default is undefined

var myLastName = undefined; //you wouldn't normally do this

var myLastName = undefined;
var myAddress = "";
var notNumber = "string" / 15; //NaN
// ! Using Boolean we can check to see if a variable contains data
// undefined, null, 0, NaN, empty string quotes all produce a false with Boolean [variable]
console.log("undefined", Boolean(myLastName)); //undefined
console.log("null", Boolean(isLoggedIn)); //null
console.log("empty string", Boolean(myAddress)); //empty string

//this is a dummy comment