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
        let input: string = validateInput(prompt('ingresa tu edad'));
        let age: number = Number(input);
        
        if(age < 18){ // si se cumple la condicion
          console.log('aun no eres un adulto!')
        } else { // ni no se cumple la condicion else === si no 
            console.log('ya eres un adulto!')
        }
        
      }
    }
    Main.main();
  })();
