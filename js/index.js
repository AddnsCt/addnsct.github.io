
const captcha = document.querySelector(".passtxt");

function passwordG(){
  
  let allCharacters = ["a", "q", "s", "w", "z", "x", "c"]
  
  for (let i = 0; i < 6; i++) { //getting 6 random characters from the array
    let randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += `${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
  
  
  
  

  
}

passwordG();

