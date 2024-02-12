// Crea una función que genere número entero aleatorio entre min y max, que serán
// pasados como parámetros. Por defecto min = 1 y max = 100

const numRandom = (min = 1, max = 100) => {
  if (min === null || max === null) {
    console.error("Los valores de min y max no pueden ser nulos.");
    return;
  }

  if (min >= max) {
    console.error("El valor de min debe ser menor que max.");
    return;
  }

  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(random);
};

// Ejemplos de uso:
numRandom(); // Genera un número aleatorio entre 1 y 100 por defecto
numRandom(10, 20); // Genera un número aleatorio entre 10 y 20