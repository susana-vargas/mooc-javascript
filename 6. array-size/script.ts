const miBoton = document.getElementById('mi-boton')!!;
miBoton.addEventListener('click', main);



//hoisting: primero guarda todas las funciones, luego ejecuta el archivo
function main() {
  const numbers: number[] = leerEnteros();
  //quiero que sume el segundo mas el tercer numero y que lo muestre en consola
  const parrafo = document.createElement('div');
  const extension = numbers.length
  parrafo.textContent = extension.toString()
  document.body.appendChild(parrafo);  
  numbers.length
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