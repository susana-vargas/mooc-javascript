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
      //evaluacion a realizar
      while(true){
        let input:number = +validateInput(prompt('ingresa un numero')); 
        if(input < 0){
            alert('numero inadecuado')
        } else if (input > 0){
            alert(input * 2)
        } else if(input === 0){
            break;
        }      
      }
    }
  }
  Main.main();
})();


