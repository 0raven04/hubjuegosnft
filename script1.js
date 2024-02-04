function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí puedes realizar la lógica de validación de inicio de sesión
    // Por ejemplo, comparar con credenciales almacenadas o hacer una llamada a un servidor

    if (username === 'username' && password === 'password') {

            // Puedes realizar acciones aquí al hacer clic en el botón "Start Game"
            // Por ejemplo, redirigir a otra página HTML.
            window.location.href = "index.html";
        
    } else {
        alert('Credenciales incorrectas');
    }
}

  
  