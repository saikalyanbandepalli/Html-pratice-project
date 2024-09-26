let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registrationForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    const role = this[2].value;

    if (users.some(user => user.username === username)) {
        alert('User already exists!');
        return;
    }

    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;
    
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect based on user role
        if (user.role === 'admin') {
            window.location.href = 'admin_dashboard.html'; // Admin/PM dashboard
        } else if (user.role === 'project_manager'){
            window.location.href = 'manager_dashboard.html'
        } else if (user.role === 'team_member') {
            window.location.href = 'member_dashboard.html'; // Team member dashboard
        }
    } else {
        alert('Invalid username or password.');
    }
});

window.onload = function () {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
        document.getElementById('userRole').innerText = `Welcome, ${user.username}. Role: ${user.role}`;
    }
};


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.createTextNode(data));
}


document.querySelectorAll('[draggable="true"]').forEach((task, index) => {
    task.id = `task${index + 1}`;
});