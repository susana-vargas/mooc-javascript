const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click',main);

function main(){
  const numbers: number[] = leerEnteros();
  //se crea una variable que inicia en 0
  let suma: number = 0;
   
  numbers.forEach((numero) => {
    suma = suma + numero
  });

  parrafo(suma / numbers.length)
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

//para sacar ubn promedio se suman los numeros ingresados y se divide
//entre la cantidad de numeros sumados 
//ya tengo la suma solo falta dividirlo entre el numero.length