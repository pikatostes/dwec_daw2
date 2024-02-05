// Crea  una  función  que  reciba  2  parámetros,  precio  e IVA,  y  devuelva
// el  precio  con IVA incluido. Si no recibe el IVA, aplicará el 21 por ciento
// por defecto
const prompt = require("prompt-sync")();

const ivaPrecio = (iva, precio) => {
  let precioConIva = 0;

  if (iva === null) {
    // Utiliza 0.21 en lugar de 0,21 y multiplica por precio
    precioConIva = precio + precio * 0.21;
  } else {
    // Divide el IVA por 100 y multiplica por precio
    precioConIva = precio + (precio * iva) / 100;
  }

  console.log(precioConIva.toFixed(2));
};

let iva = parseInt(prompt("Introduzca el IVA: "));
let precio = parseInt(prompt("Introduzca el precio: "));
ivaPrecio(iva, precio);
