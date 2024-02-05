// Definir un array con la información de los empleados
const empleados = [
  { nombre: "Alex", sueldo: 3000 },
  { nombre: "Juan", sueldo: 3500 },
  { nombre: "Rafa", sueldo: 4000 },
  { nombre: "Pepe", sueldo: 4500},
  { nombre: "Carlo", sueldo: 5000},
  { nombre: "Jesu", sueldo: 5500},
  { nombre: "Ivan", sueldo: 6000},
  { nombre: "Dani", sueldo: 6500},
];

// Encontrar al empleado que más gana utilizando una función de flecha
const empleadoMasGanador = empleados.reduce(
  (maxGanador, empleado) =>
    empleado.sueldo > maxGanador.sueldo ? empleado : maxGanador,
  empleados[0]
);

// Mostrar el nombre y sueldo del empleado que más gana
console.log(
  `El empleado que más gana es ${empleadoMasGanador.nombre} con un sueldo de ${empleadoMasGanador.sueldo}.`
);
