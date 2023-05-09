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





const a: number = 30;

const parrafo = document.createElement('p')!!;
    

function crearUnParrafoDeNumero (number: number): void{
    parrafo.textContent = 'es mi parametro ' + number.toString()
    document.body.appendChild(parrafo)
}

crearUnParrafoDeNumero(a)