const datosUsuarios = async () => await fetch('https://alura-geek-ogs3.onrender.com/usuarios').then(respuesta => respuesta.json());

//consultar productos
const listaProductos = () => fetch('https://alura-geek-ogs3.onrender.com/productos').then(respuesta => respuesta.json());


//detalle producto
const detalleProducto = async (id) => {
    return fetch(`https://alura-geek-ogs3.onrender.com/productos/${id}`)
        .then(respuesta => respuesta.json())
}


//crear productos
const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
    return fetch(`https://alura-geek-ogs3.onrender.com/productos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
    }).then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
        }
    })
    throw new Error('no se pudo crear el producto')
};



//editar productos corregido
const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
    return fetch(`https://alura-geek-ogs3.onrender.com/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio,
            id,
            imagen,
            categoria,
            descripcion
        })
    })
        .then(respuesta => respuesta)
        .catch(error => console.log(error));
};



//eliminar productos
const eliminarProducto = (id) => {
    return fetch(`https://alura-geek-ogs3.onrender.com/productos/${id}`, {
        method: "DELETE"
    })
}

export const clientServices = {
    datosUsuarios,
    listaProductos,
    detalleProducto,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};