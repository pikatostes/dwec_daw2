/*
  KC_EJ09
  Crea un programa que reciba una cantidad, y pregunte si desea convertirla de Euros a USD o de USD a Euros y muestre el resultado de la conversión.
*/

function eurToUsd() {
    let cant = parseFloat(document.getElementById("cant").value);
    let resultado = cant * 1.07;
    document.getElementById("res").innerHTML = 'EUR a USD: <span style="color: red;">' + resultado + '</span>';
}

function usdToEur() {
    let cant = parseFloat(document.getElementById("cant").value);
    let resultado = cant * 0.93;
    document.getElementById("res").innerHTML = 'USD a EUR: <span style="color: red;">' + resultado + '</span>';
}