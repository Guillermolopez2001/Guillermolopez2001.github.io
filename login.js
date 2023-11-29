
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'progra2' && password === 'progra22023') {
            message.innerHTML = '¡Inicio de sesión exitoso!';
            message.classList.remove('error');
            message.classList.add('success');
            setTimeout(() => {
                window.location.href = 'final.html'; // Redirigir a final.html
            }, 1000); // Redirigir después de 1 segundo
        } else {
            message.innerHTML = 'Nombre de usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.';
            message.classList.remove('success');
            message.classList.add('error');
        }
    });



