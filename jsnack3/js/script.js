// creazione variabili
let temp = 0;
let userMessage = document.getElementById('user');

for (let i = 0; i < 10; i++) {
  
  let userNumber = parseInt(prompt("dimmi un numero"));

  // validation
  if(isNaN(userNumber)){

    let userNumber = parseInt(prompt("dimmi un numero valido"));

    // controllo se è l'ultimo valore dell'arrey
    if(i == 9){
      userMessage.innerHTML += `${userNumber} = `;
      temp += userNumber;
    }
    else{
      userMessage.innerHTML += `${userNumber} + `;
      temp += userNumber;
    }
    

  } else {

    // controllo se è l'ultimo valore dell'arrey
    if(i == 9){
      userMessage.innerHTML += `${userNumber} = `;
      temp += userNumber;
    }
    else{
      userMessage.innerHTML += `${userNumber} + `;
      temp += userNumber;
    }
  }
}

console.log(temp);
document.getElementById('numero').innerHTML = `${temp}`;