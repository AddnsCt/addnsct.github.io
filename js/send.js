
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
            alert("Seleccionó mapas")

        break;

        case "Textura" :
            alert("seleccionó Textura")
        
        break;

        break;

        case "Skins" :
            alert("selecciomó Skins")

        break;
    }


}

let asd = document.getElementById("buttonOfSend");

asd.addEventListener("click", getDatas);











