class Producto {
	constructor(nombre, cantidad) {
		this.nombre = nombre
		this.cantidad = cantidad
	}

  mostarProducto() {
    return this.nombre + " <strong>quantity</strong>: " + this.cantidad
  }

  eliminarProducto() {
    
  }
}
