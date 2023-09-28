/*
      KC_EJ02
      Crea un programa que solicite dos números y muestre los resultados de todas sus operaciones aritméticas. 
    */

function calcNum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  let suma = num1 + num2;
  let res = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;

  // Utiliza += para agregar resultados en lugar de sobrescribir
  document.getElementById("res").innerHTML = "<p>" + num1 + " + " + num2 + " = " + suma + "</p>";
  document.getElementById("res").innerHTML += "<p>" + num1 + " - " + num2 + " = " + res + "</p>";
  document.getElementById("res").innerHTML += "<p>" + num1 + " * " + num2 + " = " + mult + "</p>";
  document.getElementById("res").innerHTML += "<p>" + num1 + " / " + num2 + " = " + div + "</p>";
}