/* 
! Functions

* - Functions provide a block of code that will only be ran when it is called upon
* - It starts with the keyword 'function' followed by the name that it is given
* - Functions do not need to have parameters
* - functions do not need to return a value but often do
*/

/* 
1. key word function
2. function name (camel casing rules)
3. No parameters are expected
*/

example1() // * functions get HOISTED!
// ? (1)    (2)      (3)
function example1() {
  // ? any code inside here will be ecevuted when the function is called
  console.log(`Example 1 function was executed`);
}

// !  You MUST call the function in order for it to be executed: functionName()
example1()

/* 
Function with Parameters


*/

function example2(param1, param2) {
  console.log(
    `Example 2 function was executed with 
    param1 = ${param1}
    and param2 = ${param2}`
  )
}

example2(1,2)

example2(`Alice`, `McIlraith`)

//create a function that will add two numbers and return the sum

function sumTwoNumbers(number1, number2) {
  return (number1 + number2);
}

console.log(sumTwoNumbers(1, 5))

let sum1 = sumTwoNumbers(15, 30);

console.log(sum1)

//write a function that will take the parameters of length, width, and height, and return the volume of a cuboid with those parameters

//store the returned value in a variable called volume1

function cuboid(length, height, width) {
  return length * height * width;
}

let volume1 = cuboid(3, 4, 5); 

