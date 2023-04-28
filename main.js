
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
      assert.equal(isRampNumber(738), false);
    }); 

    it('should return true for ramp numbers', () => {
      assert.equal(isRampNumber(1124), true);
      assert.equal(isRampNumber(13569), true);
      assert.equal(isRampNumber(0), true); // single-digit numbers are also ramp numbers
      assert.equal(isRampNumber(11111), true); // numbers with repeating digits are ramp numbers
    });

    it('should return the number of ramp numbers less than the given number, and a message string', () => {
      expect(numOfRampsBelow(123)).to.equal('65 total ramp numbers are less than 123');
      expect(numOfRampsBelow(456)).to.equal('150 total ramp numbers are less than 456');
      expect(numOfRampsBelow(7890)).to.equal('285 total ramp numbers are less than 7890');
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
