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
        let userNumber:string = validateInput(prompt('ingresa un numero'));
        let numerito: number = Number(userNumber)
        let data:string = validateInput(prompt('ingresa un dato '));
        console.log('ingresaste este numero!:' , numerito);
        console.log('ingresaste este dato!:' + data);
        // 'aqui esta el numero que ingresaste! 5.6'
      }
    }
    Main.main();
  })();