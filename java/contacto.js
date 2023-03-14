import * as funciones from "./functions.js";

const lista = document.querySelector("#lista");
const section = document.querySelector("section");

//STORAGE
funciones.cargarCarritoStorage();

fetch("https://rickandmortyapi.com/api/character?page=1")
.then((data)=>{
    return data.json();
})
.then((res)=>{
    lista.innerHTML = "";
    res.results.forEach((e, index) => {
        if(index < 12){
            lista.innerHTML += `<ul>
                                    <li>
                                        <h2 class="titulos">${e.name}</h2>
                                        <img src="${e.image}" class="clase">    
                                    </li>                                                
                                </ul>`
        }
    })
    
    const clase = document.querySelectorAll(".clase");
        clase.forEach((e, index)=>{
            e.addEventListener("click", ()=>{
                if (index === 4){
                    funciones.mostrarCartel();
                }else{
                    swal({
                        title: `No fue ${res.results[index].name}`,
                        text: "",
                        icon: "error",
                    });
                }
            })
        })
    })
.catch((error) =>{
    console.log(error);
})