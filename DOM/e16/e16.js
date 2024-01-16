function genera() {
    // Genera dos números aleatorios
    const numero1 = Math.floor(Math.random() * 100) + 1;
    const numero2 = Math.floor(Math.random() * 100) + 1;

    // Crea elementos <p> para los números y asigna los valores aleatorios
    const parrafo1 = document.createElement('p');
    const parrafo2 = document.createElement('p');
    parrafo1.appendChild(document.createTextNode(numero1));
    parrafo2.appendChild(document.createTextNode(numero2));

    // Obtiene las cajas donde se deben agregar los números
    const caja1 = document.getElementById('primero');
    const caja2 = document.getElementById('segundo');

    // Limpia el contenido actual de las cajas
    caja1.innerHTML = '';
    caja2.innerHTML = '';

    // Agrega los párrafos a las cajas correspondientes
    caja1.appendChild(parrafo1);
    caja2.appendChild(parrafo2);
  }

  function compara() {
    // Obtiene los números de las cajas
    const caja1 = document.getElementById('primero');
    const caja2 = document.getElementById('segundo');
    const numero1 = parseInt(caja1.textContent);
    const numero2 = parseInt(caja2.textContent);

    // Obtiene la caja de resultado
    const cajaResultado = document.getElementById('resultado');

    // Compara los números y mueve el párrafo con el número más grande a la caja de resultado
    if (numero1 > numero2) {
      // Mueve parrafo1 a cajaResultado
      cajaResultado.innerHTML = '';
      cajaResultado.appendChild(caja1.firstElementChild);
    } else if (numero2 > numero1) {
      // Mueve parrafo2 a cajaResultado
      cajaResultado.innerHTML = '';
      cajaResultado.appendChild(caja2.firstElementChild);
    } else {
      // Ambos números son iguales
      cajaResultado.innerHTML = '<p>Iguales</p>';
    }
  }