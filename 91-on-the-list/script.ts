const botonIniciar = document.getElementById('boton-iniciar')!!;
botonIniciar.addEventListener('click', main);

function main() {
  const nombres = leerNombres()
  const nombreBuscado: string = prompt('ingresa un nombre que quieras buscar')!!; 
  let seEncontroElNombre: boolean = false;
  //asi se itera con el metodo forEach de los arreglos
  nombres.forEach((nombre) => {
    if (nombre === nombreBuscado) {
      seEncontroElNombre = true;  
    }
  });
 //asi se itera con el bucle for of
  for (const nombre of nombres) {
    if (nombre === nombreBuscado) {
      crearParrafo('desde el bucle for of' + nombre)
    }
  }
  //asi se itera con un bucle while
  let contador: number = 0;
  while(contador < nombres.length){
    const nombre = nombres[contador]
    if (nombre === nombreBuscado) {
      crearParrafo('desde el bucle while' + nombre)
    }
    contador++;
  }
  //asi se itera con un bucle for 
  for (let indice = 0; indice < nombres.length; indice++) {
    const element = nombres[indice];
    if (element === nombreBuscado) {
      crearParrafo('desde el bucle for' + element)
    }
  }
  //
  if (seEncontroElNombre) {
    crearParrafo('desde el bicle forEach' + nombreBuscado)
  }
}


function leerNombres() {
  const nombres: string[] = [];
  while(true) {
    const input = prompt('ingresa un nombre, una entrada vacia detiene la lectura')!!;
    if(input === '') {
      break
    }
    nombres.push(input);
  }
  return nombres;
}
    
function crearParrafo(contenidoDelParrafo: string) {
  const parrafo = document.createElement('p');
  parrafo.textContent = contenidoDelParrafo;
  document.body.appendChild(parrafo);
}

//un programa que lee nombres del usuario, se detiene cuando ingresan una 
//entrada vacia, despues le pide al usuario un nombre, y lo busca en las 
//entradas anteriores, si lo encuentra lo muestra en un parrafo