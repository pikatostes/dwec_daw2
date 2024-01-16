
// Obtén el elemento del textarea y el span del contador
let textarea = document.getElementById("mensaje");
let contador = document.getElementById("contador");

// Función para actualizar el contador
function actualizarContador() {
    // Obtén la longitud actual del texto en el textarea
    let longitudActual = textarea.value.length;

    // Calcula los caracteres restantes
    let caracteresRestantes = 50 - longitudActual;

    // Actualiza el contador
    contador.textContent = caracteresRestantes;
}

// Actualiza el contador cada 100 milisegundos
setInterval(actualizarContador, 10);