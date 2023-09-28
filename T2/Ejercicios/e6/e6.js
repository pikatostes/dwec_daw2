/*
  KC_EJ06
  Crea un programa que solicite dos números y muestre los resultados de aplicar comparaciones relacionales.
*/

function calcularResultados() {
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
  
    var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
  
    resultados.innerHTML += n1 + " < " + n2 + " = " + (n1 < n2) + "<br>";
    resultados.innerHTML += n1 + " > " + n2 + " = " + (n1 > n2) + "<br>";
    resultados.innerHTML += n1 + " y " + n2 + " son iguales = " + (n1 === n2) + "<br>";
    resultados.innerHTML += n1 + " y " + n2 + " son distintos = " + (n1 !== n2) + "<br>";
  }
  