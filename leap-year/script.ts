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
        const input:string = validateInput(prompt('ingresa un año'));
        const year:number = Number(input)
        const mult4:number = year % 4
        const mult100:number = year % 100
        const mul400:number = year % 400  
        if (mult4 === 0 && mult100 === 0){
            console.log('año bisiesto!');            
        } else {
            console.log('el año no es bisiesto');            
        }
      } 
    }
    Main.main();
  })();
  
  
  //el numero 2000 se convierte en año bisiesto