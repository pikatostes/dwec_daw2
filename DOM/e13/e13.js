// Función para generar un número aleatorio entre 1 y 100
function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Función para crear checkboxes aleatorios
function crearCheckboxes() {
    const checkboxContainer = document.getElementById('checkbox-container');
    for (let i = 1; i <= 100; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'checkbox' + i;
        const label = document.createElement('label');
        label.htmlFor = 'checkbox' + i;
        label.appendChild(document.createTextNode(`Checkbox ${obtenerNumeroAleatorio()}`));
        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
    }
}

// Función para marcar o desmarcar todos los checkboxes
function marcarDesmarcar(marcar) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = marcar;
    });
}

// Llamada a la función para crear checkboxes aleatorios
crearCheckboxes();