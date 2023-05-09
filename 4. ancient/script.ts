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
        let input: string = validateInput(prompt('ingresa un año'));
        let ancient: number = Number(input);
        
        if(ancient < 2015){
          console.log('anciano! ')
        }
      }
    }
    Main.main();
  })();
