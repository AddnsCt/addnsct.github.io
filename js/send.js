
//Formulario de envio

function getDatas(){
    const user_name = document.getElementById("userNmae").value;
    const user_password = document.getElementById("userPassword").value;
    const count_type = document.getElementById("countType").value;

    const sh = document.getElementById("envUser");
    
    
    switch(count_type){

        case "Addon" :
            sh.innerText = "Addon"

        break;

        case "Mapa" :
            alert("SeleccionÃ³ mapas")

        break;

        case "Textura" :
            alert("seleccionÃ³ Textura")
        
        break;

        break;

        case "Skins" :
            alert("selecciomÃ³ Skins")

        break;
    }


}

let asd = document.getElementById("buttonOfSend");

asd.addEventListener("click", getDatas);











