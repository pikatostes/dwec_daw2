let palabras = ["murciélago", "javascript", "alejandro", "corazón"];

let random = Math.floor(Math.random() * palabras.length);
let palabraSeleccionada = palabras[random];
let palabraAdivinada = new Array(palabraSeleccionada.length).fill("_");
let intentos = 0;

document.getElementById("res").textContent = "La palabra seleccionada es: " + palabraAdivinada.join(" ");

document.getElementById("letraInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let letra = document.getElementById("letraInput").value.toLowerCase();
        document.getElementById("letraInput").value = "";

        if (!letra.match(/[a-záéíóú]/)) {
            alert("Por favor, ingresa una letra válida.");
            return;
        }

        let letraEnPalabra = false;
        for (let i = 0; i < palabraSeleccionada.length; i++) {
            if (palabraSeleccionada[i].toLowerCase() === letra) {
                palabraAdivinada[i] = palabraSeleccionada[i];
                letraEnPalabra = true;
            }
        }

        if (!letraEnPalabra) {
            intentos++;
            document.getElementById("intentos").textContent = "Intentos: " + intentos;
            if (intentos >= 5) {
                alert("¡Has agotado tus intentos! La palabra era: " + palabraSeleccionada);
                location.reload(); // Reiniciar el juego
            }
        }

        document.getElementById("res").textContent = "La palabra seleccionada es: " + palabraAdivinada.join(" ");

        if (palabraAdivinada.join("") === palabraSeleccionada) {
            alert("¡Felicidades, has adivinado la palabra!");
            location.reload(); // Reiniciar el juego
        }
    }
});
