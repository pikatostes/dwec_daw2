/*
KC_EJ07
Crea un programa que solicite tres notas y calcule su media. Dependiendo del valor de la media, mostrará si el resultado es Apto o No Apto.
*/

function calcularMedia() {
    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);

    let media = parseFloat((nota1 + nota2 + nota3) / 3);

    if (media >= 5) {
        document.write("Usted es apto");
    } else {
        document.write("Usted no es apto");
    }
}