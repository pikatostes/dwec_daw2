    /*
    KC_EJ11
    Crear un programa que reciba 3 números e indique cuál es el mayor y el menor.
    */
    function calcularMenMay() {
        let num1 = parseInt(document.getElementById("num1").value)
        let num2 = parseInt(document.getElementById("num2").value)
        let num3 = parseInt(document.getElementById("num3").value)
  
        let mayor = num1;
  
        if (num2 > mayor) {
          mayor = num2;
        }
  
        if (num3 > mayor) {
          mayor = num3;
        }
  
        // Verificar cuál es el número menor
        let menor = num1;
  
        if (num2 < menor) {
          menor = num2;
        }
  
        if (num3 < menor) {
          menor = num3;
        }
  
        document.getElementById("res").innerHTML = 'El numero menor es: <span style="color: red;">' + menor + '</span>'
        document.getElementById("res2").innerHTML = 'El numero mayor es: <span style="color: red;">' + mayor + '</span>';
      }
  