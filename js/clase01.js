let carrito = [];

function agregarAlCarrito(producto, precio) {
  const cantidad = prompt(`Ingrese la cantidad de ${producto}:`);

  if (!cantidad || isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingrese cantidad deseada, de lo contaro ingrese 0.");
    return;
  }

  const total = precio * cantidad;
  carrito.push({ producto, cantidad, total });
  alert(`${cantidad} ${producto} han sido añadidas al carrito. Total: $${total.toFixed(2)} ARS`);
}

function mostrarCarrito() {
  let mensaje = "Carrito de Compras:";

  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  carrito.forEach((item) => {
    mensaje += `${item.cantidad} ${item.producto}: $${item.total.toFixed(2)} ARS`;
  });

  const totalCompra = carrito.reduce((acumulador, item) => acumulador + item.total, 0);
  mensaje += `Total de la compra: $${totalCompra.toFixed(2)} ARS`;

  alert(mensaje);
}

// Ejemplos de uso
agregarAlCarrito("remera negra banana", 23999);
agregarAlCarrito("remera negra ojo", 23999);
agregarAlCarrito("remera negra cajon", 23999);
mostrarCarrito();