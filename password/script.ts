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
        let password: string = validateInput(prompt('ingresa una contraseña'));
        if (password === 'caput dracoins'){
            console.log('¡Bienvenido!');            
        } else {
            console.log('¡no puedes pasar!');
            
        }
      }
    }
    Main.main();
  })();
  
  
  