function wordUpperLower() {
    let word = document.getElementById("word").value;

    if (word === word.toUpperCase()) {
        return document.getElementById("res").innerHTML = "La cadena está compuesta por mayúsculas";
    } if (word === word.toLowerCase()) {
        return document.getElementById("res").innerHTML = "La cadena está compuesta por minúsculas";
    } else {
        return document.getElementById("res").innerHTML="La cadena está compuesta por mayúsculas y minúsculas";
    }
}