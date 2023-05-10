const miBoton = document.getElementById('mi-boton')!!;
miBoton.addEventListener('click', main)

//hoisting: primero guarda todas las funciones, luego ejecuta el archivo
function main() {
  const numbers: number[] = leerEnteros();
  //quiero que sume el segundo mas el tercer numero y que lo muestre en consola
  const number1: number = numbers[1];
  const number2: number = numbers[2];
  const suma: number = number1 + number2
  console.log(numbers[1] + numbers[2])
  console.log(suma);
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