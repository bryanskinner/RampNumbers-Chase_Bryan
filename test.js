'use strict';


// Your code here

function handleSubmit(event) {
  event.preventDefault(); 
  
  const form = event.target.form;
  const number = form.number.value;

  const result = numOfRampsBelow(Number(number));
  const output = document.getElementById('output');
  output.innerText = result;
}

// Checks if the inputted number is a ramp number, and if not returning false
function isRampNumber(number) {
  const integer = number.toString().split('');
  for (let i = 1; i < integer.length; i++) {
    if (integer[i] < integer[i - 1]) {
      return false;
    }
  }
  return true;
}

// Counts the number of ramp numbers below the inputted number
const numOfRampsBelow = (number) => {
  const integer = number.toString().split('');
  for (let i = 1; i < integer.length; i++) {
    if (integer[i] < integer[i - 1]) {
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



const getPrompt = () => {
    rl.question('whatNumber: ', (answer) => {
      console.log(numOfRampsBelow(answer));
      getPrompt();
    });
  }
  
  // Unit Tests
  // to use them run the command: npm test main.js
  // to close them ctrl + C
  if (typeof describe === 'function') {
    describe('#isRampNumber', () => {
      it('should return false for non-ramp numbers', () => {
        equal(isRampNumber(1032), false);
        equal(isRampNumber(1528), false);
        equal(isRampNumber(738), false);
      });
  
      it('should return true for ramp numbers', () => {
        equal(isRampNumber(1124), true);
        equal(isRampNumber(13569), true);
        equal(isRampNumber(0), true);
        equal(isRampNumber(11111), true);
      });
  
      it('should return the number of ramp numbers less than the given number, and a message string', () => {
        equal(numOfRampsBelow(123), 'This is a Ramp Number. There are 65 total ramp numbers less than 123');
        equal(numOfRampsBelow(456), 'This is a Ramp Number. There are 171 total ramp numbers less than 456');
        equal(numOfRampsBelow(4578), 'This is a Ramp Number. There are 620 total ramp numbers less than 4578');
      });
    });
  } else {
    // attach the handleSubmit function to the submit button's onclick event
    const submitButton = document.getElementById('submit');
    submitButton.onclick = handleSubmit;
  }