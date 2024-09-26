document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Fetch form data
    const formData = new FormData(this);
    const username = formData.get('username');
    const password = formData.get('password');
    
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // Validate username and password
    if (storedUser && storedUser.username === username && storedUser.password === password) {
        // Redirect to appropriate dashboard based on user role
        const userRole = storedUser.role;
        if (userRole === 'admin') {
            window.location.href = 'admin_dashboard.html';
        }else if (userRole === 'manager') {
            window.location.href = 'manager_dashboard.html';
        } 
        else if (userRole === 'member') {
            window.location.href = 'member_dashboard.html';
        } else {
            alert('Invalid role');
        }
    } else {
        alert('Invalid username or password');
    }
});
