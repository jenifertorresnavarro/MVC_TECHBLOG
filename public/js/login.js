// handler function for chess login form submission
const chessLoginFormHandler = async (event) => {
    event.preventDefault();
    // get the values of the username and password input fields
    const username = document.querySelector('#username-chess-login').value.trim();
    const password = document.querySelector('#password-chess-login').value.trim();
    // if the input fields have values
    if (username && password) {
          // send a POST request to the login endpoint with the input values as JSON data
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // if the request was successful, redirect to the homepage
      if (response.ok) {
        document.location.replace('/'); // When successful, load the homepage
      } else {
              // if the request was unsuccessful, show an alert
        alert('Failed to log in.'); // when unsuccessful, show alert
      }
    }
  };
  
  // event listener
  const chessLoginForm = document.querySelector('.chess-login-form');
  if (chessLoginForm) {
    chessLoginForm.addEventListener('submit', chessLoginFormHandler);
  }