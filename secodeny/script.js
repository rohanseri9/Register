function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'example' && password === 'password') {
        document.getElementById('message').innerText = 'Login successful!';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
    }
}