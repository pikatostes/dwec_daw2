// Obtener todos los enlaces de la página
let enlaces = document.getElementsByTagName('a');

// Mostrar el número de enlaces de la página
console.log('Número de enlaces de la página: ' + enlaces.length);

// Mostrar la dirección a la que enlaza el penúltimo enlace
if (enlaces.length >= 2) {
  let penultimoEnlace = enlaces[enlaces.length - 2];
  console.log('Dirección del penúltimo enlace: ' + penultimoEnlace.href);
}

// Contar el número de enlaces que enlazan a http://prueba
let enlacesPrueba = document.querySelectorAll('a[href="http://prueba"]');
console.log('Número de enlaces que enlazan a http://prueba: ' + enlacesPrueba.length);

// Obtener el tercer párrafo
let tercerParrafo = document.getElementsByTagName('p')[2];

// Obtener los enlaces dentro del tercer párrafo
let enlacesEnTercerParrafo = tercerParrafo.getElementsByTagName('a');

// Mostrar el número de enlaces del tercer párrafo
console.log('Número de enlaces del tercer párrafo: ' + enlacesEnTercerParrafo.length);