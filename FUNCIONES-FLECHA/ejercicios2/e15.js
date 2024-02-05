// Crea una función que reciba un texto y lo devuelva al revés
const invertirTexto = (texto) => {
  // Divide el texto en un array de caracteres, invierte el array y luego lo une de nuevo
  return texto.split("").reverse().join("");
};

// Ejemplo de uso
const textoOriginal = "Hola, mundo!";
const textoInvertido = invertirTexto(textoOriginal);

console.log(`Texto original: ${textoOriginal}`);
console.log(`Texto invertido: ${textoInvertido}`);
