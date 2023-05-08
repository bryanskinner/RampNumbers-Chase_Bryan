function isRampNumber() {
    // Get the user input from the input field
    const userInput = parseInt(document.querySelector('input[type="number"]').value);
  
    // Check if the input is a positive integer
    if (isNaN(userInput) || userInput <= 0 || !Number.isInteger(userInput)) {
      // Display an error message if the input is not valid
      const yesNoDiv = document.querySelector('.yes_no');
      yesNoDiv.textContent = 'Please enter a positive integer.';
      yesNoDiv.classList.remove('yes');
      yesNoDiv.classList.remove('no');
      return;
    }
  
    // Count the number of ramp numbers up to the user input
    let count = 0;
    const rampNumbers = [];
    for (let i = 1; i <= userInput; i++) {
      const digits = i.toString().split('');
      let isRamp = true;
      for (let j = 0; j < digits.length - 1; j++) {
        if (parseInt(digits[j]) > parseInt(digits[j+1])) {
          isRamp = false;
          break;
        }
      }
      if (isRamp) {
        count++;
        rampNumbers.push(i);
      }
    }
  
    // Update the result container with the count and list of ramp numbers
    const yesNoDiv = document.querySelector('.yes_no');
    const resultCountDiv = document.querySelector('.result_count');
    const listContainer = document.querySelector('.list_container ul');
    if (count === 0) {
      yesNoDiv.textContent = 'NO';
      yesNoDiv.classList.remove('yes');
      yesNoDiv.classList.add('no');
      resultCountDiv.textContent = `There are no ramp numbers up to ${userInput}.`;
      listContainer.innerHTML = '';
    } else {
      yesNoDiv.textContent = 'YES';
      yesNoDiv.classList.remove('no');
      yesNoDiv.classList.add('yes');
      resultCountDiv.textContent = `There are ${count} ramp numbers up to ${userInput}:`;
      listContainer.innerHTML = rampNumbers.map(num => `<li>${num}</li>`).join('');
    }
  }