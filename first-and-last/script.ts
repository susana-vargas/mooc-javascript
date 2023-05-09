  const boton = document.getElementById('boton')!!;
  boton.addEventListener('click', main);  
  
  
function main() {
    const nombres: string[] = leerNombres();
    //quiero que me muestre en consola el primero y el ultimo elemento    
    const name1: string = nombres[0];
    console.log(nombres[0]);
    console.log(nombres[nombres.length - 1]);
    
  }
  
  function leerNombres(): string[] {
    
    const nombres: string[] = [];
    while (true) {
      const input = prompt('ingresa nombres, una entrada vacia detiene el programa')!!;
      if (input === '') {
        break;
      }
      nombres.push(input);
    }
  
    return nombres;
  }