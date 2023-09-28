/*
KC_EJ08
Crear un programa que reciba un número entero y muestre si es par o impar, positivo o negativo, o cero.
*/

function numCalc() {
    let num = parseInt(document.getElementById("num").value);

    if (!isNaN(num)) {
        if (num % 2 === 0) {
            document.write("Es un numero par")
        } else {
            document.write("No es un numero par")
        }

        if (num > 0) {
            document.write("Es un numero positivo")
        } else if (num < 0) {
            document.write("Es un numero negativo")
        } else {
            document.write("El numero es 0")
        }
    } else {
        document.write("")
    }
}