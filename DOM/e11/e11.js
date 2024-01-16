function generarNumero() {
    // Generar un número aleatorio entre 1 y 100 (puedes ajustar según sea necesario)
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    // Crear un nuevo elemento de lista (li) con el número aleatorio
    let nuevoElementoLista = document.createElement('li');
    nuevoElementoLista.textContent = numeroAleatorio;

    // Obtener la lista desordenada (ul) y agregar el nuevo elemento
    let listaNumeros = document.getElementById('listaNumeros');
    listaNumeros.appendChild(nuevoElementoLista);
}