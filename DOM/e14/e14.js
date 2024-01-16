function ocultarMostrar(elemento) {
    // Cambiar la visibilidad del elemento (ocultar/mostrar) después de un retraso de 300 ms
    setTimeout(() => {
      elemento.style.display = (elemento.style.display === 'none') ? 'block' : 'none';
    }, 300);
  }  

  function eliminarElemento(elemento) {
    // Eliminar el elemento del DOM
    elemento.parentNode.removeChild(elemento);
  }

  function reaparecerElementos() {
    // Mostrar todos los elementos ocultos
    const elementos = document.querySelectorAll('p[style="display: none;"]');
    elementos.forEach(elemento => {
      elemento.style.display = 'block';
    });
  }