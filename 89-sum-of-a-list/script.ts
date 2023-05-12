const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click',main);

function main(){
  const numbers: number[] = leerEnteros();
  const suma: number = 0;
  suma = suma + numbers
  for(const suma of numbers){
    
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