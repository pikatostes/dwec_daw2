const csvFilePath = "inventory_parts.csv";

// Funciones para cargar datos, mostrar piezas, filtrar y carrito

function cargarDatosCSV(filePath) {
  return fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      const lineas = data.split(/\r?\n/);
      const encabezados = lineas[0].split(",");
      const objetosCSV = lineas.slice(1).map((linea) => {
        const valores = linea.split(",");
        const objeto = {};
        encabezados.forEach((encabezado, i) => {
          objeto[encabezado] = valores[i];
        });
        return objeto;
      });

      return objetosCSV;
    });
}

function mostrarPiezas(piezas, filtroColor) {
  const listaPiezas = document.getElementById("lista-piezas");
  listaPiezas.innerHTML = "";

  // Limitar la muestra a un máximo de 20 piezas
  const piezasAMostrar = piezas.slice(0, 20);

  piezasAMostrar.forEach((pieza) => {
    if (filtroColor && filtroColor !== pieza.color_id) return;

    const tarjetaPieza = document.createElement("div");
    tarjetaPieza.classList.add("card", "h-100");
    tarjetaPieza.innerHTML = `
      <img src="${pieza.img_url}" alt="${pieza.part_num}" class="card-img-top" width="200">
      <div class="card-body">
        <h5 class="card-title">${pieza.part_num}</h5>
        <p>Color: ${pieza.color_id}</p>
        <p>Cantidad: ${pieza.quantity}</p>
        <p>Precio: $${pieza.precio}</p>
        <button class="btn btn-primary" onclick="agregarAlCarrito(${pieza.id})">Añadir al carrito</button>
      </div>
    `;

    listaPiezas.appendChild(tarjetaPieza);
  });
}

function filtrarPiezas() {
  const filtroColor = document.getElementById("filtro-color").value;
  const piezasFiltradas = piezas.filter((pieza) => !filtroColor || filtroColor === pieza.color_id);
  mostrarPiezas(piezasFiltradas, filtroColor);
}

function agregarAlCarrito(piezaId) {
  const pieza = piezas.find((pieza) => pieza.id === piezaId);
  if (!pieza) return;

  // Implementar lógica para agregar al carrito (no incluida en este ejemplo)

  mostrarCarrito();
}

function mostrarCarrito() {
  // Implementar lógica para mostrar el contenido del carrito (no incluida en este ejemplo)

  // Actualizar el total del carrito
  const totalCompra = carrito.reduce((total, pieza) => total + pieza.precio * pieza.cantidad, 0);
  document.getElementById("total-compra").textContent = totalCompra.toFixed(2);
}

function comprar() {
  // Implementar lógica para realizar la compra (no incluida en este ejemplo)

  // Vaciar el carrito
  carrito = [];
  mostrarCarrito();

  alert("¡Compra realizada con éxito!");
}

// Función para buscar piezas
function buscarPiezas() {
  const textoBusqueda = document.getElementById("buscador").value.toLowerCase();
  const piezasEncontradas = piezas.filter((pieza) =>
    pieza.part_num.toLowerCase().includes(textoBusqueda) || pieza.color_id.toLowerCase().includes(textoBusqueda)
  );
  mostrarPiezas(piezasEncontradas);
}

// Carga inicial de datos
cargarDatosCSV(csvFilePath).then((piezasData) => {
  piezas = piezasData;
  mostrarPiezas(piezas);

  // Agregar eventos a los elementos
  document.getElementById("filtro-color").addEventListener("change", filtrarPiezas);
  document.getElementById("buscador").addEventListener("keyup", buscarPiezas);
  document.getElementById("btn-comprar").addEventListener("click", comprar);
});
