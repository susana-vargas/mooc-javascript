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
        let data: string = (validateInput(prompt('ingresa un dato')));
        console.log(data)
        console.log(data)
        console.log(data)
      }
    }
    Main.main();
  })();