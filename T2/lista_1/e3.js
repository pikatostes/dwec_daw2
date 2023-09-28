function calcFact() {
    let num = parseInt(document.getElementById("num").value);
    let res = 1;

    for (let i = 1; i <= num; i++) {
        res *= i;
    }

    document.getElementById("res").innerHTML = res;
}