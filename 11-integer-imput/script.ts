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
        let dataNumber: string = validateInput(prompt('ingrese un numero')); 
        let otroNumber: number = Number(dataNumber)
        console.log('aqui esta el numero que ingresaste! ' + otroNumber, otroNumber, dataNumber);  
        // 'aqui esta el numero que ingresaste! 5.6'
      }
    }
    Main.main();
  })();