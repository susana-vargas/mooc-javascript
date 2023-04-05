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
        let numerito: number = Number(input);
        
        if(numerito === 1984){
          console.log('orwell!')
        }
      }
    }
    Main.main();
  })();
