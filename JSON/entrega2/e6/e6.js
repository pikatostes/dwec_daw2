// 1. Enlace con texto "+ info" que enlaza a http://www.iesromeroletgas.com/
let tercerParrafo = document.getElementById('enlaceParrafo');
let enlace = document.createElement('a');
enlace.href = 'http://www.iesromeroletgas.com/';
enlace.textContent = '+ info';
tercerParrafo.appendChild(enlace);

// 2. Insertar un párrafo de color rojo entre el tercer y el cuarto párrafos
let nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Nuevo párrafo de color rojo.';
nuevoParrafo.style.color = 'red';
tercerParrafo.parentNode.insertBefore(nuevoParrafo, tercerParrafo.nextSibling);

// 3. Eliminar el segundo párrafo
let segundoParrafo = tercerParrafo.previousElementSibling;
segundoParrafo.parentNode.removeChild(segundoParrafo);