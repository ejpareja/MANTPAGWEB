mostrarTabla();

function saveRegistro(){
    
    let sid = Math.floor((Math.random() * 99) + 1),
    snom = document.getElementById("nombre").value,
    sape = document.getElementById("apellido").value,
    sdocu = document.getElementById("docu").value,
    stel = document.getElementById("tel").value; 
    
    if(snom != ""){
        if(sape != ""){
            if(sdocu != ""){
                if(stel != ""){
                    agregarStorage(sid,snom,sape,sdocu,stel); 
                } else {
                    alert('Campo apellidos no puede estar vacio')
                }
            } else {
                alert('Campo apellidos no puede estar vacio')
            }
        } else {
            alert('Campo apellidos no puede estar vacio')
        }      
    } else {
        alert('Campo nombres no puede estar vacio')
    }
    
    mostrarTabla()
}


function mostrarTabla(){
    var list = getList(),
        tbody = document.querySelector('#concursantes tbody');
        if(tbody != null){
            tbody.innerHTML = '';
        }
        console.log(list[0]);
    for (var i = 0; i < list.length; i++) {
        let row = tbody.insertRow(i),
            idcell = row.insertCell(0),
            nomcell = row.insertCell(1);
            apecell = row.insertCell(2),
            docucell = row.insertCell(3);
            telcell = row.insertCell(4);
            selcell = row.insertCell(5);

        idcell.innerHTML = list[i].Id;
        nomcell.innerHTML = list[i].Nombres;
        apecell.innerHTML = list[i].Apellidos;
        docucell.innerHTML = list[i].Documento;
        telcell.innerHTML = list[i].Telefono;

        var inputSelect = document.createElement('input');
        inputSelect.addEventListener('click',eliminarRegistro(list[i].Id), i);
        inputSelect.type = 'button';
        inputSelect.value = "Eliminar";
        selcell.appendChild(inputSelect);

        tbody.appendChild(row)
        
    }
    function eliminarRegistro(id, position){
        console.log('LLEGO A ELIMINAR');
       /* var listRemove = getList();
        var removed = listRemove.splice(id, position);
        saveLocalStorage(removed);
        mostrarTabla();*/
    }

    

   

}