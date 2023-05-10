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
        let chicken: number = 1;
        let bacon: number = .5
        let trator: string = 'none!'

        chicken = 3;
        bacon = 2.5;
        trator = 'zetor'

        console.log('chicken: ' + chicken)
        console.log('bacon: ' + bacon)
        console.log('trator: ' + trator)     
      }
    }
    Main.main();
  })();

  //chicken -> 3
  // bacon -> 2.5
  // trator -> zetor