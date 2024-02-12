// Creauna función que genere 100 números aleatorios entre 1 y
// 1000 que no se repitan y luego muéstralos por pantalla

const random100 = () => {
  const min = 1;
  const max = 1000;
  const cantidadNumeros = 100;

  if (cantidadNumeros > max - min + 1) {
    console.error(
      "No es posible generar 100 números únicos en el rango proporcionado."
    );
    return;
  }

  const numerosAleatorios = new Set();

  while (numerosAleatorios.size < cantidadNumeros) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    numerosAleatorios.add(random);
  }

  const arrayNumeros = Array.from(numerosAleatorios);
  console.log(arrayNumeros);
};

// Llamamos a la función para generar y mostrar los 100 números aleatorios
random100();
