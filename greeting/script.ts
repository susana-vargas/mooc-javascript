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
        let name: string = (validateInput(prompt('¿cual es tu nombre?')));
        console.log('hola ' + name)
        let lastname: string = (validateInput(prompt('¿cual es tu apellido?')));
        let space = ' '
        console.log('hola ' + name + space + lastname); 
      }
    }
    Main.main();
  })();