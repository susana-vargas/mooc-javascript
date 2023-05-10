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
        let first: string = (validateInput(prompt('hola ¿como estas?')));
        let second: string = (validateInput(prompt('me parece bien')));
        let third: string = (validateInput(prompt('cuentame mas')));
        let room: string = (validateInput(prompt('gracias por compartir')));
      }
    }
    Main.main();
  })();