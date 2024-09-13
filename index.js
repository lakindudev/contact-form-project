document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    let isValid = true;
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const queryType = document.querySelector('input[name="query"]:checked');
    const checkbox = document.getElementById('checkbox').checked;
  
    // Validate First Name
    if (fname === "") {
      alert("First Name is required");
      isValid = false;
    }
  
    // Validate Last Name
    if (lname === "") {
      alert("Last Name is required");
      isValid = false;
    }
  
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address");
      isValid = false;
    }
  
    // Validate Query Type
    if (!queryType) {
      alert("Please select a query type");
      isValid = false;
    }
  
    
    // Validate Checkbox
    if (!checkbox) {
      alert("You must consent to being contacted");
      isValid = false;
    }
  
    // If all validations pass, you can proceed with form submission or other actions
    if (isValid) {
      alert("Form submitted successfully!");
      // Perform form submission or other actions here
    }
  });
  
