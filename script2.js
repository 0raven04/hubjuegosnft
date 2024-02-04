var score = 0;
var combo = 0;
var fallos = 0;
var intervalID;
var notesInMotion = [];
var juegoActivo = true;

function startGame() {
    intervalID = setInterval(function () {
        if (juegoActivo) {
            var laneNum = Math.floor(Math.random() * 5) + 1;
            var lane = document.getElementById('lane' + laneNum);
            createNote(lane);
        }
    }, 1000);
}

function moveNote(note) {
    var top = note.offsetTop;
    if (top < 580) {
        note.style.top = (top + 1) + 'px';
        requestAnimationFrame(function () {
            moveNote(note);
        });
    } else {
        note.parentNode.removeChild(note);
        notesInMotion.splice(notesInMotion.indexOf(note), 1);
        if (note.classList.contains('hit')) {
            updateScore();
        } else {
            updateCombo(false);
            updateFallos();
        }
        cancelAnimationFrame(note.animationFrame);
    }
}

function createNote(lane) {
    var note = document.createElement('div');
    note.classList.add('note');
    lane.appendChild(note);
    notesInMotion.push(note);
    moveNote(note);
}

setInterval(function () {
    if (juegoActivo && fallos < 5) {
        var laneNum = Math.floor(Math.random() * 5) + 1;
        var lane = document.getElementById('lane' + laneNum);
        createNote(lane);
    }
}, 1000);

function updateScore() {
    score++;
    combo++;
    var puntuacionCombo = score * combo;
    var scoreDisplay = document.getElementById('score');
    scoreDisplay.innerText = 'Puntuación: ' + puntuacionCombo;
    updateCombo(true);
}

function mostrarMensajePerder() {
    document.getElementById('perderContainer').style2.display = 'block';
}

function ocultarMensajePerder() {
    document.getElementById('perderContainer').style2.display = 'none';
}

function updateCombo(success) {
    if (success) {
        if (combo % 10 === 0 && combo > 0) {
            console.log('¡Combo x' + combo + '!');
        }
    } else {
        combo = 0;
        console.log('¡Combo perdido!');
    }
    var comboDisplay = document.getElementById('comboDisplay');
    comboDisplay.innerText = 'Combo: ' + combo;
}

function updateFallos() {
    fallos++;
    console.log('Fallos: ' + fallos);
    if (fallos >= 5) {
        mostrarMensajePerder();
        console.log('¡Juego perdido! Reiniciando...');
        juegoActivo = false; // Desactivar el juego cuando se pierde
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    score = 0;
    combo = 0;
    fallos = 0;
    document.getElementById('score').innerText = 'Puntuación: 0';
    document.getElementById('comboDisplay').innerText = 'Combo: 0';
    clearInterval(intervalID);
    notesInMotion.forEach(function(note) {
        note.parentNode.removeChild(note);
    });
    notesInMotion = [];
    startGame();
}

document.getElementById('reiniciarJuego').addEventListener('click', function () {
    reiniciarJuego();
});

window.addEventListener('keydown', function (event) {
    var key = event.key;
    var laneNum;

    switch (key) {
        case 'd':
            laneNum = 1;
            break;
        case 'f':
            laneNum = 2;
            break;
        case ' ':
            laneNum = 3;
            break;
        case 'j':
            laneNum = 4;
            break;
        case 'k':
            laneNum = 5;
            break;
        default:
            return;
    }

    var lane = document.getElementById('lane' + laneNum);
    var notes = lane.getElementsByClassName('note');

    if (notes.length > 0 && notes[0].offsetTop > 550) {
        notes[0].classList.add('hit');
        updateScore();
        console.log('Puntaje: ' + score);
    }
});

document.getElementById('configButton').addEventListener('click', function () {
    toggleConfigMenu();
});

function toggleConfigMenu() {
    var configContainer = document.getElementById('configContainer');
    configContainer.style.display = (configContainer.style.display === 'none') ? 'block' : 'none';
}

function stopGame() {
    clearInterval(intervalID);
    notesInMotion.forEach(function (note) {
        note.parentNode.removeChild(note);
    });
    notesInMotion = [];
}

function ajustarVelocidad(factor) {
    stopGame();  
    intervalID = setInterval(function () {
        var laneNum = Math.floor(Math.random() * 5) + 1;
        var lane = document.getElementById('lane' + laneNum);
        createNote(lane);
    }, 1000 / factor);
    toggleConfigMenu();
}

startGame();
