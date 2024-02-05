// Guardar en un array los 20 primeros números pares
const obtenerNumerosPares = () => {
    const numerosPares = [];

    for (let i = 2; numerosPares.length < 20; i += 2) {
        numerosPares.push(i);
    }

    return numerosPares;
};

// Llamar a la función y guardar el resultado en una variable
const primeros20Pares = obtenerNumerosPares();

// Mostrar el array resultante
console.log("Los primeros 20 números pares son:", primeros20Pares);