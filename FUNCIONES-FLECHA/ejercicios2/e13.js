// Crea una función que reciba unparámetro, un DNI, y devuelva la letra del mismo.
// Si el DNIpasado tiene algún error devolverá “DNI Erróneo”

const obtenerLetraDNI = (dni) => {
  // Verificar si el DNI tiene un formato válido (8 dígitos)
  if (!/^\d{8}$/.test(dni)) {
    return "DNI Erróneo";
  }

  // Array con las letras correspondientes a los dígitos módulo 23
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

  // Calcular la letra correspondiente al DNI
  const indice = dni % 23;
  const letraCorrespondiente = letras.charAt(indice);

  return letraCorrespondiente;
};

// Ejemplo de uso
const dniEjemplo = 12345678;
const letraDNI = obtenerLetraDNI(dniEjemplo);

console.log(`La letra del DNI ${dniEjemplo} es: ${letraDNI}`);