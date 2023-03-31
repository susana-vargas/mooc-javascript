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
      let name: String = (validateInput(prompt('te voy a contar una historia!, pero necesito que me des algo de imformacion primero, proporcioname el nombre del personage principal')));
      let job: string = (validateInput(prompt('A que se dedica?')));
      let space = ' ' //esto se deja como ejemplo pero no se usa en la consola
      let first: string = 'Erase una vez a ' //esto se deja como ejemplo pero no se usa en la consola
      let third: string = 'le gusta ser ' //esto se deja como ejemplo pero no se usa en la consola
      console.log('Aqui esta la historia! Erase una vez a' + name + ' ' + 'le gusta ser' + job)
    }
  }
  Main.main();
})();