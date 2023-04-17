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
        //entrada del usuario
        let number1: number = +validateInput(prompt('ingresa el primer numero'));
        let number2: number = +validateInput(prompt('ingresa el segundo numero'));
        //evaluacion a realizar
        if(number1 > number2){
            alert(number1 + ' es mayor a ' + number2)
        } else if (number2 > number1){ 
            alert(number2 + ' es mayor que ' + number1)
        } else if (number1 === number2 ) {
            alert(number1 + ' es igual que ' + number2)
        }
        
        
      }
    }
    Main.main();
  })();


