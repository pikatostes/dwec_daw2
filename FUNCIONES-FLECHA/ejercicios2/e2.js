// Definir  una  función  de  flecha  que  reciba  un  valor  entero  y  retorne 
// otro  valor  entero aleatorio comprendido entre 1 y el valor que llega como
// parámetro. Asignar dicha función de flecha a una constante para permitir
// llamarla en sucesivas ocasiones.

const generarNumeroAleatorio = (maximo) => {
    return Math.floor(Math.random() * maximo) + 1;
};

// Ejemplo de uso:
let res1 = generarNumeroAleatorio(10);
console.log(res1);