myStorage = window.localStorage;
const invitado = "INVITADO";
const usuarioN = "USUARIO"

function validation(){

var userV = document.getElementById('user').value;
var password = document.getElementById('pass').value;

    if(userV != null && userV === "usuario" ){
        if(password != null && password === "1234"){
            if(localStorage != null){
                localStorage.clear();
                myStorage.setItem('usuario', usuarioN);
                location.href='../index.html';
            } else {
                myStorage.setItem('usuario', usuarioN);
                location.href='../index.html';
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


function salir() {
    localStorage.clear();
    location.href='./html/login.html'; 
}

function salirOne() {
    localStorage.clear();
    location.href='./login.html'; 
}

