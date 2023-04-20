function validateInput(input: string | null): string {
    if (input) {
      return input;
    }
  
    return 'no se ingreso el dato';
  }
  
  (() => {
    class Main {
      static main() {
        //aqui empieza tu codigo    

        //aqui se guarda la cantidad de numeros ingresados
        let cantidadDenumbers: number = 0;
        // aqui guarda la suma de los numeros ingresados
        let suma: number = 0;

        while(true){//bucle
        // aqui se lee la entrada del usuario
        let input: string = validateInput(prompt('ingresa un numero')); 
        // aqui la entrada del usuario de convierte en numemero
        let number: number = +input;
        //el programa romple el bucle si el usuario ingresa 0
        if(number === 0){
            break;
        }
        //el programa incrementa el contador de numbers cada vez 
        //que el usuario ingresa numeros
        cantidadDenumbers = cantidadDenumbers + 1
        // aqui el programa suma los numeros que ingresa el usuario
        suma = suma + number 
        }

        //aqui muestra en la consola el promedio de los numeros ingresados 
        console.log('el promedio es: ' + suma / cantidadDenumbers);
      }
    }
    Main.main();
  })();
  
  
//el problema es que: los numeros que ingresa el usuario continuamente lo valla sumando 
//y muestre en la consola el total de los numeros 