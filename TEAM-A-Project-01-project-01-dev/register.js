document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form data
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');
    const email = formData.get('email');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const role = formData.get('role');
    
    // Create user object
    const user = {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        role: role
    };
    
    // Store user data in localStorage (this is for demonstration purposes; use a backend for real applications)
    localStorage.setItem('currentUser', JSON.stringify(user));

    alert('User Registered Successfully ');
    
    // Redirect to login page after successful registration
    window.location.href = 'login.html';
});
