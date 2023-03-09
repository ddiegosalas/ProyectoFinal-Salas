import * as funciones from "./functions.js";

//STORAGE
funciones.cargarCarritoStorage();
funciones.numeroCarrito(funciones.carrito.length);
const carritoVisual = document.querySelector(".carritoVisual");
funciones.mostrarCarrito(carritoVisual);

//BOTON DE HACER PEDIDO
const botonPedido = document.querySelectorAll(".botonAgregar"); 
botonPedido.forEach((e, index)=>{
    let nombre = "";
    e.addEventListener("click", ()=> {
        if(index == 0){
            nombre = "remolacha";
        }else if(index == 1){
            nombre = "porto";
        }else{
            nombre = "not chicken";
        };

        funciones.botonAgregar(nombre);

        const carritoVisual = document.querySelector(".carritoVisual");
        funciones.mostrarCarrito(carritoVisual);
    });
});

//BOTON ELIMINAR
const botonEliminar = document.querySelectorAll(".botonEliminar");
botonEliminar.forEach((e, index) => {
    e.addEventListener("click", ()=>{
        funciones.botonEliminar(index);
        const carritoVisual = document.querySelector(".carritoVisual");
        funciones.mostrarCarrito(carritoVisual);
    });
});