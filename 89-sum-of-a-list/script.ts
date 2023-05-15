const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click',main);

function main(){
  const numbers: number[] = leerEnteros();
  let suma: number = 0;
  for(const suma of numbers){
    if (suma < numbers.length) {
      console.log(suma + numbers.length);      
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