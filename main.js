
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
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

const getPrompt = () => {
  rl.question('whatNumber', (answer) => {
    console.log(isRampNumber(answer))
    getPrompt()
  })
}

if (typeof describe === 'function') {
  describe('#isRampNumber()', () => {
    it('should translate a simple word', () => {
      assert.equal(isRampNumber(123345), 123345);
      assert.equal(isRampNumber(123346), false);
    });
  });
} else {
  getPrompt();
}