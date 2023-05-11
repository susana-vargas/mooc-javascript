const botonEjecutar = document.getElementById('boton-ejecutar')!!;
botonEjecutar.addEventListener('click', main);

function main() {
  const numbers: number[] = leerEnteros();
  //añade una funcionalidad que le pregunta al usuario por un numero y tiene que
  //imprimir el indice en el que se encuentra, si no se encuentra el indice el programa 
  //no imprime nada
  //78
  //89
  //97
  //4
  //6
  //12
  //dime un numero - 4 su indice es el 3
  const input: string = prompt('Que numero')!!;
  const numberUser: number = +input;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === numberUser) {
        crearParrafoConNumero(i)
    }
  }
}

function leerEnteros(): number[] {
  const numbers: number[] = [];
  while (true) {
    const input: string = prompt('ingresa numeros, -1 detiene el programa')!!;
    const number1: number = +input;
    if (number1 === -1) {
      break;
    }
    numbers.push(number1);
  }
  return numbers;
}

function crearParrafoConNumero(numero: number): void {
  const parrafo = document.createElement('p')
  parrafo.textContent = numero.toString()
  document.body.appendChild(parrafo)
}

//aqui se muestra el indice de un elemento 