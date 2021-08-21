const { xit } = require("mocha");

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = tutorials.map( str => {
   const newString =  str.split(" ") + str[0].toUpperCase()
    return newString;
 })
 
 titleCased;
 


// const titleCased = tutorials.map( str => {
//   const newString = str.split(" ")
//   
// })
// 
// console.log(titleCased);