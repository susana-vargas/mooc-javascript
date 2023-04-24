class Main {
    main() {
      //aqui va tu codigo
      let input = this.validateInput(prompt('ingresa un numero'));
      let numOfUser: number = +input
      let i: number = 0;
      while (i <= numOfUser) {
        console.log(i);
        i++;
      }



    }
  
    validateInput(input: string | null): string {
      if (input) {
        return input;
    }
  
      return 'no se ingreso el dato';
    }
  }
  
  const main = new Main();
  main.main();

//le pide un numero al usuario y muestra los numeros desde 0 hasta 
//el numero ingresado del usuario