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
        const mult400:number = year % 400  
        if (mult4 === 0 && (mult100 === 0 || ! mult400)){
            console.log('año bisiesto!');            
        } else {
            console.log('el año no es bisiesto');            
        }
      } 
    }
    Main.main();
  })();
  
  
  //este fue la correcta
  //if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))