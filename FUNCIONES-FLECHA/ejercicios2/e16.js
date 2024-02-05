// Crea una función que genere número entero aleatorio entre min y max, que serán
// pasados como parámetros. Por defecto min = 1 y max = 100

const numRandom = (min, max) => {
  if (min === null || max === null) {
    let random = Math.random() + 101;
    console.log(random);
  }
};
