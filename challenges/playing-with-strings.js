var titanic = "titanic".toUpperCase();// Output: TITANIC
var quietly = "QUIETLY".toLowerCase();// Output: quietly
var java = "Java".repeat(10);// Output: JavaJavaJavaJavaJavaJavaJavaJavaJavaJava
var berryChar1 = "berry".charAt(1);// Output: e
var berryChar0 = "berry".charAt(0);// Output: b
var bananaNan = "banana".includes("nan");// Output: true
var bananaAna = "banana".endsWith("ana");// Output: ture
var blackAndBlueBerry = "blueberry".replace("blue", "black");// Output: blackberry

// ! Outputs!! 
console.log (
  `${titanic} 
${quietly}
${java}
${berryChar1}
${berryChar0}
${bananaNan}
${bananaAna}
${blackAndBlueBerry}`
)

// ? single quotes inside double
console.log (
  "This double quotes string has a 'single quotes' quote"
);

// ? double quotes inside single
//prettier-ignore
console.log (
  'This single quotes string has a "double quotes" quote'
);

// ? concatenating single quote string with double quote string and a backtick string
//prettier-ignore
console.log (
  'this is single quotes, and ' + "this is double quotes, and this is " + `backticks!!!`
);

// ? Using ${} to escape back to js inside of curly brackets
console.log (
  `Two plus two is ${2 + 2}`
);
