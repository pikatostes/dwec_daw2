function anade() {
     // Crear un nuevo elemento de lista
     let nuevoElemento = document.createElement('li');

     // Crear un nuevo nodo de texto con contenido
     let contenido = document.createTextNode('Nuevo Elemento');

     // Añadir el nodo de texto al elemento de lista
     nuevoElemento.appendChild(contenido);

     // Obtener la lista existente
     let miLista = document.getElementById('miLista');

     // Añadir el nuevo elemento a la lista
     miLista.appendChild(nuevoElemento);
}
