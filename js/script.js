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
        location.href='../index.html';

    } else {
        myStorage.setItem('usuario', invitado);
        location.href='../index.html';


    }
}

function sendMsg () {
    var m = document.getElementById("usermsg").value;

    document.getElementById("rootmsg").value = "User: "+ m  +  
    "                                           Root : " + m ;
    
}


function contactanos(){
    let myData = {
        Nombres : document.getElementById("nombres").value,
        Apellidos : document.getElementById("apellidos").value,
        Fecha_Nacimiento : document.getElementById("fnacimiento").value,
        Correo_Electronico : document.getElementById("correo").value,
        Direccion : document.getElementById("direccion").value,
        No_Celular : document.getElementById("ncelular").value,
    }

    myStorage.setItem('persona', JSON.stringify(myData));
    alert("Envio con exito")
}


function salir() {
    localStorage.clear();
    location.href='../html/login.html'; 
}

function salirOne() {
    localStorage.clear();
}

function pagar(){
    alert("Pago realizado con exito")
    location.href='../html/planes.html'; 

}

