document.getElementById('gameForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    var selectedGame = document.getElementById('gameMenu').value;
    var selectedCharacter = document.querySelector('input[name="selectedCharacter"]:checked').value;
    
    // Redirigir a la página del juego con parámetros en la URL
    window.location.href = "game.html?selectedGame=" + selectedGame + "&selectedCharacter=" + selectedCharacter;
});