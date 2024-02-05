const calcularMedia = (numeros) => {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return "Ingrese un array válido de enteros.";
    }

    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const media = suma / numeros.length;
    return media;
};

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const resultadoMedia = calcularMedia(numeros);
console.log(`La media de los números es: ${resultadoMedia.toFixed(2)}`);
