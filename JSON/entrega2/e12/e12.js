// Función para verificar si un número es casi primo
function esCasiPrimo(numero) {
    if (numero < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Función para crear la tabla y asignar números únicos
  function crearTabla() {
    const tabla = document.getElementById('tabla');
    let contador = 1;
  
    for (let i = 0; i < 100; i++) {
      const fila = tabla.insertRow(i);
      for (let j = 0; j < 100; j++) {
        const celda = fila.insertCell(j);
        celda.textContent = contador++;
      }
    }
  }
  
  // Función para resaltar los números casi primos
  function resaltarCasiPrimos() {
    const celdas = document.querySelectorAll('td');
    celdas.forEach(celda => {
      const numero = parseInt(celda.textContent);
      if (esCasiPrimo(numero)) {
        celda.classList.add('casi-primo');
      }
    });
  }
  
  // Función principal al hacer clic en el botón
  function calcularCasiPrimos() {
    resaltarCasiPrimos();
  }
  
  // Evento al cargar la página
  window.onload = function() {
    const calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', calcularCasiPrimos);
  
    crearTabla();
  };
  