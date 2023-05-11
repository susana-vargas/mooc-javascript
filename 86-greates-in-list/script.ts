const boton = document.getElementById('boton')!!;
boton.addEventListener('click', main);

function main() {
    const numbers: number[] = leerEnteros();
    //quiero que me muestre el numero mas grande del arreglo de 
    //numeros
    let i: number = 0;
    let max: number = 0;
    while (i < numbers.length) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
        i++;
    }
    console.log(max);  
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