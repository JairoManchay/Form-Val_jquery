/*
Crear un objeto Pokemon con los atributos: nombre, nivel, tipo (gras, fuego, agua, normal, etc.), hablar ->
Mi nombre es <nombre del pokemon> y soy de nivel <nivel del pokemon>
 */


// let pokemon={
//     nombre: "Sharizar",
//     nivel: "nivel 8",
//     tipo: "fuego",
//     hablar(){
//         return "Mi nombre del pokemon " + this.nombre + "y soy nivel "+ this.nivel; 
//     }
// }

// function hablar(){
//     return "Mi nombre del pokemon " + pokemon.nombre + "y soy nivel "+ pokemon.nivel;
// }
// console.log(hablar());


/// Clase Empleado
/*
Crear una clase Empleado con los atributos: código, nombre, apellido, correo y cargo; y las operaciones: sueldoBruto (), descuento () y sueldoNeto ().
Para calcular el sueldo bruto, considere los siguientes criterios:
 */

class Empleado{
    codigo = prompt("Escribe el codigo");
    nombre = prompt("Escribe el Nombre");
    apellido = prompt("Escribe el apellido");
    correo = prompt("Escribe el correo");
    cargo =prompt("Escriba el cargo");
    sueldoBruto=()=>{
        let sueldo=0;
        if(this.cargo=="jefe"){
            sueldo=5000;
        }else if(this.cargo=="analista"){
            sueldo=4000;
        }else if(this.cargo=="programador"){
            sueldo=3000;
        }else if(this.cargo=="soporte"){
            sueldo=2000;
        }else if(this.cargo=="asistente"){
            sueldo=1500;
        }
        return sueldo;
        
    };
    descuento=()=>{
        return Math.floor(this.sueldoBruto()*12.5);
    };
    sueldoNeto=()=>{
        return this.sueldoBruto() + this.descuento();
    };
}

// Sueldo bruto = ingreeso
// descuento = sueldoBruto * 12.5
// neto  = sueldo bruto + descuento
let jefe  =new Empleado();
console.log(jefe.sueldoNeto());

// Analista
let analista = new Empleado();
console.log(analista.sueldoNeto());

// programador
let programador = new Empleado();
console.log(programador.sueldoNeto());

// soporte
let soporte = new Empleado();
console.log(soporte.sueldoNeto());

// asistente
let asistente = new Empleado();
console.log(asistente.sueldoNeto());

// imprimiendo en pantalla
$(document).ready(function(){
	$("#boton01").click(function(){
		$("#sueldo1").text(jefe.sueldoNeto());
        $("#sueldo2").text(analista.sueldoNeto());
        $("#sueldo3").text(programador.sueldoNeto());
        $("#sueldo4").text(soporte.sueldoNeto());
        $("#sueldo5").text(asistente.sueldoNeto());


        //jefe
        $("#nombre1").text(jefe.nombre);
        $("#apellido1").text(jefe.apellido);
        $("#correo1").text(jefe.correo);
        $("#cargo1").text(jefe.cargo);

        // analista
        $("#nombre2").text(analista.nombre);
        $("#apellido2").text(analista.apellido);
        $("#correo2").text(analista.correo);
        $("#cargo2").text(analista.cargo);

        // programador
        $("#nombre3").text(programador.nombre);
        $("#apellido3").text(programador.apellido);
        $("#correo3").text(programador.correo);
        $("#cargo3").text(programador.cargo);

        // soporte
        $("#nombre4").text(soporte.nombre);
        $("#apellido4").text(soporte.apellido);
        $("#correo4").text(soporte.correo);
        $("#cargo4").text(soporte.cargo);
	});
});


