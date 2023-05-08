function handleSubmit(event) {
    event.preventDefault(); // prevent the default form submission behavior
  
    // get the form data
    const form = event.target.form;
    const formData = new FormData(form);
  
    // do something with the form data
    // e.g. send it to the server using fetch or XMLHttpRequest
  
    console.log(formData); // log the form data to the console for debugging
  }
  
  // attach the handleSubmit function to the submit button's onclick event
  const submitButton = document.getElementById('submit');
  submitButton.onclick = submit;