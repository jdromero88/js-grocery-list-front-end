let productos = []
let year = new Date()

// Crear elementos
function crearElemento(elemento) {
	return document.createElement(elemento)
}

function iniciaTodo() {
	console.log('connected')
	let footerEl = document.getElementById('footer')
	footerEl.innerHtml = year.getFullYear() + `&copy; Grocery List`
  let pEl = document.createElement('p')
	// TODO: agregar texto en el footer
	pEl.innerHTML = year.getFullYear() + `&copy; Grocery List`
  footerEl.appendChild(pEl)
}

function validateInput(producto, cantidad) {
	console.log('cantidad ', cantidad)
	if (!producto || cantidad <= 0) {
		return false
	}
	return true
}

function addProducto() {
	let productoLiEl = crearElemento('li')

	let listaOlEl = document.getElementById('lista')
	let productoParaAgregar = document.getElementById('nuevoProducto')
	let cantidad = document.getElementById('cantidad')

	if (!validateInput(productoParaAgregar.value, cantidad.value)) {
		alert('Debe agregar un producto')
		productoParaAgregar.focus()
		return
	}

	let p = new Producto(productoParaAgregar.value, cantidad.value)
	productos.push(p)
	productoLiEl.innerHTML = p.mostarProducto()
	listaOlEl.appendChild(productoLiEl)
}

function mostarProductos() {
	console.log(productos)
}

function crearLista() {
	let listaContenedor = document.getElementById('listaContenedor')
	listaContenedor.hidden = false
}

window.addEventListener('DOMContentLoaded', iniciaTodo)

document.getElementById('crearLista').addEventListener('click', crearLista)
document.getElementById('addProducto').addEventListener('click', addProducto)
document.getElementById('mostrarProductos').addEventListener('click', mostarProductos)
