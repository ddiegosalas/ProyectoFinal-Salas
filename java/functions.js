import { hamburguesas } from "./menu.js";

export const carrito = [];

export const buscarIndice = (arr, dato) => {
    const indice = arr.findIndex(arr => arr.nombre == dato);
    return arr[indice];
};

export const sumadorTotal = () => {
    let total = 0;
    for(let i = 0; i < carrito.length; i++){
        if(carrito[i].cantidad > 1){
            let multiplicador = carrito[i].cantidad;
            total += carrito[i].precio * multiplicador;
        }else{
            total += carrito[i].precio; 
        }
    };
    return total;
};

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave, valor);
};

export const cargarCarritoStorage = () => {
    const almacenados = JSON.parse(localStorage.getItem("listaCarrito"));
    if(almacenados == null){
    }else{
        for(const obj of almacenados){
            carrito.push(obj);
        }
    }
};

export const botonAgregar = (dato) =>{
    let carritoBuscado = buscarIndice(carrito, dato);
    if(dato === carritoBuscado?.nombre){
        carritoBuscado.cantidad += 1;
    }else{
        carrito.push(buscarIndice(hamburguesas, dato));
        carritoBuscado = buscarIndice(carrito, dato);
        carritoBuscado.cantidad += 1;
    }
    swal({
        title: "Agregado!",
        text: `${carritoBuscado.nombre}
        $${carritoBuscado.precio}`,
        icon: "success",
    });
    guardarLocal("listaCarrito", JSON.stringify(carrito));
    carrito.splice(0);
    cargarCarritoStorage();
    numeroCarrito(carrito.length);
};

export const eliminarDelCarrito = (indice) => {
    if(carrito[indice].cantidad > 1){
        carrito[indice].cantidad -= 1;
        localStorage.clear();
        guardarLocal("listaCarrito", JSON.stringify(carrito));
        carrito.splice(0);
    }else{
        carrito.splice(indice, 1);
        localStorage.clear();
        guardarLocal("listaCarrito", JSON.stringify(carrito));
        carrito.splice(0);
    };
    cargarCarritoStorage();
    numeroCarrito(carrito.length);
};

export const numeroCarrito = (numero) => {
    const numeroCart = document.getElementById("numeroCarrito");
    numeroCart.innerHTML = `${numero}`;
};

export const mostrarCarrito = (dato) =>{
    dato.innerHTML = "";
        dato.innerHTML = `<div class="barraDeOrientacion">
                                            <ul>
                                                <li>NOMBRE</li>
                                                <li>PRECIO</li>
                                                <li>CANTIDAD</li>
                                                <li>ACCION</li>
                                            </ul>
                                    </div>`
        carrito.forEach((e, indice) => {
            dato.innerHTML +=  `<div>
                                                <ul>
                                                    <li>${e.nombre}</li>
                                                    <li>${e.precio}</li>
                                                    <li>${e.cantidad}</li>                                                    
                                                    <li><button class="botonEliminar"> Eliminar </button></li>
                                                </ul>
                                            </div>
                                        </div>`
        });
        dato.innerHTML += `<div class = "total"> El precio total es $ ${sumadorTotal()} </div>`;

        const botonEliminar = document.querySelectorAll(".botonEliminar");
        botonEliminar.forEach((e, index) => {
            e.addEventListener("click", ()=>{
                eliminarDelCarrito(index);
                const carritoVisual = document.querySelector(".carritoVisual");
                mostrarCarrito(carritoVisual);
            });
        });
};

export async function mostrarCartel (){
    await swal({
        title: "Ganaste!",
        text: "",
        icon: "success",
        button:{
            text: "OK"
        },
    });

    personajeGanador("porto");
    location.href = "./index.html";
};

export const personajeGanador = (dato) =>{
    let carritoBuscado = buscarIndice(carrito, dato);
    console.log(carritoBuscado);
    if(dato === carritoBuscado?.nombre){
        carritoBuscado.cantidad += 1;
    }else{
        carrito.push(buscarIndice(hamburguesas, dato));
        carritoBuscado = buscarIndice(carrito, dato);
        carritoBuscado.cantidad += 1;
    }
    guardarLocal("listaCarrito", JSON.stringify(carrito));
    carrito.splice(0);
};