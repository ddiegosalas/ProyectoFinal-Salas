import { hamburguesas } from "./menu.js";

export const carrito = [];

export const buscarHamburguesa = (arr, dato) => {
    const indice = arr.findIndex(arr => arr.nombre == dato);
    return arr[indice];
};

export const sumadorTotal = (arr, dato) => {
    const hamburguesa = buscarHamburguesa(arr, dato);
    hamburguesa.stock.listas -= 1;
    return hamburguesa.precio;
};

export const botonHacerPedido = () =>{
    let hamburguesa = false;
    let texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken Si desea salir o borrar carrito escriba: salir o borrar").toLowerCase();

    if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir") || (texto == "borrar")){
        hamburguesa = true;
    }else{
        alert ("No existe tal hamburguesa");
        while(hamburguesa == false){
            texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken Si desea salir o borrar carrito escriba: salir o borrar").toLowerCase();

            if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir") || (texto == "borrar")){
                hamburguesa = true;
            }else{
                alert ("No existe tal hamburguesa")
            }
        }
    }

    if((texto == "salir") || (texto == "borrar")){
    }else{
        while((texto != "salir") || (texto != "borrar")){
            let key = true;
            while(hamburguesa == true){
                carrito.push(buscarHamburguesa(hamburguesas, texto));
    
                alert ("Que más?");
                texto = prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken Si desea salir, finalizar o borrar pedido escriba: salir, finalizar o borrar)").toLowerCase();
    
                if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken")){
                    continue;
                }else if((texto == "salir") || (texto == "finalizar") || (texto == "borrar")){
                    hamburguesa = false;
                }else{
                    alert ("No existe tal hamburguesa");
                    key = true;
                    while(key === true){
                        texto = prompt ("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken Si desea salir, finalizar o borrar pedido escriba: salir, finalizar o borrar)").toLowerCase();
                        
                        if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken")){
                            key = false;
                        }else if((texto == "salir") || (texto == "finalizar") || (texto == "borrar")){
                            key = false;
                            hamburguesa = false;
                        }else{
                            alert ("No existe tal hamburguesa");
                        }
                    }
                }
            }
            break;
        }
    }

    if (texto == "salir"){
        carrito.splice(0);
    }else if(texto == "borrar"){
        alert ("Borró su carrito.")
        carrito.splice(0);
        localStorage.clear();
    }
    else{
        const guardarLocal = (clave, valor) => {
            localStorage.setItem(clave, valor);
        };
        guardarLocal("listaCarrito", JSON.stringify(carrito));
        carrito.splice(0);
        carritoStorage(carrito);
    }

    numeroCarrito(carrito.length);

    console.log(carrito);
};

export const animacionImagenes = (dato) => {
    const cartelEmergente = document.getElementsByClassName("cartelEmergente");
    dato.forEach((e)=>{
        e.addEventListener("mouseover", () =>{
            e.classList.add("animacionMenu");
            cartelEmergente.innerHTML = `Click para agregar al carrete`;
        });
    });
};

export const carritoStorage = (arr) => {
    const almacenados = JSON.parse(localStorage.getItem("listaCarrito"));
    for(const obj of almacenados){
        arr.push(obj);
    }
}

export const mostrarCarrito = () => {
    let mensaje = `Carrito: `;
    carrito.forEach((el)=>{
        mensaje += `
            ${el.nombre} $${el.precio}`;
    });
    mensaje += `
    El total es: $" ${precioTotal}`;
    alert(mensaje);
};

export const numeroCarrito = (numero) => {
    const numeroCart = document.getElementById("numeroCarrito");
        numeroCart.innerHTML = `${numero}`;
}