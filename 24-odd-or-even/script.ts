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
        let input: string = validateInput(prompt('ingresa un numero'));
        let number: number = Number(input);
        let module:number = number % 2
        if (module === 0 ) {
            console.log('¡Es par!');
        } else {
            console.log('¡Es non!');            
        }
      }
    }
    Main.main();
  })();
  
  
  