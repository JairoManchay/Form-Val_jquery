// reservando las variables
const btnActivar = document.getElementById("btnActivar");
const datoArreglo = document.getElementById("numArray");
const mostrarP = document.getElementById("positivoMuestra");
const mostrarN = document.getElementById("negativoMuestra");
const mostrarC = document.getElementById("ceroMuestra");


btnActivar.onclick=function(){
    let valArreglo = datoArreglo.value;
    let dato = [];

    for(let i=0; i<valArreglo; i++){
        dato.push(parseInt(prompt(`digite el número del indice(${i}):`)));
    }


    function contadorPositivo(){
        let contador = 0;
        for(const array in dato){
            //console.log("Indice " + array + " -> " + dato[array]);
            if(dato[array]>=1){
                contador++;
            }
        }
        console.log(`Hay ${contador} positivos`);
        return contador;
    }

    function contadorNegativo(){
        let contador = 0;
        for(const array in dato){
            //console.log("Indice " + array + " -> " + dato[array]);
            if(dato[array]<=-1){
                contador++;
            }
        }
        console.log(`Hay ${contador} negativos`);
        return contador;
    }

    function contadorCero(){
        let contador = 0;
        for(const array in dato){
            //console.log("Indice " + array + " -> " + dato[array]);
            if(dato[array]==0){
                contador++;
            }
        }
        console.log(`Hay ${contador} ceros`);
        return contador;
    }

    mostrarP.value = contadorPositivo();
    mostrarN.value = contadorNegativo();
    mostrarC.value = contadorCero();
    datoArreglo.value="";
}
