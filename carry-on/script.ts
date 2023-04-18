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
        let input:string = validateInput(prompt('¿Quieres continuar?')); 
        if(input === 'no'){
            alert('listo!');
            break;
        }        
      }
    }
  }
  Main.main();
})();


