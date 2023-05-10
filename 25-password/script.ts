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
        const input: string = validateInput(prompt('ingresa una contraseña'));
        const PASSWORD: string = 'caput draconis'
        if (input === PASSWORD){
            console.log('¡Bienvenido!');            
        } else {
            console.log('¡no puedes pasar!');
            
        }
      }
    }
    Main.main();
  })();
  
  
  