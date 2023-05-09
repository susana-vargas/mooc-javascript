const miboton = document.getElementById('mi-boton')!!;
miboton.addEventListener('click',main)


function main() {
  const numbers: number[] = leerEnteros();
  //quiero que me muestre en consola el ultimo elemento
  console.log(numbers [numbers.length - 1]);  
}

function leerEnteros(): number[] {
  const numbers: number[] = [];
  while (true) {
    const input = prompt('ingresa numeros, 0 detiene el programa')!!;
    const number1: number = +input;
    if (number1 === 0) {
      break;
    }
    numbers.push(number1);
  }

  return numbers;
}










function parrafoDeNumero (numero: number): void{ 
  const parrafo = document.createElement('p');
  parrafo.textContent = 'mi parametro es: ' + numero
  document.body.appendChild(parrafo)
}

parrafoDeNumero(13)



//necesito una funcion que recibe como parametro un numero
//crea un parrafo con ese numero y lo añade al dom