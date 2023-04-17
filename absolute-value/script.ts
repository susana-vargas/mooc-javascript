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
      let number: number = +validateInput(prompt('ingresa un  numero'));
      //evaluacion a realizar
      if (number < 0) {
        alert(number * -1)
      } else {
        alert(number)
      }


    }
  }
  Main.main();
})();


