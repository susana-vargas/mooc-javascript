const miBoton = document.getElementById('mi-boton')!!;
miBoton.addEventListener('click', main);


function main() {
    const numbers: number[] = leerEnteros()
    // quiero que muestre en consola todos los numeros
    // en las imagenes que te mande ya te enseñe a iterar sobre un array, revisalo
    let i: number = 0;
    while(i < numbers.length){
      console.log(numbers[i]);
      i++;
    }
    
    
  }
  
  function leerEnteros(): number[] {
    const numbers: number[] = [];
    while (true) {
      const input: string = prompt('ingresa enteros, -1 detiene el programa')!!;
      const number1: number = +input;
      if (number1 === -1) {
        break;
      }
      numbers.push(number1);
    }
  
    return numbers;
  }