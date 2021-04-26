console.log('hello world');

window.addEventListener('load', () => {
    document.getElementById('button1').addEventListener('click', () => {
        let username = document.getElementById('username').value;
        document.getElementById('username').value = '';
        let password = document.getElementById('password').value;
        document.getElementById('password').value = '';
        if (username && password !== '') {
            console.log(username, password);
            window.location.href = "http://localhost:3000/performance/performer/" + username;
        }
    });
});