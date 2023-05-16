const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click',main);

function main(){
  const numbers: number[] = leerEnteros();
  //se crea una variable que inicia en 0
  let suma: number = 0;
  //en el bucle for se declara una constante  
  for(const number of numbers){
   //se suma el numero 0 mas el numero de numeros
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

//aqui se ejecuta una funcion sobre sumar numeros