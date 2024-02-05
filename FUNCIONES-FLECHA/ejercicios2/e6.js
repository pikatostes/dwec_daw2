const contarParametros = (...args) => {
    return args.length;
};

// Ejemplo de uso:
let cantidadParametros = contarParametros(1, "Hola", true, [1, 2, 3]);
console.log(`Se le pasaron ${cantidadParametros} parámetros a la función.`);
