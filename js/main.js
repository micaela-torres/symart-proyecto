// Agregar productos

//Agregando clases

class Productos {
    constructor (codigo, nombre, marca, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
    }
}


const producto = [];

const idformulario = document.getElementById("formulariodeproductos");

idformulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const codigo = document.getElementById("idcodigo").value;
    const nombre = document.getElementById("idnombre").value;
    const marca = document.getElementById("idmarca").value;
    const precio = document.getElementById("idprecio").value;

    const nuevoproductos = new Productos (codigo, nombre, marca, precio);
    
    producto.push(nuevoproductos);

    localStorage.setItem("Productos", JSON.stringify(producto));
    formulariodeproductos.reset();
})


