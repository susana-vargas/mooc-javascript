
while (true) {
  let input : string = prompt('ingresa un numero, 0 detiene el programa')!!;
  let number1 : number = +input;
  if (number1 === 0) {
    break; 
  }
  console.log(number1, 'ingresaste este numero');
}

//paso1: numero del usuario
//paso2: si es igual a cero se rompe
//paso3: si no se muestra en la consola
//paso4: regresa al paso 1
