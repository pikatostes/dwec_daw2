// Cambiar el color de fondo a amarillo
document.body.style.backgroundColor = 'yellow';

// Modificar la propiedad color del estilo del body que afecta a todas las etiquetas
document.body.style.color = '#f0f';

// Otras propiedades de style que se pueden probar
document.body.style.fontFamily = 'Courier';
document.body.style.margin = '40px';
document.body.style.border = '1px solid #f00';
document.body.style.padding = '20px';

// Ocultar todo el body modificando la propiedad 'visibility'
document.body.style.visibility = 'hidden';

// Hacer visible u ocultar la etiqueta body cada 1000 milisegundos
setInterval(() => {
  if (document.body.style.visibility === 'visible') {
    document.body.style.visibility = 'hidden';
  } else {
    document.body.style.visibility = 'visible';
  }
}, 1000);

// Mostrar el contenido de la página durante 3 segundos y luego hacerlo invisible
setTimeout(() => {
  document.body.style.visibility = 'hidden';
}, 3000);