
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




  // Your code here

//* Checks if the inputed number is a ramp number, and if not returning false
  function isRampNumber(number) {
    const integer = number.toString().split('');
    for (let i = 1; i < integer.length; i++) {
      if (integer[i] < integer[i - 1]) {
        // const isFalse = `This is not a ramp number`
        // console.log(isFalse)
        return false;
      }
    }
    // const isTrue = `This is a ramp number`
    // console.log(isTrue)
    return true
  }
  
  
  //* Counts the number of ramp numbers below the inputed number
  const numOfRampsBelow = (number) => {
    const integer = number.toString().split('');
    for (let i = 1; i < integer.length; i++) {
      if (integer[i] < integer[i - 1]) {
        // const isFalse = `This is not a ramp number`
        // console.log(isFalse)
        return `This is not a ramp number`;
      }
    }

    let count = 0;
  
    for (let i = 0; i < number; i++) {
      if (isRampNumber(i)) {
        count++;
      }
    }
  
    const message = `This is a Ramp Number. There are ${count} total ramp numbers less than ${number}`;
    return message;
  }

  



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C


const getPrompt = () => {
  rl.question('whatNumber: ', (answer) => {
    console.log( numOfRampsBelow(answer));
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
      assert.equal(isRampNumber(0), true); 
      assert.equal(isRampNumber(11111), true); 
    });

    it('should return the number of ramp numbers less than the given number, and a message string', () => {
      assert.equal(numOfRampsBelow(123), 'This is a Ramp Number. There are 65 total ramp numbers less than 123');
      assert.equal(numOfRampsBelow(456), 'This is a Ramp Number. There are 171 total ramp numbers less than 456');
      assert.equal(numOfRampsBelow(4578), 'This is a Ramp Number. There are 620 total ramp numbers less than 4578');
    });

  }) 
} else {
  getPrompt()
}


  
