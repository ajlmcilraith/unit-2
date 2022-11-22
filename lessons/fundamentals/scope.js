/* 
? Var vs Let
* - With the introduction of ES6 we now have keywords to use for variables "let" & "const"
! - You can not reference a variable before it is initialized using 'let'
! - When you declare a variable using 'var' you are able to use it but you get undefined
*/

var firstName = `Alice`;
// console.log(`the age is "${age}" before it is initialized`);
var age = 26; // ! var is global scoped
if (firstName == `Alice`) {
  console.log(`${age} before it is assigned`)
  let age = "something else declared with 'let'"; // ! let is block scoped
  console.log(`${firstName}'s age is ${age}`);
}
console.log(`Alice's age is still ${age}`);



// ! Another example of Scope

//const is block specific, 'block scoped', but not able to be changed
const greeting = `Hello`;
const PAGE_TITLE = "Christmas Wish List";

if (true) {
  const greeting = "Good bye";
  console.log(greeting);
}
console.log(greeting);