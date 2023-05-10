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

        //evaluacion a realizar
        let numbers: number = 0;

        while(true){//bucle
        // aqui se lee la entrada del usuario
        let input: string = validateInput(prompt('ingresa un numero')); 
        // aqui la entrada del usuario de convierte en numemero
        let number: number = +input;
        //el programa romple el bucle si el usuario ingresa 0
        if(number === 0){
            break;
        }
        //el programa incrementa el contador de numbers cada vez que el 
        //que el usuario ingresa numeros
        numbers = numbers + 1
        }

        //el programa muestra el numero total de numeros al final del programa
        console.log('el total de numeros es: ' + numbers)
      }
    }
    Main.main();
  })();
  
  
//le pide numeros al usuario y cuenta cuantas veces el ususuario 
//ingreso un numero, y si el usuario ingresa 0 se rompe el bucle