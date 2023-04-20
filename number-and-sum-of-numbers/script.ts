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
        let sumofthenumbers: number = 0;
        let numberofnumbers: number = 0;

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
        numberofnumbers = numberofnumbers + 1


        // aqui el programa suma los numeros que ingresa el usuario
        sumofthenumbers = sumofthenumbers + number
        }

        //el programa muestra el numero total de numeros al final del programa
        console.log('numero de numeros: ' + numberofnumbers)


        //el programa muestra la suma total de los numeros ingresados
        console.log('suma de numeros: ' + sumofthenumbers);
        
      }
    }
    Main.main();
  })();
  
  
//el problema es que: los numeros que ingresa el usuario continuamente lo valla sumando 
//y muestre en la consola el total de los numeros 