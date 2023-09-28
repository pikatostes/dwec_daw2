/*
  KC_EJ12
  Crear un programa que reciba una letra e indique si es vocal o consonante.
*/
function vocalCons() {
    let input = document.getElementById("letra");
    let letra = input.value.trim().toUpperCase();

    if (letra.length === 1 && letra.match(/[A-Z]/)) {
        if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
            document.getElementById("res").innerHTML = 'La letra es una: <span style="color: red;">vocal</span>';
        } else {
            document.getElementById("res").innerHTML = 'La letra es una: <span style="color: red;">consonante</span>';
        }
    } else {
        document.getElementById("res").innerHTML = 'Entrada inválida. Ingresa UNA sola LETRA del alfabeto.';
    }
}