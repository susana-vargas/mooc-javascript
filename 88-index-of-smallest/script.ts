const boton = document.getElementById('boton')!!;
boton.addEventListener('click', main);

function main() {
  const numbers: number[] = leerEnteros();
    
    
}

function leerEnteros(): number[] {
    const numbers: number[] = []
    while(true){
        const input: string = prompt('ingresa numeros, el programa se detiene cuando ingrese 9999 ')!!;
        const number1: number = +input;
        if (number1 === 9999) {
            break;
        }
        numbers.push(number1);
    }
    return numbers;
}
