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
        let input1: string = validateInput(prompt('ingresa un dato'));
        let input2: string = validateInput(prompt('ingresa otro dato'));
        if (input1 === input2){
            console.log('Las palabras son iguales');            
        } else {
            console.log('Las palabras son diferentes');
            
        }
      }
    }
    Main.main();
  })();
  
  
  