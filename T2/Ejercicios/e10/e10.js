/*
KC_EJ10
Crear un programa que reciba un número del 1 al 7 y muestre el nombre de la película StarWars correspondiente.

*/
function buscarEpisodio() {
    let epi = parseInt(document.getElementById("episodio").value);

    switch (epi) {
        case 1:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: La amenaza fantasma</span>';
            break;
        case 2:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El ataque de los clones</span>';
            break;
        case 3:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: La venganza de los sith</span>';
            break;
        case 4:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: Una nueva esperanza</span>';
            break;
        case 5:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El imperio contraataca</span>';
            break;
        case 6:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El retorno del jedi</span>';
            break;
        case 7:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El despertar de la fuerza</span>';
            break;
        case 8:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El ultimo jedi</span>';
            break;
        case 9:
            document.getElementById("res").innerHTML = 'La película es: <span style="color: red;">Star Wars: El ascenso de Skywalker</span>';
            break;
        default:
            document.getElementById("res").innerHTML = 'La pelicula <span style="color: red;">NO EXISTE</span>';
            break;
    }
}