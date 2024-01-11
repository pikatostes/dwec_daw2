function muestra() {
     // Obtener el elemento de texto parcial y el enlace
     let textoParcial = document.getElementById('textoParcial');
     let enlaceMostrar = document.getElementById('enlaceMostrar');

     // Mostrar el texto completo
     textoParcial.innerHTML = 'Este es un texto completo.';

     // Ocultar el enlace después del primer clic
     enlaceMostrar.style.display = 'none';
}
