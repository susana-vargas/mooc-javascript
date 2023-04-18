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
      //entrada del usuario
      let name:string = validateInput(prompt('ingresa tu nombre'));
      //evaluacion a realizar
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);
      console.log(name);  
    }
  }
  Main.main();
})();


