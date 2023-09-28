function parImpar() {
    let num = parseInt(document.getElementById("num").value);
    if (num % 2 === 0) {
        document.getElementById("res").innerHTML = "El número es par";
    } else {
        document.getElementById("res").innerHTML = "El número es impar";
    }
}
