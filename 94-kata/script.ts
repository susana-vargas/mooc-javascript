let numberUser : number[] = [] 
while (true) {
  let input: string = prompt('ingresa tus numeros, 0 detiene el programa')!!;
  let number: number = +input;
  if (number === 0) {
    break;  
  }
  numberUser.push(number)
}
numberUser.forEach((number) => console.log(number))


// numero de usuario 
//lo pasa a numero 
// si es igual a cero lo rompe 
//en una varable se guarda un arreglo de numeros 
//cuando el bucle se rompa tiene que mostrar todos los numeros 