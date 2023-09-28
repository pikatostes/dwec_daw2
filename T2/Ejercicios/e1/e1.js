/*
    KC_EJ01
    Crea un programa por el cual se solicite al usuario el radio de un círculo. 
    El programa deberá calcular y mostrar el área.
    */
function calcRad() {
    let r = parseInt(document.getElementById("r").value);

    const pi = 3.1416

    let area = pi * Math.pow(r, 2);

    document.getElementById("res").innerHTML = "El circulo tiene un area de: " + area;
}