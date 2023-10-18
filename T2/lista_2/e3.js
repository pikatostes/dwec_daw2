function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');
    return cadena === cadena.split('').reverse().join('');
}

function verificarPalindromo() {
    let texto = document.getElementById("inputTexto").value;
    let resultado = document.getElementById("resultado");

    if (esPalindromo(texto)) {
        resultado.innerHTML = "¡Es un palíndromo!";
    } else {
        resultado.innerHTML = "No es un palíndromo.";
    }
}