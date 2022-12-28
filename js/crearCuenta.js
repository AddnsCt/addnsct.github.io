
const code = document.getElementById("codigo");

const caracteres = ["A", "Q", "w", "H", "L", "f", "p", "d", "x", "0", "4", "9", "5"]

function asd(){
    for(let i = 0; i > 4; i ++){
        let newCode = caracteres[Math.floor(Math.random()*caracteres.length)];
        code.innerText += ` ${newCode}`
    }
}
asd();