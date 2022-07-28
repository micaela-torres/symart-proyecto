// Agregar productos

//Agregando clases

class Productos {
    constructor (codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = cantidad;
        this.precio = precio;
    }

    calcularinversion(){
        return this.cantidad * this.precio ;
    }
}


const producto = [];

const idformulario = document.getElementById("formulariodeproductos");

idformulario.addEventListener("click", (e) => {
    e.preventDefault();
    const codigo = document.getElementById("idcodigo").value;
    const nombre = document.getElementById("idnombre").value;
    const cantidad = document.getElementById("idcantidad").value;
    const precio = document.getElementById("idprecio").value;

    const nuevoproductos = new Productos (codigo, nombre, cantidad, precio);
    
    producto.push(nuevoproductos);

    localStorage.setItem("Productos", JSON.stringify(producto));
    mostrarinversion (nuevoproductos);
})

const resultado = document.getElementById("infoinversion");
const mostrarinversion = (nuevoproductos) => {
    let aux = '';
    aux += ` <p> Su inversion es de ${nuevoproductos.calcularinversion} </p> `
    resultado.innerHTML = aux;
}

