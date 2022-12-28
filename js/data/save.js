function sendData(){

    let usuario = document.getElementById("user").value;
    let llave = document.getElementById("key").value
    let correo = document.getElementById("email").value

    if( usuario != "" && llave != "" && correo != ""){

        db.collection("usuarios").add({
            User: usuario,
            Key: llave,
            Email: correo
        })
        .then((docRef) => {
            alert( document.getElementById("user").value + " Ya estas registrado!!");
        })
        .catch((error) => {
            console.error("HA OCURRIDO UN ERROR");
        });

    }else{
        alert("COMPLETA LOS CAMPOS")
    }
}

