
const Productoscompletos = document.getElementById ("Productoscompletos");

// Ingresando tarjeta de productos, modificando el DOM

fetch('../json/productos.json')
.then(response => response.json())
.then(productos => {
        productos.forEach((producto, indice) => {
            Productoscompletos.innerHTML += `
                <div id="producto${indice}" class="card tarjetadeproductos" style="width: 18rem;">
                    <img src="../imagenes/productos/${producto.codigo}.jpg" class="card-img-top" alt="100px" widht="100px">
                    <div class="card-body">
                        <h5 class="card-title">${producto.producto}</h5>
                        <p class="card-text">${producto.descripcion}</p>
                        <h5 class="card-title">$${producto.precio}</h5>
                        <button id="boton${producto.codigo}" class="btn btn-outline-light"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-plus" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a3dfd9" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="6" cy="19" r="2" />
                                    <circle cx="17" cy="19" r="2" />
                                    <path d="M17 17h-11v-14h-2" />
                                    <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
                                    <path d="M15 6h6m-3 -3v6" />
                                </svg></button>
                            <div class="row card-footer text-muted">
                                <p> Codigo : ${producto.codigo}</p>
                                <p> Marca: ${producto.marca}</p>
                            </div>
                    </div>
                </div>
            `;
//Agregamos el evento para el boton
const boton = document.getElementById(`boton${producto.codigo}`);
        
        boton.addEventListener ("click" , () => {
            console.log("distes click")
            Toastify({
                text: "This is a toast",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            })               
         })
})

//Creo el carrito de compra con una funcion para agregar el producto por su codigo

const boton1 = document.getElementById("boton1");
boton1.addEventListener("click" , (e) => {

        Toastify({
            text: "This is a toast",
            duration: 3000
            }).showToast();
})

const carrito = [];

    const agregarproducto = (codigo) => {
            Productoscompletos = producto.find(producto => producto.codigo === codigo);
            carrito.push(producto);
            }