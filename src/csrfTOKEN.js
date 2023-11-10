function getCSRFToken() {
    const name = "_csrf="; // Verify that this matches the name used in your application
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    console.log("CSRF Token not found."); // Add this line for debugging
    return null;
  }
  
  // Registering the CSRF token retrieval function
  export function returnCsrfToken() {
    return getCSRFToken();
  }