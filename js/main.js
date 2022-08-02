// Agregar productos

//Agregando clases

class Productos {
    constructor (codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }

    calcularinversion(){
        return this.cantidad * this.precio ;
    }
}


const producto = [];

let idformulario = document.getElementById('formulariodeproductos');

idformulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const codigo = document.getElementById('idcodigo').value;
    const nombre = document.getElementById('idnombre').value;
    const cantidad = document.getElementById('idcantidad').value;
    const precio = document.getElementById('idprecio').value;
    
    const newproducto = new Productos (codigo, nombre, cantidad, precio);
    producto.push(newproducto);
    localStorage.setItem('Productos', JSON.stringify(producto));
    idformulario.reset ();
    mostrarinversion(newproducto);
})

const resultado = document.getElementById("infoinversion");
const mostrarinversion = (newproducto) => {
    const cliente = (newproducto.cantidad >= 10) ? "Mayorista" : "Minorista";
    let aux = '';
    aux += ` <p> Su inversion es de ${newproducto.calcularinversion()} pesos.</p> 
                <p>Usted es un cliente ${cliente}</p>`;
    resultado.innerHTML = aux;
}

const botondeconsulta = document.getElementById('consulta');
const verconsultas = document.getElementById('verconsultas');

botondeconsulta.addEventListener('click', () => {
    const producto = JSON.parse(localStorage.getItem('Productos'));
    let aux = '';
    producto.forEach(newproducto => {
        aux += `<div class="card" style="width: 18rem;">
                    <div class="card-body">        
                        <p class="card-title"> Producto: $${newproducto.nombre} </p>
                        <p class="card-text"> Codigo: ${newproducto.codigo}</p>
                    </div>
                </div>`
    verconsultas.innerHTML = aux;            
    });

})

// metodo spread

const marcas = ["Algabo", "Estereo", "Bommetique", "Colgate", "Extralimp", "Iberia"]

console.log (...marcas)
