
const numerArray = [22,55,77,49,18,12,15,0];

for (let i = 0; i < numerArray.length; i++) {
  
  if(numerArray[i] % 2 == 0){
    document.getElementById('numero-dispari').innerHTML += ` ${numerArray[i]}`;
  }
  else{
    document.getElementById('numero-pari').innerHTML += ` ${numerArray[i]}`;
  }
}