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
      let input: string = validateInput(prompt('ingresa un promedio'))
      let numero:number = Number(input)
      if (numero >100){
        console.log('increible!');        
      } else if (numero >= 90){
        console.log('5');        
      } else if (numero >= 80){
        console.log('4');        
      } else if (numero >= 70){
        console.log('3');        
      } else if (numero >= 60) {
        console.log('2');        
      } else if (numero >= 50){
        console.log('1');        
      } else if (numero >= 0){
        console.log('faied!');        
      } else if (numero < 0){
        console.log('imposible!');
      }
    }
  }
  Main.main();
})();


