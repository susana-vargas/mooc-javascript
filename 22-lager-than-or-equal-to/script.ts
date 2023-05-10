function validateInput(input: string | null): string {
    if (input) {
      return input;
    }
  
    return 'no se ingreso el dato';
  }
  
  (() => {
    class Main {
      static main() {
        //aqui empieza tu codigongresa tu edad'));
        let input2: string = validateInput(prompt('ingresa un numero'))
        let input: string = validateInput(prompt('ingresa otro numero'));
        let numero: number = Number(input);
        let numero2: number = Number(input2);
        if(numero > numero2){ // si se cumple la condicion
          console.log('el numero mas grande es: ' + numero)
        } else if (numero2 > numero){ // ni no se cumple la condicion else === si no 
            console.log('el numreo mas grande es ' + numero2)
        } else {
            console.log('los numeros son iguales');
        }      
      }
    }
    Main.main();
})();
