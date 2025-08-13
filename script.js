document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
  
    let nameError = document.querySelector('#name + .error');
    let emailError = document.querySelector('#email + .error');
    let messageError = document.querySelector('#message + .error');
    let successMsg = document.querySelector('.success');
  
    let valid = true;
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.style.display = "none";
  
    // Validate name
    if (name === "") {
      nameError.textContent = "Name is required";
      valid = false;
    }
  
    // Validate email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailError.textContent = "Email is required";
      valid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email";
      valid = false;
    }
  
    // Validate message
    if (message === "") {
      messageError.textContent = "Message is required";
      valid = false;
    }
  
    if (valid) {
      successMsg.style.display = "block";
      document.getElementById('contactForm').reset();
    }
  });
  