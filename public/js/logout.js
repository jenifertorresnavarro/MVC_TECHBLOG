// logout function to send request to log out the user
const chessLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/'); // when successful, load the homepage
    } else {
      alert('Failed to log out.'); // when unsuccessful, show alert
    }
  };
  // event listener 
  const chessLogoutButton = document.querySelector('#chess-logout');
  if (chessLogoutButton) {
    chessLogoutButton.addEventListener('click', chessLogout);
  }