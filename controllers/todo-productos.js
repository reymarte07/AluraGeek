import { clientServices } from "../services/client-service.js";
import { mostrarProducto } from "../controllers/mostrar-productos.js";

const contenedorProductos = document.querySelector('[data-todos-productos]');

clientServices.listaProductos().then(data => {
    data.forEach(({nombre, precio, imagen, id, categoria, descripcion }) => {

        const producto = mostrarProducto(nombre, precio, imagen, id, categoria, descripcion);  
        contenedorProductos.appendChild(producto);
    })
})