// creazione array
let array = [];

for (let i = 0; i < 6; i++) {
  
  let userNumber = parseInt(prompt("dimmi un numero"));

  // controllo se il numero è pari o dispari
  if(userNumber % 2 == 1){
    array.push(userNumber);
  }
}

console.log(array);