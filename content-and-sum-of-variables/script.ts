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
        let input1:string = validateInput(prompt('ingresa el primer numero'));
        let input2:string = validateInput(prompt('ingresa el segundo numero'));
        let number1:number = Number(input1)
        let number2:number = Number(input2) 
        console.log((number1 + ' + ' + number2) + ' = ' + (number1 + number2));
      }
    }
    Main.main();
  })();