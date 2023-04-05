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
        let input: string = validateInput(prompt('ingresa la velocidad'));
        let speed: number = Number(input);
        
        if(speed > 120){
          console.log('multa de velocidad! ')
        }
      }
    }
    Main.main();
  })();
