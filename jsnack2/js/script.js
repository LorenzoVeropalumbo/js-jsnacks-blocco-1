
const userNumber = prompt("dimmi un numero a 4 cifre");

let temp = 0;

document.getElementById('user').innerHTML = userNumber;

for (let i = 0; i < userNumber.length; i++) {
  
  if(userNumber.length == 4){
    temp = temp + parseInt(userNumber[i]);
  }
  else{
    console.log("seleziona un numero valido")
  }
}

console.log(temp);
document.getElementById('numero').innerHTML = `${temp}`;