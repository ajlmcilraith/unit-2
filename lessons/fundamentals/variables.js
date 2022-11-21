/* 
Variables: 

- Variables are named containers for storing data and values 
- We can name variables anything (with a few exceptions)
- We use these variables to reference them ata later time. 
*/

/* 
You can start the variable declaration process with var, let, or const
- Variable Names in javascript should be camelCased: starts off lower-cased and each distinct word after it is capitalized. 
- e.g. currentLivingAddress, greenFrogLeg
*/


//prettier-ignore
var    firstName    =    'Alice';
//(1)   (2)         (3)     (4)

/* 
1 & 2 : variable declaration

1. Javascript Keyword to denote the creation of a variable (var, let,  const)
2. The name of the variable that the developer will reference in order to grab the value that is stored. 
3. Assignment Operator
4. Initial Value
*/

//Variables can be declared without a value
//prettier-ignore
// ? To Run a Javascript file in terminal - use command : node [filename.js]
// ? Example: node variables.js
// ? Or you can hit the play button at the top of the window to the left of the split
console.log('Hello from the console. log line: 27');
console.log('variable firstname:', firstName);

// ! Just Declared not assigned a value
var lastName;
console.log('Variable lastName:', lastName);
// ! Value is assigned
lastName = 'McIlraith';
console.log('Assigned variable lastName:', lastName);

let fruit = "Apple";
let snack = fruit;

console.log("fruit", fruit);

console.log("snack", snack);
fruit = "orange";
console.log("has snack changed", snack === fruit);//false, so no

