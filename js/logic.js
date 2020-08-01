var list = [];

function agregarStorage(id, nom, ape, docu, tel){
    
    let myData = {
        Id : id,
        Nombres : nom,
        Apellidos : ape,
        Documento : docu,
        Telefono : tel,
    }
    list.push(myData);
    console.log(myData);
    saveLocalStorage(list);
}

function getList(){
    console.log('llego getList')
    var recordList = myStorage.getItem('Datos');
    if(recordList == null){
         list = [];
    } else {  
        list = JSON.parse(recordList);
    }
    return list;
}


function saveLocalStorage(plist){
    console.log('guardo');
    myStorage.setItem('Datos', JSON.stringify(plist));
}