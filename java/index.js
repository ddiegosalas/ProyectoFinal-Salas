import * as funciones from "./functions.js";

//ANIMACION DE IMAGENES
const animacionImagenes = document.querySelectorAll(".burgers");
funciones.animacionImagenes(animacionImagenes);

//BOTON DE HACER PEDIDO
const botonPedido = document.querySelector(".botonPedido");
botonPedido.onclick = () => { 
    funciones.botonHacerPedido();
}

//BOTON CARRITO
const botonCarrito = document.getElementById("botonCarrito");
botonCarrito.onclick = () => {
    funciones.mostrarCarrito;
};