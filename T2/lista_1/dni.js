function comprobarDni() {
    let dni = document.getElementById("dni").value;
    let letraDni = document.getElementById("letraDni").value.toUpperCase();
    let letrasDni = "TRWAGMYFPDXBNJZSQVHLCKE";

    if (!dni.match(/^\d{8}$/) || !letraDni.match(/[A-Z]/)) {
        alert("Por favor, ingrese un DNI válido.");
    } else {
        let posicionLetraDni = letrasDni.indexOf(letraDni);

        if (posicionLetraDni === -1) {
            alert("La letra del DNI no coincide con ninguna letra válida.");
        } else {
            let dniNumerico = parseInt(dni);
            let restoDivision = dniNumerico % 23;

            if (restoDivision === posicionLetraDni) {
                alert("El DNI es válido y la letra coincide. Resultado de la división: " + restoDivision);
            } else {
                alert("La letra del DNI no coincide con el cálculo correspondiente.");
            }
        }
    }
}
