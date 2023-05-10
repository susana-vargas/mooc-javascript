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
        const input:string = validateInput(prompt('cuantos años tienes?')); 
        const edad: number = Number(input) 
        const min: number = 0
        const max: number = 120
        if (edad >= min && edad <= max){
            console.log('ok!');            
        }  else if (edad < min || edad > max){
            console.log('imposible!');                      
        }
      } 
    }
    Main.main();
  })();
  
  
  