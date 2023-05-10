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
        debugger
        const input:string = validateInput(prompt('ingrese el valor del regalo'));
        const gift: number = Number(input)
        if (gift > 5000 && gift < 25000) /* aqui solo se evalua si se ejecuta el codigo */{
          const base:number = 100
          const resta:number = gift - 5000
          const mult:number = resta * .08
          console.log('impuesto a pagar ' + (mult + base));         
        } else if (gift >= 25000 && gift < 55000){
          const base:number = 1700
          const resta:number = gift - 250000
          const mult:number = resta * .10
          console.log('impuesto a pagar ' + (mult + base));          
        } else if (gift >= 55000 && gift < 200000){
          const base:number = 4700
          const resta:number = gift - 55000
          const mult:number = resta * .12
          console.log('impuesto a pagar ' + (mult + base));          
        }else if (gift >= 200000 && gift < 1000000){
          const base:number = 22100
          const resta:number = gift - 200000
          const mult:number = resta * .15
          console.log('impuesto a pagar ' + (mult + base));          
        } else if (gift >= 1000000){
          const base:number = 142100
          const resta:number = gift - 1000000
          const mult:number = resta * .17
          console.log('impuesto a pagar ' + (mult + base));           
        }
        
        
      }
    }
    Main.main();
  })();
  
  
  