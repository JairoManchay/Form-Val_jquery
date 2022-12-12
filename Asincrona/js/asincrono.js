// Obtenteniendo variables
// function validarForm(){
//     if($("#txtUsuario").val()==""){
//         alert("El campo nombre esta vacio");
//         $("#txtUsuario").focus();
//         return false;
//     }
//     return true;
// }

// $("document").ready(function(){
//     $("#btnEnviar").click(function(){
//         if(validarForm()){
//             alert("todo good");
//         }
//     })
// })


// 2da forma

$(document).ready(function(){
    $("#basic-form").validate({
        rules:{
            txtUsuario:{
                required: true,
                minlength:6
            },
            txtNombre:{
                required: true,
                minlength: 4
                
            },
            txtContraseña:{
                required: true,
                minlength: 12
            },
            txtCorreo:{
                required: true,
                email: true
            },
            txtTelefono:{
                required: true,
                minlength: 9
            }
        },
        messages:{
            txtUsuario:{
                minlength:"El tamaño del usuario tiene que ser más de 3 letras"
            },
            txtNombre:{
                minlength:"El tamaño del nombre tiene que ser más de 4 letras y sin números"
            }
            ,
            txtContraseña:{
                minlength:"La contraseña cuenta de 12 digitos, caracteres de cadena, numero"
            },
            txtCorreo:{
                minlength:" Tenés que poner un @ y adicionarle la ruta de correo especifica"
            },
            txtTelefono:{
                minlength: "Escribe los 9 digitos, validacion solo para Perú"
            }
        }
    })
})
