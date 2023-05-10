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
        let number:number = +input
        let mult:number = number * number
        alert(mult)
      }
    }
    Main.main();
  })();


  // le pide un numero al usuario y le regresa el cuadrado del numero
  // number * numero = ? 