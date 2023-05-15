const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click',main);

function main(){
  const numbers: number[] = leerEnteros();
  let suma: number = 0;
  for(const number of numbers){
    suma = suma + number    
    }
    parrafo(suma)
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

function parrafo(contenidoDelParrafo: number) {
  const parrafo = document.createElement('p');
  parrafo.textContent = contenidoDelParrafo.toString();
  document.body.appendChild(parrafo)
}

//pordia ser que sea una funcion inbocada que realize la suma de los numeros 
//function sumaDeNumeros (){
// 
//}