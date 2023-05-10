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
        let greeting: string = "Hi"
        let space = " "
        console.log(greeting + space + "ada lovelace")
      }
    }
    Main.main();
  })();