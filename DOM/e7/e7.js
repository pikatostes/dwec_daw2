// Archivo e7.js

function calcValues() {
    // Obtener los valores de los campos y convertirlos a números
    let value1 = parseFloat(document.getElementById('value1').value);
    let value2 = parseFloat(document.getElementById('value2').value);

    // Obtener las casillas de verificación
    let addCheckbox = document.getElementById('add');
    let subtractCheckbox = document.getElementById('subtract');

    // Inicializar los resultados
    let result = '';
    let suma = 0;
    let resta = 0;

    // Realizar la operación de suma si está seleccionada
    if (addCheckbox.checked) {
        suma = value1 + value2;
        result += 'Suma: ' + suma + ', ';
    }

    // Realizar la operación de resta si está seleccionada
    if (subtractCheckbox.checked) {
        resta = value1 - value2;
        result += 'Resta: ' + resta;
    }

    // Mostrar el resultado en el elemento con el ID 'res'
    let resultadoElemento = document.getElementById('res');
}
