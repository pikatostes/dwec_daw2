// 1. Modificar el protocolo de todas las direcciones de los enlaces
const enlaces = document.querySelectorAll('a');
enlaces.forEach(enlace => {
  const url = new URL(enlace.href);
  url.protocol = 'https:';
  enlace.href = url.href;
});

// 2. Modificar la clase de los párrafos según su atributo class
const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
  if (parrafo.classList.contains('importante')) {
    parrafo.classList.replace('importante', 'resaltado');
  } else {
    parrafo.classList.add('normal');
  }
});

// 3. Añadir el atributo "name" a los enlaces con class "importante"
const enlacesImportantes = document.querySelectorAll('a.importante');
let i = 0;
enlacesImportantes.forEach(enlace => {
  const nameValue = 'importante' + i++;
  enlace.setAttribute('name', nameValue);
});