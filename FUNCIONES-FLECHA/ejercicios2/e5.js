const decimalBinario = (decimal) => {
    if (isNaN(decimal) || decimal < 0 || !Number.isInteger(decimal)) {
        return "Ingrese un número entero positivo válido.";
    }

    let binario = "";
    while (decimal > 0) {
        let resto = decimal % 2;
        binario = resto + binario;
        decimal = Math.floor(decimal / 2);
    }

    return binario === "" ? "0" : binario;
};

// Convertir el número 50 a binario
let decimal = 50;
let binario = decimalBinario(decimal);

console.log(`${decimal} en decimal es ${binario} en binario.`);
