const urlParams = new URLSearchParams(window.location.search);
const selectedGame = urlParams.get('selectedGame');
const selectedCharacter = urlParams.get('selectedCharacter');

// Realizar acciones específicas según el juego seleccionado
if (selectedGame === 'Piano.html') {
    // Código para el juego 1
    console.log("Juego 1 seleccionado");
} else if (selectedGame === 'rompecabezas.html') {
    // Código para el juego 2
    console.log("Juego 2 seleccionado");
}