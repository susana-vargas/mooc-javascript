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

        //se inicializa una variable en 0
        let sumaDeNumeros: number = 0;

        while(true){//bucle
        // aqui se lee la entrada del usuario
        let input: string = validateInput(prompt('ingresa un numero')); 
        // aqui la entrada del usuario de convierte en numemero
        let number: number = +input;
        //el programa romple el bucle si el usuario ingresa 0
        if(number === 0){
            break;
        }
        
        sumaDeNumeros = sumaDeNumeros + number
        }

        //el programa muestra el numero total de numeros al final del programa
        console.log('the sum of the numbers is: ' + sumaDeNumeros)
      }
    }
    Main.main();
  })();
  
  
//el problema es que: los numeros que ingresa el usuario continuamente lo valla sumando 
//y muestre en la consola el total de los numeros 