
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const isRampNumber = (number) => {
return number
  // Your code here

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('whatNumber', (answer) => {
    console.log( isRampNumber(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C


if(typeof describe === `function`) {
  describe(`#isRampNumber`, ()=> {
    it('should return false for non-ramp numbers', () => {
      assert.equal(isRampNumber(1032), false);
      assert.equal(isRampNumber(1528), false);
      assert.equal(isRampNumber(789), true);
    }); 
  }) 
} else {
  getPrompt()
}


   







// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
