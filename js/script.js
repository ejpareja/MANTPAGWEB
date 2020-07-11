myStorage = window.localStorage;
const invitado = "INVITADO";

function validation(){

var userV = document.getElementById('user').value;
var password = document.getElementById('pass').value;

    if(userV != null && userV === "usuario" ){
        if(password != null && password === "1234"){
            if(localStorage != null){
                localStorage.clear();
                myStorage.setItem('usuario', userV);
            } else {
                myStorage.setItem('usuario', userV);
                location.href="../index.html";

            }
        } else {
            alert("La contraseña es incorrecta vuelva a intentar")
        }
        
    } else {
        alert("Usuario incorrecto");
    } 
}

function validationInvitado(){
    if(localStorage != null){
        localStorage.clear();
        myStorage.setItem('usuario', invitado);
    } else {
        myStorage.setItem('usuario', invitado);

    }
}

function sendMsg () {
    var m = document.getElementById("usermsg").value;

    document.getElementById("rootmsg").value = "User: "+ m  +  
    "                                           Root : " + m ;
    
}

let Mipersona = {
    Nombre : "",
    Apellido : "Pareja",
    Cargo : "Estudiante"

}

function contactanos(){
    const genero = document.querySelectorAll('input[name="choice"]');
    let generoValue;
    for( const rs of genero){
        if(rs.ischecked){
            generoValue = rs.value;
            break
        }
    }


    let myData = {
        Nombres : document.getElementById("pnombre").value + " " + document.getElementById("snombre").value ,
        Apellidos : document.getElementById("papellido").value + " " + document.getElementById("sapellido").value ,
        Fecha_Nacimiento : document.getElementById("fnacimiento").value,
        Edad : document.getElementById("edad").value,
        Correo_Electronico : document.getElementById("correo").value,
        Direccion : document.getElementById("direccion").value,
        No_Celular : document.getElementById("ncelular").value,
        Genero : generoValue,
    }

    myStorage.setItem('persona', JSON.stringify(myData));
    
}


