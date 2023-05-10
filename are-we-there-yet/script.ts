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
        while(true){
          let input:number = +validateInput(prompt('ingresa un numero')); 
          if(input === 4){
              break;
            }      
        }
      }
    }
    Main.main();
  })();
  
  
//le pide un numero al usuario y cuando ingresa 4 se 
//detiene el programa  