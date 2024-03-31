document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
       
        if (username === 'user' && password === 'password') {
            window.location.href = 'landing.html'; 
        } else {
            alert('Invalid username or password');
        }
    });
    