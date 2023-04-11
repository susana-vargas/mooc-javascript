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
        let dato1: string = validateInput(prompt('ingresa un dato'));
        let dato2: string = validateInput(prompt('ingresa otro dato'));
        if (dato1 === dato2){
            console.log('Las palabras son iguales');            
        } else {
            console.log('Las palabras son diferentes');
            
        }
      }
    }
    Main.main();
  })();
  
  
  