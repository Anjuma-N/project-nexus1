function validateLogin() {
    const name = document.getElementById('contactname').value;
    const email = document.getElementById('contactemail').value;
    const password = document.getElementById('userpassword').value;
    const nameerror = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
  
    // reset error messages
    nameerror.textContent ='';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    // name validation
    if (!name || !name.trim()) {
      nameerror.textContent = 'Name is required';
      return;
    }
  
    // Simple name format check
    const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      nameerror.textContent = 'First & Last Name';
      return;
    }
     
    // Email validation
    if (!email || !email.trim()) {
      emailError.textContent = 'Email is required';
      return;
    }
  
    // Simple email format check
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Invalid email format';
      return;
    }
  
    // Password validation
    if (!password || password.length < 8) {
      passwordError.textContent = 'Enter a strong Password';
      return;
    }
  
    // Additional login logic can be added here
    alert("Well !! Signup now!");
  }