/*
  KC_EJ03
  Crea un programa que solicite una cantidad en Euros y muestre su equivalente en USD.
*/

function calcEur() {
    let euro = parseInt(document.getElementById("euro").value);

    let dolares = euro * 1.07;

    document.getElementById("res").innerHTML = 'EUR a USD: <span style="color: red;">' + dolares + '</span>';
}