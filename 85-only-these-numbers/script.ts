const miBoton = document.getElementById('mi-boton')!!;
miBoton.addEventListener('click',main);


function main() {
    const numbers = leerEnteros();
    const input1: string = prompt('De donde ')!!;
    const input2: string = prompt('A donde ')!!;
    const from: number = +input1;
    const to: number = +input2;
    
    let i: number = from

    while (i <= to){
        console.log(numbers[from]);
        i++;
    }
    // preguntar al usuario de este 0 - hasta este 2
    //72;
    //2;
    //8;
    //11
    // - 1;
  }
  
  function leerEnteros(): number[] {
    const numbers: number[] = [];
  
    while (true) {
      const input: string = prompt('ingresa un entero, -1 detiene el programa')!!;
      const number1: number = +input;
      if (number1 === -1) {
        break;
      }
      numbers.push(number1);
    }
  
    return numbers;
  }