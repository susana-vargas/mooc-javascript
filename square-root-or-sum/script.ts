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
        let input: number = +validateInput(prompt('ingresa el primer numero'));
        let input1: number = +validateInput(prompt('ingresa el segundo numero'));
        const squareroot = Math.sqrt(input + input1)
        alert(squareroot)
      }
    }
    Main.main();
  })();


// le solicitas al usuario dos numeros, los sumas, y 
//devuelves la raiza cuadrada de la suma  