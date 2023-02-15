const hamburguesas = [
    {
        nombre: "remolacha",
        precio: 700,
        stock: {
            listas: 2,
        }
    },
    {
        nombre: "porto",
        precio: 800,
        stock: {
            listas: 0,
        }
    },
    {
        nombre: "not chicken",
        precio: 900,
        stock: {
        listas: 1,
    }
    }
] 

function sumadorTotal (dato){
    let total = 0;

    if(dato == remolacha.nombre){
        total += remolacha.precio;
        remolacha.stock.listas -= 1;
    }
    else if (dato == porto.nombre){
        total += porto.precio;
        porto.stock.listas -= 1;
    }
    else if(dato == notChicken.nombre){
        total += notChicken.precio;
        notChicken.stock.listas -= 1;
    }

    return total;
}

function stock (cantidad){
    
}

const menu = [remolacha, porto, notChicken];

let precioTotal = 0;
let hamburguesa = false;
let texto = toLowerCase(prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir escriba: salir)"));

if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir")){
    hamburguesa = true;
}else{
    alert ("No existe tal hamburguesa");
    while(hamburguesa == false){
        texto = toLowerCase(prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir escriba: salir)"));

        if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken") || (texto == "salir")){
            hamburguesa = true;
        }else{
            alert ("No existe tal hamburguesa")
        }
    }
}

while((texto != "salir") || (texto != "finalizado")){

    while(hamburguesa == true){

        precioTotal += sumadorTotal(texto);

        texto = toLowerCase(prompt("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir o finalizar escriba: salir o finalizar)"));

        if ((texto != "remolacha") || (texto != "porto") || (texto != "not chicken") || (texto != "salir") || (texto != "finalizar")){
            alert ("No existe tal hamburguesa");
            let key = true;
            while(key === true){
                texto = toLowerCase(prompt ("Ingrese el nombre de la hamburguesa: remolacha, porto o not chicken (si desea salir o finalizar escriba: salir o finalizar)"));
                
                if ((texto != "remolacha") || (texto != "porto") || (texto != "not chicken") || (texto != "salir") || (texto != "finalizar")){
                    alert ("No existe tal hamburguesa");
                }else if ((texto == "remolacha") || (texto == "porto") || (texto == "not chicken")){
                    key = false;
                }else if(texto == "salir"){
                    key = false;
                    hamburguesa = false;
                }else if(texto == "finalizar"){
                    key = false;
                    hamburguesa = false;
                }
            }
        }
    }
}

if (texto == "salir"){
    precioTotal = 0;
    alert ("Vuelva prontos!");
}else if (texto == "finalizado"){
    alert ("El total es: $ " + precioTotal);
}