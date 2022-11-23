/* 
Loops
- They offer a quick and easy way to do something repeatedly
- There are many kinds of loops
  - For Statements
  - Do While Statements
  - While Statements
 */

// ! DANGER: there is a danger in being stuck in an infinite loop

// TODO if you're stuck in 'node' use 'cmd+c'

/* 
  
? 1. sets the variable before the loop starts
? 2. defines the condition of the loop to run (example below, it's going to run until i reaches 10)
? 3. Increases the value of i each time the code block is executed in the loop
*/
// *    (1)         (2)    (3)
/* for (let i = 0; i <= 10; i++) {
  console.log(i);
} */

let city = "San Francisco"
/* to print a letter from the string assigned to city, */console.log(city[/* character index starting at 0 */ 0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);

// * To loop through the city and print out the letters:
for (let i = 0; i < city.length; i++ ) {
  console.log(city[i]);
}

// ? Create a for loop that starts at 1 and goes to 100
// ? Insert an if statement inside the for loop to only log(i) if it is even

for (let i= 1; i <= 100; i++) {
  if (i % 2 == 0 ) {
   console.log(i);
  }
}

// * to do this without modulus (%)
for (let i = 0; i <= 100; i = i + 2) {
  console.log(i);
  if (i == 10) {
    break;
  }
}


// ! While Loop

/* 
* this will loop through the code block as long as the condition is true
? 1. Keyword While
? 2. Conditional
*/
let i = 0
while(i <= 10) {
  console.log(i);
  i++;
}

/* 
While loop for 1-31 days of December
*/

i = 1;
let total = 0; //declared outide of the block scope
while (i <= 31) {
  total = total + 1 //js searches outside of the loop iff the variable isn't declared inside the loop
}
console.log(`total money collecte in the month is ${total} dollars`) ;