function mostrarSaludo() {
  // Obtener los valores de los campos de nombre y apellido
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;

  // Mostrar el mensaje con los datos del formulario
  document.getElementById("res").innerHTML = 'Hola ' + nombre + ' ' + apellido + ', gracias por rellenar el formulario';
}