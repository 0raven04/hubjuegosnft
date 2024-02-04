function startGame() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var difficultyButtons = document.getElementsByName('difficulty');
    var difficulty;

    for (var i = 0; i < difficultyButtons.length; i++) {
        if (difficultyButtons[i].checked) {
            difficulty = difficultyButtons[i].value;
            break;
        }
    }

    if (username && password && difficulty) {
        // Realiza la lógica de inicio del juego con la dificultad seleccionada
        alert('Game started with difficulty: ' + difficulty);
    } else {
        alert('Completa todos los campos y selecciona una dificultad antes de empezar.');
    }
}


