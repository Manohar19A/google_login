export function isLoggedIn() {
  
    let isLoggedIn = false;
    const userData = sessionStorage.getItem('login');
    if (userData) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
    return isLoggedIn;
  }