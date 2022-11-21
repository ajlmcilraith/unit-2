var dog1 = "Bulldog";
var dog2 = "bulLdOG";

var stringThree = "3";
var numberThree = 3;

console.log(dog1 == dog2); // false
console.log(dog1.toUpperCase == dog2.toUpperCase); // true

// ! two equals signs wil compare value and forces/ignores type
console.log("stringThree and numberThree with two equals signs returns", stringThree == numberThree);// true

// ! Three equals signs will compare Type and Value
console.log("stringThree and numberThree with three equals signs returns", stringThree === numberThree);// false

// ? three equals checks for type as well

// Not Operator
// != only looks at the value and doesn't care about the data type
console.log("not equal dog1 and dog2", dog1 != dog2);//true

console.log("stringThree and numberThree with != returns", stringThree != numberThree);// false

console.log("stringThree and numberThree with !== returns", stringThree !== numberThree);// true


//greater than >
console.log("10 greater than 2 returns", 10 > 2); //true

//less than <
console.log("10 less than 2 returns", 10 < 2); //false

//greater than or equal to >=
console.log("4 greater than or equal to 4 returns", 4 >= 4);//true

//less than or equal to <=
console.log("4 less than or equal to 4 returns", 4 <= 4);//true

//! greater/less than ignores type 
console.log(`less than or equal,`, '2'<= 4); //true


// Logical Operators

var num1 = 6;
var num2 = 3;
console.log(`And Operator`);
console.log(num1 < 10 && num2 > 1); //true
console.log(`Or Operator`);
console.log(num1 === 4 || num2 === 6); //false
console.log(num1 === 6 || num2 === 6); //true





