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
        let numero: number = Number(input);
        
        if(numero > 0){ // si se cumple la condicion
          console.log('el numero es pocitivo!')
        } else { // ni no se cumple la condicion else === ni no 
            console.log('el numero es negativo')
        }
        
      }
    }
    Main.main();
  })();
