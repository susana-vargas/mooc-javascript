const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click', main);

function main() {
  const numbers: number[] = leerEnteros();
  const input: string = prompt('ingresa el numero que  quieras buscar')!!;
  const numberBuscado: number = +input
  let seEncontroElNumero: boolean = false;
  //asi se itera con el metodo forEach de los arreglos
  numbers.forEach((numero) => {
    if (numero === numberBuscado) {
      seEncontroElNumero = true;
    }
  });
  if (seEncontroElNumero) {
    parrafo(numberBuscado.toString())
  }

  //asi se itera con el bucle for of
  for (const numero of numbers) {
    if (numero === numberBuscado) {
      parrafo(numero.toString())
    }
  }

  //asi se itera con un bucle while 
  let contador: number = 0;
  while(contador < numbers.length){
    const numero = numbers[contador]
    if (numero === numberBuscado) {
      parrafo(numero.toString())
    }
    contador++;
  }

  //asi se itera con un bucle for 
  for (let indice = 0; indice < numbers.length; indice++) {
    const element = numbers[indice];
    if (element === numberBuscado) {
      parrafo(element.toString())
    }
  }
}

function leerEnteros(): number[]{
  const numbers: number[] = []
  while(true){
    const input: string = prompt('ingresa numeros, el programa se detiene cuando ingrese -1 ')!!;
    const number1: number = +input;
    if (number1 === -1) {
        break;
    }
    numbers.push(number1);
  }
    return numbers;    
}

function parrafo(contenidoDelParrafo: string) {
  const parrafo = document.createElement('p');
  parrafo.textContent = contenidoDelParrafo
  document.body.appendChild(parrafo)
}

//un programa que lee numeros del usuario, se detiene cuando ingresa -1
//despues le pide al usuario un numero, y lo busca en las 
//entradas anteriores, si lo encuentra lo muestra en un parrafo